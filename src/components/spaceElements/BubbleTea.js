/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function BubbleTea(props) {
  const { nodes, materials } = useGLTF("/bubble_tea.gltf");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x += 0.002;
    myMesh.current.rotation.y += 0.001;
    myMesh.current.rotation.z -= 0.001;
    myMesh.current.position.x -= 0.002;
    myMesh.current.position.z -= 0.0;
    if (myMesh.current.position.x < -4.5) {
      myMesh.current.position.x = 0;
      myMesh.current.position.y = 0;
      myMesh.current.position.z = 0;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={props.scale}
      position={[props.x, props.y, props.z]}
    >
      <mesh ref={myMesh} onClick={(e) => console.log("click")}>
        <mesh
          geometry={nodes.Outside_cup.geometry}
          material={materials["Material.006"]}
          position={[0.01, 0.48, 0]}
        />
        <mesh
          geometry={nodes.Cap.geometry}
          material={materials.Material}
          position={[0.01, 0.54, 0]}
        />
        <mesh
          geometry={nodes.Cap_2.geometry}
          material={materials["Material.002"]}
          position={[0.01, 0.62, 0]}
        />
        <mesh
          geometry={nodes.Inside_cup.geometry}
          material={materials["Material.003"]}
          position={[0.01, 0.48, 0]}
        />
        <mesh
          geometry={nodes.Straw.geometry}
          material={materials["default"]}
          position={[0.05, 0.64, -0.04]}
          rotation={[2.56, 1.05, -2.65]}
          scale={[1.24, 1.04, 1.25]}
        />
        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials["Material.004"]}
          position={[0.01, 0.5, -0.03]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.004"]}
          position={[0.02, 0.47, 0.03]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere002.geometry}
          material={materials["Material.004"]}
          position={[0.02, 0.47, -0.02]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere003.geometry}
          material={materials["Material.004"]}
          position={[-0.02, 0.44, 0.01]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere004.geometry}
          material={materials["Material.004"]}
          position={[0, 0.52, 0]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere005.geometry}
          material={materials["Material.004"]}
          position={[0.01, 0.43, -0.02]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere006.geometry}
          material={materials["Material.004"]}
          position={[-0.02, 0.5, 0.02]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere007.geometry}
          material={materials["Material.004"]}
          position={[0.04, 0.48, -0.02]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere008.geometry}
          material={materials["Material.004"]}
          position={[-0.01, 0.45, 0.01]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere009.geometry}
          material={materials["Material.004"]}
          position={[0.02, 0.53, 0.04]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere010.geometry}
          material={materials["Material.004"]}
          position={[0.03, 0.42, 0]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere011.geometry}
          material={materials["Material.004"]}
          position={[0.04, 0.51, 0.02]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere012.geometry}
          material={materials["Material.004"]}
          position={[0.02, 0.43, 0.03]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere013.geometry}
          material={materials["Material.004"]}
          position={[0.03, 0.44, -0.02]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere014.geometry}
          material={materials["Material.004"]}
          position={[-0.01, 0.43, 0.02]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere015.geometry}
          material={materials["Material.004"]}
          position={[-0.02, 0.48, 0.02]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere016.geometry}
          material={materials["Material.004"]}
          position={[-0.03, 0.49, 0]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere017.geometry}
          material={materials["Material.004"]}
          position={[0.03, 0.48, 0.03]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere018.geometry}
          material={materials["Material.004"]}
          position={[0.02, 0.53, -0.04]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere019.geometry}
          material={materials["Material.004"]}
          position={[0.03, 0.44, -0.01]}
          scale={-0.01}
        />
        <mesh
          geometry={nodes.Sphere020.geometry}
          material={materials["Material.005"]}
          position={[0.01, 0.5, -0.03]}
          scale={-0.01}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/bubble_tea.gltf");
