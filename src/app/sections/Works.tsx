// import React, { useState } from "react";
import work1 from "@/assets/work1.png";
import work2 from "@/assets/work2.png";
import Image from "next/image";
import Link from "next/link";
function Works() {
  //   const [activeFilter, setActiveFilter] = useState("All");
  //   const filters = ["All", "UI", "UX", "Web Design"];
  const works = [
    { href: "https://shop-co-sable-six.vercel.app/", image: work1 },
    { href: "https://chakra-ui-dashboard-pymz.vercel.app/", image: work2 },
  ];
  return (
    <section
      id="work"
      className="md:pt-[268px] pt-[100px] md:pb-[268px] px-5 md:px-10 pb-[100px] bg-[url(@/assets/work-bg.png)] bg-cover relative flex items-center"
    >
      <div className="container ">
        <h2 className="text-[64px] max-sm:text-3xl font-bold text-accent-foreground mb-6">
          My recent <span className="text-primary">works</span>
        </h2>

        {/* <div className="flex gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition ${
                activeFilter === filter
                  ? "bg-cyan-400 text-black font-semibold"
                  : "bg-[#252834] text-white hover:bg-[#2d3142]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link
              href={work.href}
              key={work.href}
              className="bg-[#393E46]/50 backdrop-blur-[4px] rounded-[16px] sm:py-[61px] py-[30px] sm:px-[52px] px-[25px] flex items-center justify-center  group cursor-pointer transition"
            >
              <div className="group-hover:scale-105 transition duration-300">
                <Image src={work.image} alt="" className="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
