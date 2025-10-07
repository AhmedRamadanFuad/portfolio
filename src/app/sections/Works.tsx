// import React, { useState } from "react";
import work1 from "@/assets/work1.png";
import work2 from "@/assets/work2.png";
import work3 from "@/assets/work3.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Works() {
  //   const [activeFilter, setActiveFilter] = useState("All");
  //   const filters = ["All", "UI", "UX", "Web Design"];
  const works = [
    { href: "https://shop-co-sable-six.vercel.app/", image: work1 },
    { href: "https://chakra-ui-dashboard-pymz.vercel.app/", image: work2 },
    { href: "https://weather-app-tau-two-65.vercel.app/", image: work3 },
  ];
  return (
    <section
      id="work"
      className="md:pt-[268px] pt-[100px] md:pb-[268px] px-5 md:px-10 pb-[100px] bg-[url(@/assets/work-bg.png)] bg-cover relative flex items-center"
    >
      <div className="container ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-[64px] max-sm:text-3xl font-bold text-accent-foreground mb-6"
        >
          My recent <span className="text-primary">works</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4 + index / 6,
              }}
              viewport={{ once: true, amount: 0.5 }}
              key={work.href}
            >
              <Link
                href={work.href}
                className="bg-[#393E46]/50 backdrop-blur-[4px] rounded-[16px] sm:py-[61px] py-[30px] sm:px-[52px] px-[25px] flex items-center justify-center  group cursor-pointer transition"
              >
                <div className="group-hover:scale-105 transition h-[158px] duration-300">
                  <Image src={work.image} alt="" className="max-h-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
