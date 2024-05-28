import CustomeButton from "../../components/CustomeButton";
import CustomeTag from "../../components/CustomeTag";
import Title from "../../components/Layouts/Title";
import { projects, skill } from "../../constant";
import "./styles.css";
import video1 from "../../constant/video1.mp4";
import CustomeForm from "../../components/CustomeForm";
import { HashLink as Link } from "react-router-hash-link";

const AboutMe = () => {
  return (
    <div className="py-28 px-9 bg-[#fafafa]" id="aboutMe">
      <Title
        title="ABOUT ME"
        subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
      />
      <div className="content flex justify-between flex-wrap max-w-[1248px] mx-auto">
        <div className="w-full lg:w-2/5 mb-20">
          <h2 className="text-2xl font-bold mb-2">Get to know me!</h2>
          <p className="text-lg mb-5">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section. I also like learning new things or trying new technology. I
            also a four-year undergraduted of PTIT University and i want to
            pratice my coding skill and to gain experience consequently. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p>
          <Link smooth duration={500} to="/#contact">
            <CustomeButton>CONTACT</CustomeButton>
          </Link>
        </div>
        <div className="w-full lg:w-2/5">
          <h2 className="text-2xl font-bold mb-2">My Skills</h2>
          <div className="w-full flex flex-wrap">
            {skill.map((sk) => {
              return <CustomeTag>{sk}</CustomeTag>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="py-28 px-9 bg-[#fff]" id="project">
      <Title
        title="PROJECTS"
        subtitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />
      <div className="content flex justify-between flex-wrap max-w-[1248px] mx-auto">
        {projects.map((pr) => (
          <>
            <div className="w-full lg:w-1/2 mb-12">
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
              >
                <source src={pr.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full lg:w-2/5 mb-20">
              <h2 className="text-2xl font-bold mb-2">{pr.title}</h2>
              <p className="text-lg mb-5">{pr.descrip}</p>
              <div className="flex w-80 justify-between">
                <a href={pr.linkDemo}>
                  <CustomeButton>Demo</CustomeButton>
                </a>
                <a href={pr.linkGit}>
                  <CustomeButton>GitHub</CustomeButton>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="py-28 px-9 contact-container" id="contact">
      <Title
        title="CONTACT"
        subtitle="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
      />
      <div className="flex justify-center flex-wrap max-w-[1248px] mx-auto">
        <CustomeForm />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <div className="flex items-center content-center w-4/5 h-fit flex-col">
          <h2 className="font-extrabold text-6xl pb-9 text-center">
            HEY, I'M TRAN HUY BACH DAI
          </h2>
          <p className="text-lg text-center pb-9">
            I'm a four-year undergraduted student of Post and Telecommunication
            Institute of Technology. Passionate about front-end development, i
            always want to access to advanced technology.
          </p>
          <Link smooth duration={500} to="/#project">
            <CustomeButton>P R O J E C T</CustomeButton>
          </Link>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
