/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Suricacto (https://sketchfab.com/suricacto)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/old-hardcover-book-2c80b3cb53684d9abc46d7ce5a3833c4
title: Old Hardcover Book
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function Book(props) {
  const { nodes, materials } = useGLTF("/book.gltf");
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x += 0.01;
    myMesh.current.rotation.y += 0.01;
    myMesh.current.rotation.z -= 0.001;
    myMesh.current.position.x -= 10;
    myMesh.current.position.z -= 1;
    if (myMesh.current.position.x < -15000) {
      myMesh.current.position.x = props.x;
      myMesh.current.position.y = props.y;
      myMesh.current.position.z = props.z;
    }
  });
  return (
    <group
      {...props}
      dispose={null}
      scale={props.scale}
      position={[props.x, props.y, props.z]}
      rotation={[
        Math.PI * props.rotX,
        Math.PI * props.rotY,
        Math.PI * props.rotZ,
      ]}
    >
      <mesh ref={myMesh} onClick={(e) => console.log("click")}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={232.93}>
              <mesh
                geometry={nodes.Book_Capa_0.geometry}
                material={materials.Capa}
              />
            </group>
            <group
              position={[0, -20.14, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={232.93}
            >
              <mesh
                geometry={nodes.Couro_Fivela_couro_0.geometry}
                material={materials.couro}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                geometry={nodes.Fivela_Fivela_0.geometry}
                material={materials.Fivela}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                geometry={nodes.Flaps_Couro_2_0.geometry}
                material={materials.Couro_2}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={232.93}>
              <mesh
                geometry={nodes.Detalhes_Ferro_Metal_0.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              position={[-131.17, 1.09, -294.17]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[38.48, 52.9, 100.76]}
            >
              <mesh
                geometry={nodes.BezierCurve_Marcador_0.geometry}
                material={materials.Marcador}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={232.93}>
              <mesh
                geometry={nodes.Book001_Papel_0.geometry}
                material={materials.Papel}
              />
            </group>
          </group>
        </group>
      </mesh>
    </group>
  );
}

useGLTF.preload("/Portfolio-UI-UX/book.gltf");
