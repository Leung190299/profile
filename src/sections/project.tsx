import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense, useState } from 'react';


import { Laptop } from '@/components/Laptop.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CanvasLoader from '../components/Loading.jsx';
// import DemoComputer from '../components/DemoComputer.jsx';


const Projects = () => {
  const projectCount = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];





  return (
    <section className="c-space my-20">

      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full container mx-auto">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" >
            <img className="w-20 h-20 shadow-sm rounded-full bg-white " src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText text-white">{currentProject.desc}</p>
            <p className="animatedText text-white">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo rounded-full!">
                  <img src={tag.path} alt={tag.name} className='object-cover! w-full h-full ' />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 text-white"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn " onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg    ">
          <Leva collapsed />
          <Canvas  >
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <PerspectiveCamera makeDefault position={[0, 3, 10]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={20} position={[-3.6, -1.2, 2.6]} rotation={[0.3, 1.56, 0]}>
                  <Laptop texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;


const myProjects = [

  {
    "title": "SkyFi",
    "desc": "Built and optimized the complete front-end system for SkyFi telecom services. Implemented features such as online SIM purchasing, eKYC registration via video call, live chat, news updates, and promotional offers.",
    "subdesc": "Technologies: Next.js, Socket.IO, Custom Hooks.",
    "href": "https://skyfi.vn",
    "texture": '/assets/skyfi_text.jpg',
    "logo": '/assets/logo_skyfi.svg',
    "logoStyle": null,
    "spotlight": '/assets/spotlight1.png',
    "tags": [
      {
        "id": 1,
        "name": "Next.js",
        "path": "/assets/nextjs.webp"
      },
      {
        "id": 2,
        "name": "Socket.IO",
        "path": '/assets/Socket-io.svg'
      },
      {
        "id": 3,
        "name": "React js",
        "path": '/assets/reactjs.png'
      },
      {
        "id": 4,
        "name": "TypeScript",
        "path": '/assets/typescript.png'
      }
    ]
  },
  {
    "title": "Jumpjoy App",
    "desc": "Designed and developed a fitness gamification app promoting daily physical activity. Integrated AI and game mechanics for a fun and educational experience suitable for students, families, and office workers.",
    "subdesc": "Technologies: Flutter, Native Android/iOS, Google AI, RESTful API, Game Engine.",
    "href": "https://apps.apple.com/us/app/jumpjoy/id6745213215",
    "texture": '/assets/jumpjoy_texturn.jpg',
    "logo": '/assets/jumpjoy.svg',
    "logoStyle": null,
    "spotlight": '/assets/spotlight2.png',
    "tags": [
      {
        "id": 1,
        "name": "Flutter",
        "path": "/assets/Flutter.png"
      },

      {
        "id": 3,
        "name": "Google AI",
        "path": '/assets/google-ai.webp'
      },

      {
        "id": 5,
        "name": "Game Engine",
        "path": '/assets/flame.png'
      },
      {
        "id": 6,
        "name": "Tailwindcss",
        "path": '/assets/tailwindcss.png'
      }
    ]
  },
  {
    "title": "iTel Website",
    "desc": "Built and optimized the complete front-end system for iTel's telecom services. Implemented features such as online SIM purchasing, eKYC registration via video call, live chat, news updates, and promotional offers.",
    "subdesc": "Technologies: Next.js, Socket.IO, Custom Hooks.",
    "href": "https://itel.vn",
    "texture": '/assets/itel_text.jpg',
    "logo": '/assets/logo_itel.jpg',
    "logoStyle": null,
    "spotlight": '/assets/spotlight3.png',
    "tags": [
      {
        "id": 1,
        "name": "Next.js",
        "path": "/assets/nextjs.webp"
      },
      {
        "id": 2,
        "name": "Socket.IO",
        "path": '/assets/Socket-io.svg'
      },
      {
        "id": 3,
        "name": "React js",
        "path": '/assets/reactjs.png'
      },
      {
        "id": 4,
        "name": "TypeScript",
        "path": '/assets/typescript.png'
      }
    ]
  },
  {
    "title": "My iTel Mobile App",
    "desc": "Developed and synchronized features with the iTel website, supporting account management, real-time notifications, and promotional registration.",
    "subdesc": "Technologies: Flutter, RESTful API, Native Modules.",
    "href": "https://apps.apple.com/us/app/my-itel/id1610306087",
    "texture": '/assets/itel_text.jpg',
    "logo": '/assets/logo_itel.jpg',
    "logoStyle": null,
    "spotlight": '/assets/spotlight4.png',
    "tags": [
      {
        "id": 1,
        "name": "Flutter",
        "path": "/assets/Flutter.png"
      },
      {
        "id": 2,
        "name": "Socket.IO",
        "path": '/assets/Socket-io.svg'
      },

    ]
  },
  {
    "title": "Andochine Resort Website",
    "desc": "Designed a responsive hotel booking interface tailored to client specifications. Enhanced mobile user experience and integrated booking features.",
    "subdesc": "Technologies: WordPress, HTML/CSS, JavaScript, PHP.",
    "href": "https://andochine.com.vn",
    "texture": '/assets/andochi_text.jpg',
    "logo": '/assets/php.png',
    "logoStyle": null,
    "spotlight": '/assets/spotlight5.png',
    "tags": [
      {
        "id": 1,
        "name": "WordPress",
        "path": "/assets/worfpress.png"
      },
      {
        "id": 2,
        "name": "HTML/CSS",
        "path": "/assets/html_css.png"
      },

      {
        "id": 4,
        "name": "PHP",
        "path": "/assets/php.png"
      }
    ]
  },

  {
    "title": "FPT School Website",
    "desc": "Developed the official FPT School site interface with interactive sections including news, image gallery, and contact forms.",
    "subdesc": "Technologies: WordPress, HTML/CSS, JavaScript.",
    "href": "https://fschool.fpt.edu.vn",
    "texture": '/assets/fpf_text.jpg',
    "logo": '/assets/php.png',
    "logoStyle": null,
    "spotlight": '/assets/spotlight1.png',
    "tags": [
      {
        "id": 1,
        "name": "WordPress",
        "path": "/assets/worfpress.png"
      },
      {
        "id": 2,
        "name": "HTML/CSS",
        "path": "/assets/html_css.png"
      },

      {
        "id": 4,
        "name": "PHP",
        "path": "/assets/php.png"
      }
    ]
  }
]