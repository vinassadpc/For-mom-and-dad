import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ClosedStars from "./components/ClosedStars";
import FlyingStars from "./components/FlyingStars";
import OpenStars from "./components/OpenStars";

export default function App() {
  const [open, setOpen] = useState(false);
  const [playStars, setPlayStars] = useState(false);
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffff] to-[#7aafe4] overflow-hidden"
      onClick={() => {
        if (!open) return;

        setPlayStars(false);

        setTimeout(() => {
          setPlayStars(true);
        }, 10);
      }}
    >
         
      <div className="w-[420px]">
        
        {showStar && (
        <div
          className="absolute z-[999]"
          style={{
            left: "57.76%",
            top: "0.8%",
            fontSize: "220.5px",
            color: "#000000",
          }}
        >
          ★
        </div>
)}

        <AnimatePresence mode="wait">

          {!open ? (

            // CLOSED ENVELOPE
            <motion.div
              key="closed"
              className="relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ 
                opacity: 0,
                transition: {
                  delay: 0.2,
                },
               }}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);

                setPlayStars(false);

                setTimeout(() => {
                  setPlayStars(true);
                }, 10);       
                setOpen(!open);
              }}
            >

              <motion.p
                className="text-center mb-5 text-[#b59fa3] text-lg tracking-[0.2em]"
                animate={{ y: [0, -6, 0] }}
                  transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                 }}
                >         
                  tap to open
              </motion.p>

              {/* Envelope */}
              <div className="relative w-full overflow-hidden">

                {/* back */}
                <div className="absolute top-0 left-0 w-full h-[240px] bg-[linear-gradient(135deg,#f8f3ed,#ebe2d8,#f5eee7)] rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]"></div>

                {/* top flap */}
                <div
                  className="absolute top-0 left-0 w-full h-[120px] bg-[linear-gradient(135deg,#f8f3ed,#ebe2d8,#f5eee7)] z-20 rounded-t-[18px]"
                  style={{
                    clipPath: "polygon(3% 0, 50% 92%%, 97% 0)",
                  }}
                ></div>

                {/* left fold */}
                <div
                  className="absolute bottom-0 left-0 w-1/2 h-[120px] bg-[linear-gradient(135deg,#f3ece4,#e6ddd3)] z-30"
                  style={{
                    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                  }}
                ></div>

                {/* right fold */}
                <div
                  className="absolute bottom-0 right-0 w-1/2 h-[120px] bg-[linear-gradient(135deg,#f2ebe3,#e5dbd1)] z-30"
                  style={{
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                ></div>

                {/* bottom fold */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#faf5ef] to-[#e9e0d5] z-40"
                  style={{
                    clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                  }}
                ></div>

                {/* stars */}
                <div className="absolute inset-0 z-50">

                  <ClosedStars/>

                </div>

                <div className="h-[210px]"></div>

              </div>
            </motion.div>

          ) : (

            // OPENED LETTER
            <motion.div
              key="open"
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ 
                opacity: 0,
                transition: {
                duration: 2,
                },
              }}
            >

              {/* envelope */}
              <motion.div 
                className="relative w-full h-[320px]"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
              
                initial={{ y: 0 }}
                animate={{ y: 150 }}
                exit={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >

                {/* back */}
                <div className="absolute bottom-0 left-0 w-full h-[210px] bg-gradient-to-br from-[#f8f3ed] to-[#ebe2d8] rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]"></div>

                {/* top flap opened */}
                <div
                  className="absolute top-[-20px] left-0 w-full h-[130px] bg-gradient-to-br from-[#f8f3ed] to-[#ebe2d8] z-10"
                  style={{
                    clipPath: "polygon(-5% 100%, 50% 0, 105% 100%)",
                  }}
                ></div>
                <div className="absolute top-[105px] left-[0] w-[20px] h-[20px] bg-[#f8f3ed] rounded-full z-0"></div>
                
                <div className="absolute top-[105px] right-[0] w-[20px] h-[20px] bg-[#f1ebe4] rounded-full z-0"></div>

                {playStars && <FlyingStars />}

                {/* letter */}
                <motion.div
                  initial={{ y: -35}}
                  animate={{ y: -220}}
                  exit={{ 
                    y: -35,
                    transition: {
                      delay: 1.2,
                      duration: 0.6,
                    }
                  }}
                  transition={{ 
                    delay: 0.6,
                    duration: 0.8,  
                    ease: "easeOut",
                  }}
                  className="absolute top-[-20px] left-1/2 -translate-x-1/2 z-20"
                >
                  {/* folded letter container */}
                  <div 
                  className="relative w-[320px]"
                  style= {{perspective: "4000px"}}
                  >

                    {/* TOP FOLD */}
                    <motion.div
                      initial={{ rotateX: -179 }}
                      animate={{ rotateX: 0 }}
                      exit={{ rotateX: -179 }}
                      transition={{
                        delay: 1,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ 
                        transformOrigin: "bottom",
                        transformStyle: "preserve-3d",
                      }}
                      className="h-[150px] bg-[#fffdf9] border-x border-t border-[#eee] rounded-t-[8px] flex justify-center pt-8 mb-[-1px]"
                  >

                      <h1 className="text-center text-[#9f8c90] text-xl mb-6">
                      Thank You
                      </h1>

                  </motion.div>

                    {/* MIDDLE */}
                    <div className="bg-[#fffdf9] border-x border-[#eee] p-8 shadow-[0_2px_6px_rgba(0,0,0,0.04)] relative z-10">
                      {/* top crease */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d8cec4] to-transparent opacity-60"></div>

                      {/* bottom crease */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d8cec4] to-transparent opacity-60"></div>
                      

                      <p className="text-[15px] leading-8 text-[#7d7275]">
                      Dear ,
                      <br /><br />
                      
                      <br /><br />
                     
                      <br />
                      
                      </p>

                    </div>

                  {/* BOTTOM FOLD */}
                  <motion.div
                    initial={{ rotateX: 179 }}
                    animate={{ rotateX: 0 }}
                    exit={{ rotateX: 179 }}
                    transition={{
                      delay: 1.3,
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ 
                      transformOrigin: "top",
                      transformStyle: "preserve-3d",
                    }}
                    className="h-[120px] bg-[#fffdf9] border-x border-b border-[#eee] rounded-b-[8px] mt-[-1px]"
                 >
                    
                    <div className="flex items-center justify-center h-full text-[#7d7275] text-[15px]">
                    <div className="text-center leading-7">
                      Love always,
                      <br />
                    
                    </div>
                  </div>
                 
                 </motion.div>

                </div>

              </motion.div>

                {/* folds */}
                <div
                  className="absolute bottom-0 left-0 w-1/2 h-[120px] bg-gradient-to-br from-[#f3ece4] to-[#e6ddd3] z-30"
                  style={{
                    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                  }}
                ></div>

                <div
                  className="absolute bottom-0 right-0 w-1/2 h-[120px] bg-gradient-to-bl from-[#f2ebe3] to-[#e5dbd1] z-30"
                  style={{
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                ></div>

                <div
                  className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#faf5ef] to-[#e9e0d5] z-40"
                  style={{
                    clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                  }}
                ></div>

                {/* stars */}
                <div className="absolute inset-0 z-50">

                  <OpenStars/>

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </div>
  );
}