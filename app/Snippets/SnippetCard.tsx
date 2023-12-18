import { SnippetProps } from "./snippetDetails";
import Link from "next/link";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const SnippetCard = ({ name, description, demo }: SnippetProps) => {
  return (
    <Link href={demo} target="_blank" aria-label="Open Live Demo">
      <motion.div
        style={{
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        }}
        className={`relative z-10 h-[250px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 
          sm:h-[320px] sm:w-[100%] md:h-[325px] md:w-[100%] lg:w-[100%] lg:h-[250px]`}
        initial="initial"
        animate="animate"
      >
        <div className={`absolute right-0 top-14 mr-4 mb-10 md:mb-16 lg:mb-14 ml-6`}>
          <AnimatedTitle
            text={name}
            className={
              "max-w-[90%] text-[30px] leading-none text-white md:text-[34px] md:leading-none lg:max-w-[450px] lg:text-[38px] lg:leading-none"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
          <AnimatedBody
            text={description}
            className={
              "mt-4 w-[90%] max-w-[457px] text-[14px] font-semibold text-[#95979D] "
            }
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default SnippetCard;
