import { useGSAP } from '@gsap/react';
import { Float, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useRef, type JSX } from 'react';
import type { HTMLMesh } from 'three-stdlib';

const Keyboard = (props: JSX.IntrinsicElements['mesh']) => {
	const targetRef = useRef<HTMLMesh | null>(null);
	const data = useGLTF(
		'/models/keyboard/keyboard.gltf',
	);// Debugging line to check if the model is loaded successfully


	useGSAP(() => {
		if (!targetRef.current) return;
		gsap.to(targetRef.current.position, {
			y: targetRef.current.position.y + 0.1,
			duration: 1,
			repeat: -1,
			yoyo: true,
		});

	}, []);

	return (
		<Float floatIntensity={0.5}>
		<mesh {...props} ref={targetRef} rotation={[Math.PI / 3, Math.PI / 51, 0]} scale={0.1} >
			<primitive object={data.scene} />
			</mesh>
		</Float>
	);
};

export default Keyboard;