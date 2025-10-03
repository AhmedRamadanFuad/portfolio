import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";
import vectorAbout1 from "@/assets/vector-about1.png";
import vectorAbout2 from "@/assets/vector-about2.png";
import vectorAbout3 from "@/assets/vector-about3.png";
import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="md:pt-[256px] pt-[100px] md:pb-[132px] pb-[60px] px-5 md:px-10"
    >
      <div className="container max-lg:flex-col max-lg:items-center justify-center flex gap-[179px]">
        <div className="translate-y-[26px] relative sm:max-w-[389px] max-w-full">
          <Image
            src={vectorAbout1}
            alt=""
            className="absolute w-[61.54px] h-[46.57px] top-[-74.43px] left-0"
          />
          <Image
            src={vectorAbout2}
            alt=""
            className="absolute w-[57.33px] h-[88.16px] sm:top-0 top-[-50px] sm:right-[-37.65px] right-[17.65px]"
          />
          <Image
            src={vectorAbout3}
            alt=""
            className="absolute lg:w-[112.72px] w-[70px] lg:h-[169.89px] lg:bottom-[-65px] bottom-[-120px] left-[161px]  rotate-50"
          />
          <h2 className="sm:text-[64px] text-3xl font-bold text-accent-foreground mb-6">
            About <span className="text-primary">me</span>
          </h2>
          <p className="text-accent text-lg">
            I am a motivated Frontend Developer from Egypt, skilled in React,
            Next.js, Tailwind CSS, Framer Motion, shadcn/ui, and Redux. I enjoy
            turning ideas into clean, functional, and interactive user
            experiences. As a fresh graduate, I am eager to apply my skills,
            grow in real-world projects, and contribute to building modern,
            scalable web applications.
            {/* ...{" "}
            <span className="font-bold text-accent-foreground">Read more</span> */}
          </p>
        </div>
        <div className="md:w-[665.33px] max-w-[600px] md:h-[499px] relative">
          <Image src={about1} alt="" className="w-full h-full" />
          <Image
            src={about2}
            alt=""
            className="absolute md:w-[412.68px]  min-[430px]:w-[300px] w-[200px]  md:h-[353.14px] md:top-[224.3px] top-[44.8%] md:left-[108px] left-[16.2%]"
          />
        </div>
      </div>
      <div className="h-px w-full bg-[#EEEEEE]/10 md:mt-[163px] mt-[100px]" />
    </section>
  );
}

export default About;
