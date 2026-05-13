import { motion } from "framer-motion";

export default function FlyingStars() {

  const stars = [
    {
      left: "28%",
      top: "60%",
      x: -220,
      y: -180,
      size: "40px",
      color: "#fff07a",
      glowColor: "#ffffff",
    },

    {
      left: "35%",
      top: "20%",
      x: 180,
      y: -480,
      size: "220px",
      color: "#cb1c1c",
      stay: true,
      grow: (true),
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
      left: "49%",
      top: "60%",
      x: 80,
      y: -200,
      size: "45px",
      color: "#e6e6e6",
    },

    {
      left: "50%",
      top: "62%",
      x: 0,
      y: -140,
      size: "30px",
      color: "#fff07a",
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