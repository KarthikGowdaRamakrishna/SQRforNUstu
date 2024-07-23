/* eslint-disable react/no-unescaped-entities */
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { LampDemo } from "./ui/lamp";
import { Spotlight } from "./ui/Spotlight";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const HeroGrow = () => {
  // const form = useRef();
  // const sendEmail = (e: { preventDefault: () => void; target: { reset: () => void; }; }) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_5hcvrri",
  //     "template_53eyfy8",
  //     form.current,
  //     "zyAc4_OWJ3mbbjMjx"
  //   );
  //   e.target.reset();
  //};
  return (
    <div className="pt-36">
      <div>
        <Spotlight
          className="-top-400 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-1000 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex justify-center relative z-10 mt-[-2rem]">
        {" "}
        {/* Adjusting margin-top to remove gap */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Grow Your Company !"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          {/* <p className="uppercase tracking-widest text-l text-center text-blue-100 max-w-180">
            SquareResults is a specialized recruitment company with a vision to
            redefine the hiring process through cutting-edge technology and
            personalized service
          </p> */}

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            If you're looking for a Search Company who knows how to connect the
            right people with the right opportunities, look no further than
            SquareResults which is led by Mark Burks the 'Quarterback of
            Recruiting'. Mark has been in the recruiting business for over two
            decades and has amassed a huge network of nearly 2 million
            professionals across various industries and roles. Whether you need
            to hire top talent or pipeline of candidates, Mark and his team can
            help you achieve your goals with their expertise and passion.
            SquareResults is more than just a search company - we are a partner,
            a mentor, and a friend to our clients and candidates. SquareResults
            loves what we do, and we do it well. Contact us today and see what
            we can do for you!
          </p>

          <a href="mailto:mark@squareresults.com">
            <MagicButton
              title="PARTNER WITH US TO FIND THE PERFECT FIT!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div>
        <h1 className="mt-28 mb-7 heading">
          Our
          <span className="text-[#06b6d4]"> Mission</span>
        </h1>
      </div>
      <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
        At SquareResults Recruiting Agency, we are committed to finding the best
        talent for your company. We understand that hiring is not only a matter
        of skills and qualifications, but also of fit and culture. That's why we
        take the time to get to know your business, your goals, and your values,
        and match them with candidates who share your vision.
      </p>

      <div>
        <h1 className="mt-28 mb-7 heading">
          Our
          <span className="text-[#06b6d4]"> Vision</span>
        </h1>
      </div>
      <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
        SquareResults Recruiting Agency is a company that helps businesses find
        the best talent for their needs. We have a vision of becoming the
        leading recruitment agency in the industry, by providing high-quality
        services, innovative solutions, and personalized support to our clients
        and candidates. We aim to create long-term relationships with our
        partners, based on trust, integrity, and mutual respect. We believe that
        by matching the right people with the right opportunities, we can help
        both businesses and individuals achieve their goals and dreams.
      </p>

      <div>
        <h1 className="mt-28 mb-7 heading">
          Why Choose
          <span className="text-[#06b6d4]"> SquareResults</span>
        </h1>
      </div>
      <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
        SquareResults is more than just a recruitment agency. We are a strategic
        partner who can help you achieve your organizational goals and vision.
        ere are some of the benefits of choosing SquareResults:
      </p>

      <ul className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
        <li>
          <strong>- Quality:&nbsp;</strong>We only deliver candidates who are
          qualified, motivated, and compatible with your culture and values.
        </li>
        <li>
          <strong>- Speed:&nbsp;</strong>We can find and deliver candidates
          faster than any other solution in the market.
        </li>
        <li>
          <strong>- Cost:&nbsp;</strong>We can help you save money and resources
          in the hiring process.
        </li>
        <li>
          <strong>- Satisfaction:&nbsp;</strong>We guarantee your satisfaction
          with our service and results.
        </li>
        <li className="text-slate-950"> " "</li>
        <li className="text-slate-950"> " "</li>

        <a href="mailto:mark@squareresults.com" className="mt-22">
          <MagicButton
            title="Start Growing Your company"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </ul>

      <div>
        <h1 className="mt-28 mb-7 heading">
          Helping Clients using AI
          <span className="text-[#06b6d4]"> using AI</span>
        </h1>
      </div>
      <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
        SquareResults Recruiting is a leading provider of AI-powered talent
        acquisition solutions. We help our clients find, attract, and hire the
        best candidates for their needs, using advanced algorithms and
        data-driven insights. Our AI platform can:
      </p>

      <ul className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
        <li>
          <strong>- &nbsp;</strong>Analyze job descriptions and resumes to match
          candidates with the most relevant skills and experience.
        </li>
        <li>
          <strong>- &nbsp;</strong>Screen and rank candidates based on their fit
          for the role and the company culture.
        </li>
        <li>
          <strong>- &nbsp;</strong>Automate communication and scheduling with
          candidates, reducing time and effort for recruiters and hiring
          managers.
        </li>
        <li>
          <strong>- &nbsp;</strong>Provide feedback and recommendations to
          improve hiring outcomes and reduce bias.
        </li>
      </ul>

      <div>
        <h1 className="mt-28 mb-7 heading">Our team and expertise</h1>
      </div>

      <ul className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Candidate Search Solution</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>We use cutting-edge data analytics,
            artificial intelligence, and digital strategy, to find, attract, and
            retain the best candidates for your needs.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Deep Dive Search</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>We also analyze our current talent pool,
            market trends, and industry best practices.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Provider of Talent</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>Our flagship product is RADAR, an advanced
            tool that uses Data Analytics and AI technologies to fin and rank
            the best candidates for an employer You can assess it a{" "}
            <a href="//theradarlist.com">theradarlist.com</a>.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Experienced Team</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>Our team consists of seasoned professionals
            with a deep understanding of different industries and recruitment
            best practices.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Industry Knowledge</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>We bring expertise in recruiting for a wide
            range of sectors, ensuring a tailored approach to each client's
            unique needs.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Technical Proficiency</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>Using advanced tools and platforms, we
            streamline the hiring processes, saving both time and resources for
            our clients.
          </p>
        </li>
      </ul>

      <div>
        <h1 className="mt-28 mb-7 heading">How We Work</h1>
      </div>

      <ul className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
        <li>
          <h3 className="mt-8 mb-7 text-[#06b6d4] text-3xl">
            <b>Our unique approach to recruiting!</b>
          </h3>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Candidate Shortlist</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>We provide you with a shortlist of the most
            suitable candidates for your open positions, along with their
            resumes and profiles. We use proactive methods to seek out and
            attract top talent, rather than waiting for candidates to apply.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Candidate Screening</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>We use a rigorous screening process to
            evaluate each candidate's skills, experience, personality, and fit
            for your organization. Our thorough evaluation process ensures that
            candidates not only have the right skills but also fit the company
            culture.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Our Network</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>We have a network of qualified candidates
            across various industries and sectors, such as IT, finance,
            marketing, engineering, and more.
          </p>
        </li>
        <li>
          <h3 className="mt-28 mb-7 text-[#06b6d4] text-3xl">
            <b>Results</b>
          </h3>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Improved Efficiency</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>[SquareResults Recruiting] was instrumental
            in streamlining our hiring process, resulting in significant time
            and cost savings.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Top-Quality Candidates</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>We were impressed with the high-caliber
            candidates presented to us, and the smooth onboarding process that
            followed.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>Exceptional Service</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>The personalized attention and dedication
            of the SquareResults team made the entire experience seamless and
            delightful.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>30+</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>Companies Assisted
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>90%</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>Client Satisfaction Rate
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>$800K</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>Value in Hires Made
          </p>
        </li>
        <li>
          <h3 className="mt-28 mb-7 text-[#06b6d4] text-3xl">
            <b>Next steps and how to get started</b>
          </h3>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>1. Consultation</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>Connect with us for an initial consultation
            to discuss your recruitment needs.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>2. Custom Proposal</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>We'll create a personalized proposal
            outlining the best approach for your requirements.
          </p>
        </li>
        <li>
          <h3 className="mt-8 mb-7 ">
            <b>3. Engagement</b>
          </h3>
          <p>
            <strong>- &nbsp;</strong>Upon agreement, we'll begin the process of
            finding the ideal candidates for your organization.
          </p>
        </li>
        <li className="text-slate-950"> " "</li>
        <li className="text-slate-950"> " "</li>

        <a href="mailto:mark@squareresults.com" className="mt-22">
          <MagicButton
            title="Company growth Consultation"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </ul>
    </div>
  );
};

export default HeroGrow;
