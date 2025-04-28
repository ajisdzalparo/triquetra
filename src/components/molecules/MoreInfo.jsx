import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "../atoms/Typography";

const MoreInfo = ({ title, description, isOpen = false, onToggle }) => {
  return (
    <div className="flex flex-col justify-center gap-4 w-full border border-gray-200 rounded-md p-4">
      <div className="flex justify-between items-center">
        <Typography className={title.className} variant={title.variant}>
          {title.text}
        </Typography>
        <button
          onClick={onToggle}
          className="text-primary-blue hover:underline focus:outline-none"
          aria-expanded={isOpen}
        >
          <motion.img
            src={isOpen ? "/icons/minus.svg" : "/icons/add.svg"}
            alt={isOpen ? "Collapse" : "Expand"}
            className="w-8 h-8 cursor-pointer"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3, ease: "easeOut" },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.4, ease: "easeIn" },
              },
            }}
            className="overflow-hidden"
          >
            <motion.div
              className="pt-2"
              initial={{ y: -15 }}
              animate={{ y: 0 }}
              exit={{ y: -15 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <Typography className={description.className}>
                {description.text}
              </Typography>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoreInfo;
