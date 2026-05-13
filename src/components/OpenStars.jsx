import { motion } from "framer-motion";

export default function OpenStars() {
  return (
    <>
    <motion.span
      className="absolute text-[14px]"
      style={{ left: "1%", top: "40%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#fae07b", "#1d47ba", "#ffffff"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.span>

    <motion.span
      className="absolute text-[10px]"
      style={{ left: "2%", top: "45%"}}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#1d47ba", "#fae07b"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
    ★
    </motion.span>

     <motion.span
      className="absolute text-[18px]"
      style={{ left: "95%", top: "36%"}}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#1d47ba", "#ffffff", "#fae07b", , "#ffffff"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
    ★
    </motion.span>

    <motion.span
      className="absolute text-[22px]"
      style={{ left: "7%", top: "82%"}}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#fae07b", "#1d47ba", "#ffffff"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
    ★
    </motion.span>

    <motion.span
      className="absolute text-[12px]"
      style={{ left: "42%", top: "78%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#fae07b", "#ffffff", "#1d47ba"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.span>

    <motion.span
      className="absolute text-[10px]"
      style={{ left: "50%", top: "82%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#fae07b", "#1d47ba"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.span>

    <motion.span
      className="absolute text-[14px]"
      style={{ left: "72%", top: "85%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#1d47ba", "#fae07b", "#ffffff", "#1d47ba"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.span>

    <motion.span
      className="absolute text-[18px]"
      style={{ left: "90%", top: "75%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#1d47ba", "#ffffff", "#1d47ba", "#fae07b"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.span>

    <motion.span
      className="absolute text-[10px]"
      style={{ left: "93%", top: "83%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#1d47ba", "#fae07b"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.span>

    <motion.span
      className="absolute text-[10px]"
      style={{ left: "96%", top: "57%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#fae07b", "#ffffff", "#1d47ba", "#fae07b"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.span>

    <motion.span
      className="absolute text-[16px]"
      style={{ left: "37%", top: "87%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#fae07b", "#1d47ba", "#ffffff"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.span>
    </>
  );
}