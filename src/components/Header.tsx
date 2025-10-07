"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "#about" },
  { name: "My Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [active, setActive] = useState("");
  return (
    <motion.header
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 px-5 md:px-10 text-accent-foreground"
    >
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl font-oswald font-bold">
          <Link href="/">AhmedRamadan</Link>
        </h1>
        <ul className="flex gap-12 max-lg:hidden">
          {links.map((link) => (
            <li key={link.name} onClick={() => setActive(link.name)}>
              <Link
                href={link.href}
                className={`text-lg hover:text-primary ${
                  active === link.name && "text-primary"
                } transition duration-300`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <DrawerDemo active={active} setActive={setActive} />
        </div>
      </div>
    </motion.header>
  );
}

function DrawerDemo({
  active,
  setActive,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Menu className="text-accent-foreground size-6 cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent className="bg-secondary-foreground border-secondary-foreground right-0">
        <div className="mx-auto w-full max-w-sm text-accent-foreground">
          <DrawerFooter>
            <DrawerClose asChild>
              <X className="size-6 cursor-pointer" />
            </DrawerClose>
          </DrawerFooter>
          <DrawerHeader className="hidden">
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <ul className="flex flex-col gap-12 lg:hidden">
              {links.map((link) => (
                <li key={link.name} onClick={() => setActive(link.name)}>
                  <Link
                    href={link.href}
                    className={`text-lg hover:text-primary ${
                      active === link.name && "text-primary"
                    } transition duration-300`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default Header;
