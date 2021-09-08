import React from "react";
import { BiLinkExternal, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ details, setFuntion, layoutId }) {
  const { id, title, subTitle, live, logo } = details;
  return (
    <motion.figure
      className="w-72 md:w-64 flex flex-col px-6 py-8 bg-gray-900 rounded-lg box-border cursor-pointer md:px-4 md:py-10 mx-4 md:m-4 hover:bg-gray-800"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      onClick={() => setFuntion(id)}
      layoutId={layoutId}
    >
      <img src={logo} className="h-24 mx-auto mb-4 md:h-16" alt={title} />
      <motion.figcaption className="flex flex-col items-center">
        <motion.h3 className="text-lg text-white font-semibold">
          {title}
        </motion.h3>
        <motion.p className="text-md font-medium text-indigo-600">
          {subTitle}
        </motion.p>
      </motion.figcaption>
    </motion.figure>
  );
}
export { Card };
