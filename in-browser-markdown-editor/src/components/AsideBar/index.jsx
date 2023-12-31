import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import classNames from "classnames";
import Logo from "../../assets/logo.svg";
import Toggle from "../Toggle";

function index() {
  const { isActiveAside, setActivePage, markdown, setMarkdown } = useData();
  const [newDocument, setNewDocument] = useState(false);
  const [newDocumentValue, setNewDocumentValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setNewDocument(false);
      addNewItem();
    }
  };

  // ADD NEW ITEM
  const addNewItem = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("tr-TR");
    const newItem = {
      createdAt: formattedDate,
      name: newDocumentValue,
      content: "",
    };

    // ITEM UPDATE
    const updateItem = [...markdown, newItem];
    setMarkdown(updateItem);
  };

  useEffect(() => {
    const storageData = localStorage.getItem("myData");
    if (storageData) {
      const parsedData = JSON.parse(storageData);
      setMarkdown([...markdown, ...parsedData]);
    }
  }, []);

  return (
    <aside
      className={classNames(
        "h-screen",
        "fixed",
        "bg-black-900",
        "text-white",
        "z-20",
        "top-0",
        "left-0",
        "overflow-hidden",
        "transition-all",
        "duration-500",
        { "w-[250px]": isActiveAside, "w-[0]": !isActiveAside }
      )}
    >
      <div className="w-full h-full px-6 pt-[27px] pb-8 flex flex-col">
        <div className="">
          <img src={Logo} alt="logo" />
        </div>
        <h4 className="uppercase font-roboto text-sm font-medium leading-normal tracking-[2px] text-black-500 mt-[27px]">
          My Documents
        </h4>

        <button
          onClick={() => setNewDocument(true)}
          className="inline-flex w-full h-10 justify-center items-center bg-orange hover:bg-orange-hover text-white font-normal text-[15px] font-roboto leading-normal rounded mt-[29px]"
        >
          + New Document
        </button>

        {/* Documents */}

        <div className="flex flex-col gap-7 mt-6 ">
          {markdown.map((item, i) => (
            <div
              key={i}
              onClick={() => setActivePage(i)}
              className="flex gap-7 items-center cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1071 3.39286C13.2738 3.55952 13.4167 3.78571 13.5357 4.07143C13.6548 4.35714 13.7143 4.61905 13.7143 4.85714V15.1429C13.7143 15.381 13.631 15.5833 13.4643 15.75C13.2976 15.9167 13.0952 16 12.8571 16H0.857143C0.619048 16 0.416667 15.9167 0.25 15.75C0.0833333 15.5833 0 15.381 0 15.1429V0.857143C0 0.619048 0.0833333 0.416667 0.25 0.25C0.416667 0.0833333 0.619048 0 0.857143 0H8.85714C9.09524 0 9.35714 0.0595238 9.64286 0.178571C9.92857 0.297619 10.1548 0.440476 10.3214 0.607143L13.1071 3.39286ZM9.14286 1.21429V4.57143H12.5C12.4405 4.39881 12.375 4.27679 12.3036 4.20536L9.50893 1.41071C9.4375 1.33929 9.31548 1.27381 9.14286 1.21429ZM12.5714 5.71429V14.8571H1.14286V1.14286H8V4.85714C8 5.09524 8.08333 5.29762 8.25 5.46429C8.41667 5.63095 8.61905 5.71429 8.85714 5.71429H12.5714Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h6 className="text-[13px] font-light leading-normal font-roboto">
                  {item.createdAt}
                </h6>
                <h3 className="text-[15px] font-normal font-roboto leading-normal">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
          {newDocument && (
            <>
              <div className="flex items-center gap-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.1071 3.39286C13.2738 3.55952 13.4167 3.78571 13.5357 4.07143C13.6548 4.35714 13.7143 4.61905 13.7143 4.85714V15.1429C13.7143 15.381 13.631 15.5833 13.4643 15.75C13.2976 15.9167 13.0952 16 12.8571 16H0.857143C0.619048 16 0.416667 15.9167 0.25 15.75C0.0833333 15.5833 0 15.381 0 15.1429V0.857143C0 0.619048 0.0833333 0.416667 0.25 0.25C0.416667 0.0833333 0.619048 0 0.857143 0H8.85714C9.09524 0 9.35714 0.0595238 9.64286 0.178571C9.92857 0.297619 10.1548 0.440476 10.3214 0.607143L13.1071 3.39286ZM9.14286 1.21429V4.57143H12.5C12.4405 4.39881 12.375 4.27679 12.3036 4.20536L9.50893 1.41071C9.4375 1.33929 9.31548 1.27381 9.14286 1.21429ZM12.5714 5.71429V14.8571H1.14286V1.14286H8V4.85714C8 5.09524 8.08333 5.29762 8.25 5.46429C8.41667 5.63095 8.61905 5.71429 8.85714 5.71429H12.5714Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <input
                  value={newDocumentValue}
                  onChange={(e) => setNewDocumentValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="bg-black-800 py-1 pl-1 outline-none"
                  type="text"
                  placeholder="Document Name"
                />
              </div>
            </>
          )}
        </div>

        <Toggle className="flex items-center gap-1 mt-auto" />
      </div>
    </aside>
  );
}

export default index;
