import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dirt from "../assets/dirt.png";
import seed from "../assets/seed.png";
import wateringCan from "../assets/watering-can.png";
import sprout from "../assets/sprout.png";
import flower1 from "../assets/flower1.png";
import flower2 from "../assets/flower2.png";
import flowerBloom from "../assets/flowerBloom.png";
import flower2Bloom from "../assets/flower2Bloom.png";
import memory1 from "../assets/memory1.JPG";
import memory2 from "../assets/memory2.JPG";
import memory3 from "../assets/memory3.jpg";
import memory4 from "../assets/memory4.jpg";
import memory5 from "../assets/memory5.jpg";
import flower2memory1 from "../assets/flower2memory1.jpg";
import flower2memory2 from "../assets/flower2memory2.jpg";
import flower2memory3 from "../assets/flower2memory3.jpg";
import flower2memory4 from "../assets/flower2memory4.JPEG";
import flower2memory5 from "../assets/flower2memory5.JPG";
import dirtSound from "../assets/dirt.wav";
import waterSound from "../assets/watering.mp3";
import bloomSound from "../assets/bloom.mp3";
import growSound from "../assets/grow.mp3";

export default function Memories() {

  const [seed1Planted, setSeed1Planted] = useState(false);
  const [seed2Planted, setSeed2Planted] = useState(false);
  const navigate = useNavigate();
  const [wiggleDirt, setWiggleDirt] = useState(false);
  const [watering, setWatering] = useState(false);
  const [waterProgress, setWaterProgress] = useState(0);
  const [plantReady, setPlantReady] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [showMemory, setShowMemory] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const memories = [
    memory1,
    memory2,
    memory3,
    memory4,
    memory5,
  ];
  const flower2Memories = [
    flower2memory1,
    flower2memory2,
    flower2memory4,
    flower2memory3,
    flower2memory5,
  ];
  const [memoryScale, setMemoryScale] = useState(1);
  const [activeMemories, setActiveMemories] = useState(memories);
  const dirtAudio = useRef(new Audio(dirtSound));
  const waterAudio = useRef(new Audio(waterSound));
  const bloomAudio = useRef(new Audio(bloomSound));
  const growAudio = useRef(new Audio(growSound));

  useEffect(() => {

  let interval;

  if (watering) {

    interval = setInterval(() => {

      setWaterProgress((prev) => {

        if (prev >= 100) {

            clearInterval(interval);

            growAudio.current.pause();
            growAudio.current.currentTime = 0;
            growAudio.current.play();

            setPlantReady(true);

            return 100;
        }

        return prev + 1;

      });

    }, 40);

  }

  return () => clearInterval(interval);

}, [watering]);

useEffect(() => {

  if (!selectedFlower) return;

  const interval = setInterval(() => {

    // shrink current photo
    setMemoryScale(0.85);

    // after shrink finishes
    setTimeout(() => {

      // switch photo
      setCurrentMemory((prev) => {

        if (prev >= 4) {
          return 0;
        }

        return prev + 1;

      });

      // grow back to normal size
      setMemoryScale(1);

    }, 250);

  }, 2000);

  return () => clearInterval(interval);

}, [selectedFlower]);

useEffect(() => {

  dirtAudio.current.volume = 0.4;

  waterAudio.current.volume = 0.4;

  bloomAudio.current.volume = 0.4;

  growAudio.current.volume = 0.4;

}, []);

  return (
    
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#ffe5ec] via-[#fff6e9] to-[#dff5e3]">

      {/* title */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[#7d7275] tracking-[0.25em] text-sm">
        memories plant
      </div>

      {/* instruction */}
        <motion.div

        initial={{ opacity: 0, y: -10 }}
        animate={{
            opacity: seed1Planted && seed2Planted ? 0 : 1,
            y: 0,
        }}

        transition={{
            duration: 1,
            delay: 0.5,
        }}

        className="
            absolute
            top-18
            left-1/2
            -translate-x-1/2

            text-[#7d7275]
            tracking-[0.12em]
            text-sm
            text-center
            leading-7
        "
        >
        drag the 2 glowing seeds
        <br />
        into the dirt
        </motion.div>
        
      {/* dirt */}
        <motion.img
        src={dirt}
        alt="dirt"

        animate={{
          rotate:
            watering
            ? [0, -1.5, 1.5, -1.5, 1.5, 0]
            : wiggleDirt
            ? [0, -2, 2, -2, 2, 0]
            : 0,
        }}

        transition={{
          duration: watering ? 0.8 : 0.4,
          repeat: watering ? Infinity : 0,
        }}

        className="
            absolute
            -bottom-45
            left-1/2
            -translate-x-1/2
            w-[500px]
            z-20
            pointer-events-none
            select-none
        "
        />
    {wiggleDirt && (
      <>
        {[...Array(8)].map((_, i) => (

          <motion.div
            key={i}

            initial={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}

            animate={{
              opacity: 0,
              x: Math.random() * 80 - 40,
              y: Math.random() * -50,
              scale: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              absolute
              bottom-[120px]
              left-1/2
              w-[8px]
              h-[8px]
              rounded-full
              bg-[#8b5e34]
              "
          />

        ))}
      </>
    )}

{plantReady && (

  <>

{/* bouquet stems */}

{/* main stem */}
<motion.div

  initial={{
    height: 0,
  }}

  animate={{
    height: 350,
  }}

  transition={{
    duration: 1.8,
    ease: "easeOut",
  }}

  className="
    absolute

    bottom-[100px]
    left-1/2
    -translate-x-1/2

    w-[30px]
    h-[350px]

    bg-gradient-to-t
    from-[#4f7c4d]
    to-[#8fd18b]

    origin-bottom

    z-10
  "

  style={{
    clipPath: "polygon(15% 100%, 85% 100%, 62% 0%, 38% 0%)",
    borderRadius: "999px",
  }}
/>

    <motion.img

        src={sprout}
        alt="sprout"

        initial={{
            opacity: 0,
            scale: 0.3,
            y: 40,
        }}

        animate={{
            opacity: 1,
            scale: 1,
            y: 0,
        }}

        transition={{
            delay: 1.2,
            duration: 1,
            ease: "easeOut",
        }}

        className="
            absolute

            bottom-[60px]
            left-[49.5%]
            -translate-x-1/2

            w-[250px]

            pointer-events-none
            select-none
        "
        />

         <div

            onClick={(e) => {

                e.stopPropagation();

                setActiveMemories(memories);

                setCurrentMemory(0);

                bloomAudio.current.currentTime = 0;
                bloomAudio.current.play();

                setSelectedFlower(1);

                setShowMemory(true);

            }}

            className="
                absolute

                bottom-[480px]
                left-[47.4%]

                w-[80px]
                h-[110px]

                rounded-full

                cursor-pointer

                z-[1000]
            "
        />

        <motion.img

        src={flower1}
        alt="flower"

        initial={{
            opacity: 0,
            scale: 0.2,
            y: 120,
        }}

        animate={{
            opacity: 1,
            scale: 1,
            y: 0,
        }}

        style={{
            pointerEvents: "none",
        }}

        transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeOut",
        }}

        whileHover={{
            scale: 1.05,
        }}

        className="
            absolute

            bottom-[420px]
            left-[49.9%]
            -translate-x-1/2

            w-[120px]

            cursor-pointer

            z-[999]
        "
        />

        <div

            onClick={(e) => {

                e.stopPropagation();

                setActiveMemories(flower2Memories);

                setCurrentMemory(0);

                bloomAudio.current.currentTime = 0;
                bloomAudio.current.play();

                setSelectedFlower(2);

                setShowMemory(true);

            }}

            className="
                absolute

                bottom-[410px]
                left-[42.5%]
                -rotate-40

                w-[80px]
                h-[100px]

                rounded-full

                cursor-pointer

                z-[1000]
            "
        />

        <motion.img

        src={flower2}
        alt="flower"

        initial={{
            opacity: 0,
            scale: 0.2,
            x: 15,
            rotate: -30,
        }}

        animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            rotate: -12,
        }}

        transition={{
            delay: 0.8,
            duration: 1.2,
            ease: "easeOut",
        }}

        style={{
            pointerEvents: "none",
            transformOrigin: "bottom center",
        }}

        className="
            absolute

            bottom-[240px]
            left-[48.8%]
            -translate-x-1/2

            w-[300px]

            cursor-pointer
        "
        />

        </>
    )}      

      {/* seed 1 */}
      {!seed1Planted && (
        <motion.div
          drag

          dragMomentum={false}

          onDragEnd={(e, info) => {

            if (
              info.point.y > window.innerHeight - 260
            ) {
              setSeed1Planted(true);

              dirtAudio.current.currentTime = 0;
              dirtAudio.current.play();

              setWiggleDirt(true);

              setTimeout(() => {
                setWiggleDirt(false);
              }, 400);
            }
          }}

          className="
            absolute
            top-[220px]
            left-[42%]
            cursor-grab
            z-50
          "
        >
          <motion.img
            src={seed}
            alt="seed"


            animate={{
              scale: [1, 1.06, 1],

              filter: [
                "brightness(1) drop-shadow(0 0 10px rgba(242, 171, 41, 0.55))",
                "brightness(1.5) drop-shadow(0 0 15px rgb(255, 202, 28))",
                "brightness(1) drop-shadow(0 0 10px rgba(242, 171, 41, 0.55))",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}

            className="
                w-[90px]
                pointer-events-none
                select-none
            "
          />
        </motion.div>
      )}

      {/* seed 1 planted */}
      {seed1Planted && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}

          className="
            absolute
            bottom-[120px]
            left-[46%]
            w-[1px]
            h-[1px]
            rounded-full
            bg-[#5c3b1e]
          "
        />
      )}

      {/* seed 2 */}
      {!seed2Planted && (
        <motion.div
          drag

          dragMomentum={false}

          onDragEnd={(e, info) => {

            if (
              info.point.y > window.innerHeight - 260
            ) {
              setSeed2Planted(true);

              dirtAudio.current.currentTime = 0;
              dirtAudio.current.play();

              setWiggleDirt(true);

              setTimeout(() => {
                setWiggleDirt(false);
              }, 400);
            }
          }}

          className="
            absolute
            top-[300px]
            right-[42%]
            cursor-grab
            z-50
          "
        >
         <motion.img
            src={seed}
            alt="seed"


            animate={{
              scale: [1, 1.06, 1],

              filter: [
                "brightness(1) drop-shadow(0 0 10px rgba(242, 171, 41, 0.55))",
                "brightness(1.5) drop-shadow(0 0 15px rgb(255, 202, 28))",
                "brightness(1) drop-shadow(0 0 10px rgba(242, 171, 41, 0.55))",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}

            className="
                w-[90px]
                pointer-events-none
                select-none
            "
          />
        </motion.div>
      )}

      {/* seed 2 planted */}
      {seed2Planted && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}

          className="
            absolute
            bottom-[120px]
            left-[52%]
            w-[1px]
            h-[1px]
            rounded-full
            bg-[#5c3b1e]
          "
        />
      )}

      {seed1Planted && seed2Planted && !plantReady && (

    <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        className="
        absolute

        left-[50%]
        bottom-[50%]

        text-center
        text-sm

        text-[#7d7275]

        tracking-[0.1em]

        z-50
        "
    >

    press and hold
    <br />
    until the bar is full

  </motion.div>

)}

      {/* watering can */}
        {seed1Planted && seed2Planted && (

        <motion.div

            initial={{ opacity: 0, x: 40 }}
            animate={{
                opacity: plantReady ? 0 : 1,
                x: plantReady ? 0 : 0,
                y: plantReady ? -20 : 0,
            }}
            transition={{
                delay: 0.5,
                duration: 1.2,
            }}

            className="
            absolute
            left-[43%]
            bottom-[20%]
            z-50
            "
        >

            <motion.div

            onPointerDown={() => {

                setWatering(true);

                waterAudio.current.loop = true;
                waterAudio.current.currentTime = 0;
                waterAudio.current.play();
            }}

            onPointerUp={() => {

                setWatering(false);

                waterAudio.current.pause();
                waterAudio.current.currentTime = 0;
            }}

            onPointerLeave={() => {

                setWatering(false);

                waterAudio.current.pause();
                waterAudio.current.currentTime = 0;
            }}

            whileTap={{
                scale: 0.92,
                rotate: -8,
            }}

            className="
                relative
                cursor-pointer
                select-none
            "
            >
            <img
                src={wateringCan}
                alt="watering can"

                className="
                w-[350px]
                left-[50%]
                bottom-[50%]
                pointer-events-none
                select-none
                "
            />
            {/* water droplets */}
            {watering && (

           <div className="absolute top-[230px] left-[78px] rotate-[25deg]">

                {[...Array(8)].map((_, i) => (

                <motion.div
                    key={i}

                    initial={{
                      y: 0,
                      opacity: 1,
                    }}

                    animate={{
                      y: 140,
                      x: [0, -10, 2],
                      pacity: 0,
                    }}

                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.08,
                      ease: "linear",
                    }}

                    className="
                      absolute
                      w-[6px]
                      h-[14px]

                      rounded-full

                      bg-[#8fd3ff]
                    "

                    style={{
                      left: `${Math.random() * 40 - 20}px`,
                    }}
                />

                ))}

            </div>

            )}
            </motion.div>

    {/* progress bar */}
    <div
      className="
        absolute
        left-[50%]
        bottom-[25%]
        -translate-x-[42%]

        w-[100px]
        h-[10px]

        bg-white/40
        rounded-full
        overflow-hidden
        "
    >

      <motion.div

        animate={{
          width: `${waterProgress}%`,
        }}

        className="
          h-full
          bg-[#7ec8ff]
        "
      />

    </div>

  </motion.div>

)}

{/* final instruction */}
{plantReady && !selectedFlower && (

  <motion.div

    initial={{
      opacity: 0,
      y: -10,
    }}

    animate={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      delay: 0.5,
    }}

    className="
      absolute

      top-20
      left-1/2
      -translate-x-1/2

      text-center
      text-sm

      text-[#7d7275]

      tracking-[0.1em]

      z-50
    "
  >

    tap a flower
    <br />
    to revisit memories

  </motion.div>

)}

{selectedFlower !== null && (

  <motion.div

    onClick={() => setSelectedFlower(null)}

    initial={{
      opacity: 0,
    }}

    animate={{
      opacity: 1,
    }}

    className="
      fixed
      inset-0

      bg-black/70

      flex
      items-center
      justify-center

      z-[999]
    "
  >

    <motion.img

      src={
    selectedFlower === 1
        ? flowerBloom
        : flower2Bloom
    }

      initial={{
        scale: 1,
      }}

      animate={{
        scale: 4,
      }}

      transition={{
        duration: 1.8,
        ease: "easeInOut",
      }}

      className="
        w-[120px]
      "
    />

    {showMemory && (

  <motion.img

    src={activeMemories[currentMemory]}

    initial={{
        opacity: 0,
        scale: 0.8,
    }}

    animate={{
        opacity: 0.8,
        scale: memoryScale,
    }}

    transition={{
        duration: 1.8,
        ease: "easeInOut",
    }}


    style={{
    opacity: 0.8,
    filter: `
        saturate(0.9)
        brightness(1.08)
        contrast(0.92)
    `,
    boxShadow:
        "0 0 25px rgba(255,255,255,0.35)",
    }}

    className="
    absolute

    w-[220px]

    rounded-2xl

    shadow-2xl

    border-4
    border-white

    z-[1000]
    "
  />

)}

  </motion.div>

)}
    </div>
  );
}