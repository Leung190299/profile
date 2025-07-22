import { useState } from 'react';


const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('leung190299@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full container mx-auto">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container items-center ">
            <div className='sm:h-[200px] sm:w-[200px] w-[150px] h-[150px] rounded-full  overflow-hidden   shadow-orange-gradient'>

            <img src="assets/avatar.jpeg" alt="grid-1" className="w-full h-full  object-cover  " />
            </div>

            <div>
              <p className="grid-headtext">Hi, I’m Le Ung</p>
              <p className="grid-subtext">
                I am a Front-end developer with more than 3 years of experience in mobile and website development. I have been involved in building and developing many projects using modern technologies such as Flutter, React Native, React.js, and Next.js
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[300px] h-fit flex justify-center items-center">
              <img src="/assets/working.png" alt="grid-4" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with work hours </p>
              <p className="grid-subtext">I am always proactive in learning new technology, have the ability to self-research and solve problems flexibly. With a high sense of responsibility and good teamwork skills, I hope to work in a professional environment, where I can maximize my abilities and contribute to the overall development of the company with the team.</p>

            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[150px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">leung190299@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
