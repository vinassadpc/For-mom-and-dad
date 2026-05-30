import { motion } from "framer-motion";

export default function FlyingStars() {

  const stars = [
    {
      left: "52%",
      top: "60%",
      x: -220,
      y: -180,
      size: "40px",
      color: "#fff07a",
      glowColor: "#ffffff",
    },

    {
      left: "54%",
      top: "30%",
      x: -200,
      y: -170,
      size: "20px",
      color: "#fff07a",
      glowColor: "#ffffff",
    },

    {
      left: "52%",
      top: "68%",
      x: -15,
      y: -510,
      size: "18px",
      color: "#fff07a",
      glowColor: "#ffffff",
    },

    {
      left: "32%",
      top: "68%",
      x: -15,
      y: -490,
      size: "20px",
      color: "#ffffff",
      glowColor: "#fff07a",
    },

    {
      left: "32%",
      top: "68%",
      x: 245,
      y: -270,
      size: "20px",
      color: "#ffffff",
      glowColor: "#fff07a",
    },

    {
      left: "12%",
      top: "20%",
      x: 180,
      y: -480,
      size: "200px",
      color: "#b4e2ff",
      stay: true,
      grow: true,
      glow: true,
    },

    {
      left: "52%",
      top: "62%",
      x: -70,
      y: -480,
      size: "52px",
      color: "#5579dd",
      glowColor: "#ffffff",
    },

    {
      left: "72%",
      top: "52%",
      x: 67,
      y: -320,
      size: "18px",
      color: "#5579dd",
      glowColor: "#ffffff",
    },

    {
      left: "75%",
      top: "52%",
      x: 67,
      y: -120,
      size: "18px",
      color: "#5579dd",
      glowColor: "#ffffff",
    },

    {
      left: "53%",
      top: "50%",
      x: -200,
      y: -170,
      size: "18px",
      color: "#5579dd",
      glowColor: "#ffffff",
    },

    {
      left: "70%",
      top: "60%",
      x: 72,
      y: -200,
      size: "45px",
      color: "#e6e6e6",
      glowColor: "#ffffff",
    },

    {
      left: "28%",
      top: "60%",
      x: -117,
      y: -320,
      size: "40px",
      color: "#e6e6e6",
      glowColor: "#ffffff",
    },

    {
      left: "75%",
      top: "62%",
      x: 52,
      y: -130,
      size: "30px",
      color: "#fff07a",
      glowColor: "#ffffff",
    },
  ];

  return (
    <>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute z-[999] pointer-events-none"
          style={{
            left: star.left,
            top: star.top,
            fontSize: star.size,
            color: star.color,
            
            textShadow: star.glow
            ? `
                0 0 16px #77c2ff,
                0 0 18px #9ad7ff,
                0 0 20px #ffffff
            `
            : "none",
          }}
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: star.stay
              ? [0, 1, 1]
              : [0, 1, 1, 1, 1, 0],
            color: star.stay
              ? [star.color, star.color]
              : [
                  star.color,

                  star.glowColor,
                  star.color,

                  star.glowColor,
                  star.color,

                  star.glowColor,
                  star.color,

                  star.glowColor,
                  star.color,
                ],
            x: star.x,
            y: star.y,
            scale: star.grow 
              ? [0.2, 0.7, 1]
              : [0.6, 1, 0.8],
          }}
          transition={{

            x: {
              duration: 0.8,
              ease: "easeOut",
            },

            y: {
              duration: 0.8,
              ease: "easeOut",
            },

            scale: {
              duration: 0.8,
              ease: "easeOut",
            },

            color: {
              delay: 1.2,
              duration: 1.5,
            },

            opacity: {
              duration: 4,
            },

          }}
        >
          ★
        </motion.div>
      ))}
    </>
  );
}