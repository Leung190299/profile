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
  return (
 <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.5} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react_logo.glb')