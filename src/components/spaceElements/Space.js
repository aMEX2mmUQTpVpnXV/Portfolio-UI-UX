import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Book } from "./Book";
import { BubbleTea } from "./BubbleTea";
import background from "./../../assets/space/space-bg5.png";
import { Astronaut } from "./Astronaut";
import { Text, Text3D } from "@react-three/drei";

function Space() {
  return (
    <Wrapper>
      <Canvas className="canvas">
        Tomato
        <OrbitControls enableZoom={false} enableRotate={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 1]} intensity={10} />
        <Text scale={[2, 2, 2]} position={[0, 3, 0]}>
          Welcome! Click an object to see a project or navigate to the projects
          section for more details!
        </Text>
        <Book x={20} y={1} z={-4} rotX={1.2} rotY={1} rotZ={-1} scale={0.003} />
        <Book x={25} y={-1} z={-4} rotX={4} rotY={3} rotZ={1} scale={0.003} />
        <Astronaut
          x={23}
          y={1}
          z={-4}
          rotX={1.2}
          rotY={1}
          rotZ={-1}
          scale={2}
        />
        <BubbleTea
          x={19}
          y={-5}
          z={-3}
          rotX={1.2}
          rotY={1}
          rotZ={-1}
          scale={7}
        />
        <BubbleTea
          x={26}
          y={-2}
          z={1}
          rotX={1}
          rotY={0.9}
          rotZ={-0.5}
          scale={7}
        />
      </Canvas>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: #270b36;
  background-repeat: repeat;
  background-image: url(${background});
  canvas {
    height: 800px;
  }
`;

export default Space;
