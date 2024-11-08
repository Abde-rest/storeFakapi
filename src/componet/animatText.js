"use client";
import { motion } from "framer-motion";

const AnimatedText = ({ children }) => {
  const text = children.props.children;
  const words = text.split(" "); // تقسيم النص إلى كلمات
  //   console.log(words.toString());
  // Array.toString()
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.01 }, // زمن تأخير لتسلسل الكلمات
    }),
  };

  const wordAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap">
      {words.map((word, index) => (
        <motion.span
          variants={wordAnimation}
          key={index}
          className="inline-block" // لتظهر الكلمات متفرقة
        >
          <p>{word}&nbsp;</p> {/* إضافة مسافة بعد كل كلمة */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
