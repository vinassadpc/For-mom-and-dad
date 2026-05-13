import { motion } from "framer-motion";

export default function ClosedStars() {
  return (
    <>
    <motion.div
      className="absolute text-[14px]"
      style={{ left: "5%", top: "40%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#1d47ba", "#fae07b", "#ffffff"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ★
    </motion.div>
    <motion.span
      className="absolute text-[10px]"
      style={{ left: "70%", top: "40%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#1d47ba", "#fae07b", "#ffffff"],
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
      style={{ left: "45%", top: "70%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#1d47ba", "#ffffff", "#fae07b"],
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
      style={{ left: "70%", top: "40%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#1d47ba", "#fae07b", "#ffffff"],
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
      style={{ left: "30%", top: "25%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: [ "#fae07b", "#ffffff", "#1d47ba", "#ffffff"],
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
      style={{ left: "80%", top: "15%" }}
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
      style={{ left: "50%", top: "30%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#ffffff", "#1d47ba", "#fae07b", "#1d47ba"],
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
      style={{ left: "90%", top: "27%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#fae07b", "#ffffff", "#1d47ba", "#fae07b",],
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
      style={{ left: "88%", top: "70%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#1d47ba", "#fae07b", "#ffffff"],
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
      style={{ left: "20%", top: "67%" }}
      animate={{
        opacity: [0.4, 1, 0.4],
        color: ["#fae07b", "#1d47ba", "#ffffff", "#fae07b"],
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