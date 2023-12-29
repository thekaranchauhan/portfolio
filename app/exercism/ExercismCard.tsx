import { ExercismProps } from "./exercismDetails";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import Link from "next/link";

const ExercsimCard = ({
  name,
  language,
  testimonial,
  link
}: ExercismProps) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
      className={`relative z-10 h-[245px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 
          sm:h-[420px] sm:w-[100%] md:h-[250px] md:w-[100%] lg:w-[100%] lg:h-[350x]`}
      initial="initial"
      animate="animate"
    >
      <div
        className={`absolute right-0 top-5 mr-4 mb-10 md:mb-16 lg:mb-14 ml-4`}
      >
        <AnimatedTitle
          text={name}
          className={
            "max-w-[90%] text-[30px] leading-none text-white md:text-[34px] md:leading-none lg:max-w-[450px] lg:text-[38px] lg:leading-none mb-2"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={language}
          className={
            "w-[90%] max-w-[457px] text-[14px] font-semibold text-[#dfa878]"
          }
        />
        <AnimatedBody
          text={testimonial}
          className={
            "mt-4 w-[100%] max-w-[457px] text-[14px] font-semibold text-[#95979D]"
          }
        />
        <Link
          href={link}
          target="_blank"
        >
          <AnimatedBody
            text="See on Exercism"
            className={
              "mt-4 w-[90%] max-w-[457px] text-[14px] font-semibold text-white"
            }
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ExercsimCard;