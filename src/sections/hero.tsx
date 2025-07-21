import Flutter from "@/components/flutter"
import HeroCamera from "@/components/HeroCamera"
import Keyboard from "@/components/keyBoard"
import CanvasLoader from "@/components/Loading"
import { ReactLogo } from "@/components/reactLogo"
import { TableWork } from "@/components/tableWork"
import Target from "@/components/target"
import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Leva, useControls } from 'leva'
import { Suspense } from "react"


const Hero = () => {
	const position = useControls("Table Position", {
		x: { value: 0, min: -20, max: 20 },
		y: { value: 0, min: -20, max: 20 },
		z: { value: 5, min: -20, max: 20 },
	})
	const rotation = useControls("Table Rotation", {
		x: { value: 0, min: -Math.PI, max: Math.PI },
		y: { value: 0, min: -Math.PI, max: Math.PI },
		z: { value: 0, min: -Math.PI, max: Math.PI },
	})
	const cameraPosition = useControls("Camera Position", {
		x: { value: 0, min: -10, max: 10 },
		y: { value: 0, min: -10, max: 10 },
		z: { value: 5, min: -10, max: 10 },
	})
	const cameraRotation = useControls("Camera Rotation", {
		x: { value: 0, min: -Math.PI, max: Math.PI },
		y: { value: 0, min: -Math.PI, max: Math.PI },
		z: { value: 0, min: -Math.PI, max: Math.PI },
	})

	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					Hi, I am Lee <span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-white">Building Products & Brands</p>
			</div>

			<div className="w-full h-full absolute inset-0">
				<Leva collapsed />
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						{/* To hide controller */}
						<PerspectiveCamera makeDefault position={[0, 0, 5]} />
						<HeroCamera isMobile={false}>
							<TableWork position={[-4, -5, 0]} rotation={[0.25, -1.5, 0]} />
						</HeroCamera>

						<group>
							<ReactLogo position={[12, 5, -12]} scale={0.4} />
							<Flutter position={[-2, -0.5, 2]} />
							<Keyboard position={[2, -0.5, 2]} />
							<Target position={[-2, 0.5, 2]} />
							{/* <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} /> */}
						</group>
						{/* <OrbitControls /> */}

						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>

			{/* <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div> */}
		</section>
	)
}

export default Hero