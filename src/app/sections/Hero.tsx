import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import { motion } from "framer-motion";
import Link from "next/link";
// import resume from ;

function Hero() {
  return (
    <section className="md:pt-[233px] pt-[80px] pb-[64px]  px-5 md:px-10">
      <div className="container justify-center flex max-lg:flex-col max-lg:items-center gap-10 md:gap-[80px] lg:gap-[165px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:translate-y-[39px] lg:translate-x-[84px] relative space-y-12"
        >
          <Image
            src={hero3}
            alt=""
            className="absolute w-[40px] sm:w-[50px] sm:top-10 -left-6 sm:-left-18 md:w-[89.9px] md:h-[221.69px] md:top-[51px] md:left-[-99.9px] rotate-12 sm:-rotate-6"
          />
          <h1 className="text-[30px] sm:text-[45px] max-sm:mx-auto text-center md:text-7xl lg:text-[96px] text-accent-foreground font-bold uppercase md:leading-[96px]">
            FRONTEND
            <br />
            <span className="text-primary">DEVELOPER</span>
          </h1>
          <div className="flex gap-2 sm:gap-4">
            <Button className="text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
              <Link href="#contact">Hire me</Link>
            </Button>
            <Button
              variant="secondary"
              size="default"
              className="text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"
            >
              <Link href="/resume.pdf" download className="flex gap-2">
                Download CV{" "}
                <Download size={24} className="text-accent-foreground" />
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:size-[514px] max-w-[500px] relative"
        >
          <Image src={hero1} alt="" className=" w-full h-full" />
          <Image
            src={hero2}
            alt=""
            className="absolute w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] lg:h-[472.65px] lg:top-[183px] md:top-[40.6%] top-[50.6%] lg:left-[-33px] md:left-[-6.42%] left-[20.42%]"
          />
        </motion.div>
      </div>

      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="animate-bounce text-cyan-400" size={32} />
      </div> */}
    </section>
  );
}

export default Hero;
