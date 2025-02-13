'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fade-in Animation Settings */}


      {/* Header Section */}
      <motion.section
        className="w-full mb-16 flex flex-col"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex items-start gap-2 mb-4">
          <div className="w-4 h-px bg-current mt-3"></div>
          <p>in pursuit of the lost.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start">
          <h1 className="font-oxanium tracking-tighter text-7xl md:text-8xl">vœn</h1>
          <div className="space-y-4">
            <p className="max-w-xs md:max-w-sm break-words pb-4">
              tba
            </p>
            <a href="#" target="_blank" className='' rel="noopener noreferrer">
              <button className="group px-20 py-3 border border-current flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white">
                $vœn
                <span className="opacity-0 translate-x-0 transition-all duration-100 group-hover:opacity-100 group-hover:translate-x-1">
                  ➜
                </span>
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="space-y-32">

        {/* Hero Image */}
        <motion.section
          className="w-full h-[30vh] md:h-[60vh] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/voen5.webp"
            alt="Landscape"
            fill
            className="object-contain md:object-cover"
            priority
          />
        </motion.section>

        {/* Grid Section */}
        <motion.section
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col space-y-4">
              <div className="relative w-full md:w-[20vw] h-[30vh]">
                <Image src="/voen1.webp" alt="Scene 1" fill className="object-cover" />
              </div>
              <div className="relative w-full md:w-[20vw] h-[30vh]">
                <Image src="/voen2.webp" alt="Scene 2" fill className="object-cover" />
              </div>
            </div>

            <div className="w-full md:w-[20vw] relative h-[30vh] md:h-[62vh]">
              <Image src="/voen3.webp" alt="Scene 3" fill className="object-cover" />
            </div>

            <div className="w-full md:w-[51vw] relative h-[30vh] md:h-[62vh]">
              <Image src="/voen6.webp" alt="Scene 4" fill className="object-contain md:object-cover" />
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="py-16 flex flex-col md:flex-col gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <li className="text-2xl font-bold">ABOUT</li>
          <div className='flex flex-col md:flex-row justify-between gap-x-40'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-shrink-0 w-full md:w-[50vw]">
              <div className="relative w-full h-[50vh]">
                <Image src="/voen4.webp" alt="Voen 1" fill className="object-cover" />
              </div>
              <div className="relative w-full h-[50vh]">
                <Image src="/voen1.webp" alt="Voen 2" fill className="object-cover" />
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end relative text-justify md:text-left w-full md:w-[50vw]">
              <svg
                className="w-64 h-64 animate-spin-slow"
                viewBox="15 15 70 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 
          Circle path with radius=16 => circumference ~ 2π*16 = ~100.53
          We'll approximate textLength="101" so text fits nicely.
        */}
                <path
                  id="circlePath"
                  d="
            M50,50
            m-16,0
            a16,16 0 1,1 32,0
            a16,16 0 1,1 -32,0
          "
                  fill="none"
                />

                <text
                  className="fill-current text-black"
                  fontSize="5"
                  textAnchor="start"
                  style={{
                    letterSpacing: '2px', // ensure no extra spacing
                  }}
                >
                  <textPath
                    href="#circlePath"
                    startOffset="0"
                    textLength="101"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    somewhere in deep space
                  </textPath>
                </text>
              </svg>
              <p className="text-lg leading-relaxed">
                Vœn, the restless seeker, traverses the infinite expanse of space in pursuit of his lost brother, tœd.
                Guided only by fragments of memory and cosmic whispers, he ventures across desolate worlds, where shadows
                of civilizations long past linger in the dust. His heart aches with the weight of solitude, yet he presses on,
                unwilling to accept the void as an answer. Every echo in the abyss could be tœd’s—vœn just needs to follow the right one.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          className="flex flex-col md:flex-row justify-between space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className='flex flex-col break-words w-full md:w-[30vw]'>
            <div className='pb-8'><p className='text-8xl font-oxanium tracking-tighter'>$vœn</p></div>
            <div className="flex flex-col justify-between py-2 border-b border-current">
              <a href="https://x.com/voen_sol" className="hover:opacity-70" target="_blank">
                <div className='flex flex-row justify-between py-2'>
                  <span className='text-2xl font-bold'>X</span>
                  <span>01</span>
                </div>
                <p>https://x.com/voen_sol</p>
              </a>
            </div>
            <div className="flex flex-col justify-between py-2 border-b border-current">
              <a href="https://t.me/voen_sol" className="hover:opacity-70" target="_blank">
                <div className='flex flex-row justify-between py-2'>
                  <span className='text-2xl font-bold'>TG</span>
                  <span>02</span>
                </div>
                <p>https://t.me/voen_sol</p>
              </a>
            </div>
            <div className="flex flex-col justify-between py-2 border-b border-current">
              <a href="#" className="hover:opacity-70" target="_blank">
                <div className='flex flex-row justify-between py-2'>
                  <span className='text-2xl font-bold'>pump.fun</span>
                  <span>03</span>
                </div>
                <p>tba</p>
              </a>
            </div>
          </div>
          <div className="relative w-full h-[50vh] md:h-auto md:w-[20vw]">
            <Image src="/voen_avatar_processed.jpeg" alt="Scene 4" fill className="object-cover" />
          </div>
        </motion.section>
      </main>
    </div >
  );
}
