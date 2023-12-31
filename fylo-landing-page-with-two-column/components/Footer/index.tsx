import React from "react";
import FooterLogo from "@/assets/icons/logo-footer.svg";
import PhoneImg from "@/assets/icons/icon-phone.svg";
import MailImg from "@/assets/icons/icon-email.svg";
import SocialLinksImg from "@/assets/icons/social-links.svg";
import { LINKS } from "./constant";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-10 bg-[#07043b] text-white ">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div>
          <FooterLogo />
          <div className="flex items-center  gap-4 mt-8 ">
            <PhoneImg />
            <h6>Phone:+1-543-123-4567</h6>
          </div>
          <div className="flex items-center  gap-4 mt-4 ">
            <MailImg />
            <Link href={"mailto:example@fylo.com"}>example@fylo.com</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          {LINKS[0].map((link) => (
            <Link
              key={link.id}
              className="hover:text-[#6c9bff]"
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-8">
          {LINKS[1].map((link) => (
            <Link
              className="hover:text-[#6c9bff]"
              key={link.id}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href={"/"}>
            <SocialLinksImg />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
