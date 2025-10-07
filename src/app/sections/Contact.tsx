import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import contact1 from "@/assets/contact1.png";
import vectorContact1 from "@/assets/vector-contact-1.png";
import vectorContact2 from "@/assets/vector-contact-2.png";
import vectorContact3 from "@/assets/vector-contact-3.png";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center md:pt-[258px] pt-[100px] md:pb-[268px] pb-[100px] px-5 md:px-10"
    >
      <div className="container max-lg:flex-col max-lg:items-center max-lg:gap-[500px] max-sm:gap-[300px] justify-center flex gap-[145px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative h-fit"
        >
          <Image
            src={contact1}
            alt=""
            className="absolute sm:w-[255.37px] w-[150px] sm:h-[348px] top-[80%] left-[44%] sm:left-[221px]"
          />
          <Image
            src={vectorContact1}
            alt=""
            className="absolute sm:w-[112.72px] w-[80px] sm:h-[169.89px] sm:bottom-[-177.72px] bottom-[-100px] sm:left-[42px] left-[9%] -rotate-12"
          />
          <h2 className="sm:text-[64px] text-3xl text-accent-foreground font-bold m">
            Got a project in
            <br />
            <span className="text-primary">mind?</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 max-w-[600px] sm:space-y-6 space-y-3 relative"
        >
          <Image
            src={vectorContact2}
            alt=""
            className="absolute sm:w-[149.2px] w-[80px] sm:h-[103.49px] sm:top-[-122.6px] top-[-70px] sm:left-[76px] left-[40px]"
          />
          <Image
            src={vectorContact3}
            alt=""
            className="absolute sm:w-[58.23px] w-[40px] sm:h-[49.14px] bottom-[-48.6px] sm:right-[70px] right-[40px]"
          />
          <div className="flex sm:gap-6 gap-3">
            <div className="w-full">
              <label className="block font-bold sm:text-lg sm:mb-3 mb-1 text-accent-foreground">
                Your name
              </label>
              <Input
                placeholder="Name"
                // className="bg-[#1a1d29] border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="w-full">
              <label className="block font-bold sm:text-lg sm:mb-3 mb-1 text-accent-foreground">
                Your email
              </label>
              <Input
                type="email"
                placeholder="Email"
                // className="bg-[#1a1d29] border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>
          </div>
          <div>
            <label className="block font-bold sm:text-lg sm:mb-3 mb-1 text-accent-foreground">
              Your Message
            </label>
            <Textarea
              placeholder="Message"
              rows={4}
              className=" min-h-[280px] "
            />
          </div>
          <Button className="text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
            Send Message <Send size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
