

import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useGraph } from '@react-three/fiber';
import { useEffect, useMemo, useRef, type JSX } from 'react';
import * as THREE from 'three';
import { SkeletonUtils, type GLTF } from 'three-stdlib';


type GLTFResult = GLTF & {
	nodes: {
		EyeLeft: THREE.SkinnedMesh
		EyeRight: THREE.SkinnedMesh
		Wolf3D_Head: THREE.SkinnedMesh
		Wolf3D_Teeth: THREE.SkinnedMesh
		Wolf3D_Hair: THREE.SkinnedMesh
		Wolf3D_Glasses: THREE.SkinnedMesh
		Wolf3D_Body: THREE.SkinnedMesh
		Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
		Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
		Wolf3D_Outfit_Top: THREE.SkinnedMesh
		Hips: THREE.Bone
	}
	materials: {
		Wolf3D_Eye: THREE.MeshStandardMaterial
		Wolf3D_Skin: THREE.MeshStandardMaterial
		Wolf3D_Teeth: THREE.MeshStandardMaterial
		Wolf3D_Hair: THREE.MeshStandardMaterial
		Wolf3D_Glasses: THREE.MeshStandardMaterial
		Wolf3D_Body: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
	}
}

const Developer = ({ animationName = 'dancing', ...props }: JSX.IntrinsicElements['group'] & {
	animationName: string;
}) => {
	const group = useRef<THREE.Group | null>(null);

	const { scene } = useGLTF('/models/animations/devoloper.glb');
	const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;

	const { animations: idleAnimation } = useFBX('/models/animations/Idle.fbx');
	const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
	const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
	const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');


	idleAnimation[0].name = 'idle';
	saluteAnimation[0].name = 'salute';
	clappingAnimation[0].name = 'clapping';
	victoryAnimation[0].name = 'victory';

	const { actions } = useAnimations(
		[idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
		group,
	);

	useEffect(() => {
		actions[animationName]?.reset().fadeIn(0.5).play();
		return () => {
			actions[animationName]?.fadeOut(0.5);
		}
	}, [animationName]);

	return (
		<group ref={group} {...props} dispose={null}>
			<primitive object={nodes.Hips} />
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Glasses.geometry}
				material={materials.Wolf3D_Glasses}
				skeleton={nodes.Wolf3D_Glasses.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Body.geometry}
				material={materials.Wolf3D_Body}
				skeleton={nodes.Wolf3D_Body.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
				material={materials.Wolf3D_Outfit_Bottom}
				skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
				material={materials.Wolf3D_Outfit_Footwear}
				skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials.Wolf3D_Outfit_Top}
				skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
			/>
			<skinnedMesh
				name="EyeLeft"
				geometry={nodes.EyeLeft.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeLeft.skeleton}
				morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
			/>
			<skinnedMesh
				name="EyeRight"
				geometry={nodes.EyeRight.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeRight.skeleton}
				morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
			/>
			<skinnedMesh
				name="Wolf3D_Head"
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials.Wolf3D_Skin}
				skeleton={nodes.Wolf3D_Head.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
			/>
			<skinnedMesh
				name="Wolf3D_Teeth"
				geometry={nodes.Wolf3D_Teeth.geometry}
				material={materials.Wolf3D_Teeth}
				skeleton={nodes.Wolf3D_Teeth.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
			/>
		</group>
	);
};

useGLTF.preload('/models/animations/devoloper.glb');

export default Developer;
