import {
  Dribbble,
  Facebook,
  Github,
  Home,
  Instagram,
  Mail,
  User,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const links = [
    {
      name: "Home",
      href: "/",
      icon: <Home size={24} className="md:size-6 size-4" />,
    },
    {
      name: "About Me",
      href: "#about",
      icon: <User size={24} className="md:size-6 size-4" />,
    },
    {
      name: "My Work",
      href: "#work",
      icon: <Workflow size={24} className="md:size-6 size-4" />,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <Mail size={24} className="md:size-6 size-4" />,
    },
  ];

  const socials = [
    { href: "#", icon: <Facebook size={24} className="md:size-6 size-4" /> },
    { href: "#", icon: <Instagram size={24} className="md:size-6 size-4" /> },
    { href: "#", icon: <Dribbble size={24} className="md:size-6 size-4" /> },
    { href: "#", icon: <Github size={24} className="md:size-6 size-4" /> },
  ];
  return (
    <footer className="md:pt-[100px] pt-[50px]  md:pb-[48px] pb-[30px] md:space-y-[92px] space-y-[40px] px-5 md:px-10">
      <div className="flex justify-center items-center flex-col md:gap-[38px] gap-[20px] text-accent-foreground">
        <ul className="flex md:gap-12 gap-4 flex-wrap max-sm:justify-center">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className="flex md:text-lg text-sm items-center gap-1 md:gap-2.5 hover:text-primary transition duration-300"
                href={link.href}
              >
                {link.icon} {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex md:gap-6 gap-3">
          {socials.map((social, index) => (
            <li key={index}>
              <Link
                className="md:w-12 md:h-12 max-md:size-10 bg-secondary-foreground rounded-full flex items-center justify-center hover:bg-primary transition duration-300"
                href={social.href}
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <p className="container text-accent text-sm md:text-lg text-end">
        Young UI Bamboo - Privacy Policy
      </p> */}
    </footer>
  );
}

export default Footer;
