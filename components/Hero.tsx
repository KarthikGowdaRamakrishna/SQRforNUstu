import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { LampDemo } from "./ui/lamp";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-36">
      <LampDemo />
      <div className="flex justify-center relative z-10 mt-[-2rem]">
        {" "}
        {/* Adjusting margin-top to remove gap */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-l text-center text-blue-100 max-w-180">
            SquareResults is a specialized recruitment company with a vision to
            redefine the hiring process through cutting-edge technology and
            personalized service
          </p>

          <TextGenerateEffect
            words="bridging the gap between top-tier talent and forward-thinking
            organizations, enabling mutual growth and success"
            className="text-center text-[40px] md:text-3xl lg:text-4xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Seeking funding to make a significant impact in the recruitment
            industry.
          </p>

          <div className="flex space-x-20">
            <a href="growYourCompany">
              <MagicButton
                title="Hiring Partner "
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="https://theradarlist.com/">
              <MagicButton
                title="Job Seeker"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
