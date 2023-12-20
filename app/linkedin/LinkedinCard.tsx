import { LinkedinProps } from "./linkedinDetails"; // Update import
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import Link from "next/link";

const LinkedinCard = ({
  name,
  designation,
  recommendation,
  image,
}: LinkedinProps) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
      className={`relative z-10 h-[475px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 
          sm:h-[420px] sm:w-[100%] md:h-[390px] md:w-[100%] lg:w-[100%] lg:h-[350x]`}
      initial="initial"
      animate="animate"
    >
      {/* Add rounded image */}
      <div className="absolute left-0 top-14 ml-4 mb-10 md:mb-16 lg:mb-14">
        <Image
          src={image}
          alt={`${name}'s LinkedIn Profile`}
          className="rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16"
        />
      </div>

      <div
        className={`absolute right-0 top-14 mr-4 mb-10 md:mb-16 lg:mb-14 ml-24`}
      >
        <AnimatedTitle
          text={name}
          className={
            "max-w-[90%] text-[30px] leading-none text-white md:text-[34px] md:leading-none lg:max-w-[450px] lg:text-[38px] lg:leading-none"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={designation}
          className={
            "w-[90%] max-w-[457px] text-[14px] font-semibold text-[#dfa878]"
          }
        />
        <AnimatedBody
          text={recommendation}
          className={
            "mt-4 w-[90%] max-w-[457px] text-[14px] font-semibold text-[#95979D]"
          }
        />
        <Link
          href={
            "https://www.linkedin.com/in/thekaranchauhan/details/recommendations/"
          }
          target="_blank"
        >
          <AnimatedBody
            text="Read more..."
            className={
              "mt-4 w-[90%] max-w-[457px] text-[14px] font-semibold text-white"
            }
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default LinkedinCard;
