import { motion } from "framer-motion";
import { styles } from "../styles";
import dp from "../assets/dp.jpg"; // Import the image

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-center gap-5`}
      >
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <h1 className="text-white font-black text-[35px] sm:text-[50px] xs:text-[40px] lg:text-[60px] lg:leading-[80px]">
              Hi, I'm <span className="text-[#915eff]">Tharun</span>
            </h1>
            <h2 className="text-white font-black text-[30px] sm:text-[40px] xs:text-[35px] lg:text-[50px] lg:leading-[65px]">
              <span className="text-[#915eff]">Madhiyazhagan</span>
            </h2>
            <p className={`${styles.heroSubText} mt-4 text-white-100`}>
              I'm a full stack developer and <br className="sm:block hidden" />
              certified AWS solution architect
            </p>
          </div>
        </div>

        {/* Profile picture */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={dp}
            alt="Tharun Madhiyazhagan"
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] object-cover rounded-full border-4 border-[#915eff]"
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
