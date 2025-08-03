import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';


import Developer from '@/components/Developer.js';
import CanvasLoader from '../components/Loading.jsx';


const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20 container mx-auto" id="work">
      <div className="w-full text-white-600">
        <p className="head-text text-white">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-sm mb-5 text-white">
                      {item.pos}
                    </p>
                    <p className="group-hover:text-white text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

 const workExperiences = [
  {
    id: 1,
    name: 'Flutter',
    pos: ' Mobile App Developer',
    title: "Flutter is my framework of choice for building cross-platform mobile applications. I utilize its expressive UI and reactive programming model to create visually appealing and performant apps.",
    icon: '/assets/Flutter.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'React-Native',
    pos: 'Mobile App Developer',
    title: "React-Native is my framework of choice for building mobile applications. I utilize its component-based architecture to create reusable UI elements, streamlining the development process and enhancing maintainability.",
    icon: '/assets/reactjs.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Next.js',
    pos: 'Junior Web Developer',
    title: "Next.js is my framework of choice for building server-rendered applications. I leverage its file-based routing and API routes to create seamless user experiences.",
    icon: '/assets/nextjs.webp',
    animation: 'salute',
  },
];
