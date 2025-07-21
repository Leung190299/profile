import { Float, useGLTF } from '@react-three/drei'
import { type JSX } from 'react'
import * as THREE from 'three'
import { type GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		['React-Logo_Material002_0']: THREE.Mesh
	}
	materials: {
		['Material.002']: THREE.MeshStandardMaterial
	}
}

export function ReactLogo(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/models/react_logo.glb') as unknown as GLTFResult

	// Check if the required nodes and materials are loaded
	if (!nodes['React-Logo_Material002_0'] || !materials['Material.002']) {
		return null
	}

	return (
		<Float floatIntensity={0.5}>
			<group {...props} dispose={null}>
				<group scale={0.01}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes['React-Logo_Material002_0'].geometry}
						material={materials['Material.002']}
						position={[0, 7.935, 18.102]}
						rotation={[0, 0, -Math.PI / 2]}
						scale={[39.166, 39.166, 52.734]}
					/>
				</group>
			</group>
		</Float>
	)
}

useGLTF.preload('/models/react_logo.glb')