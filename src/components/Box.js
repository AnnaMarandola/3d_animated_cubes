import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Box(props) {
  // to use one specific box...
  const mesh = useRef(null);

  const [state, setState] = useState({ isHovered: false });

  // making the box move... the last parameter determine the move's velocity
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.0075));

  return (
    <mesh
      ref={mesh}
      scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPointerOver={(e) => setState({ isHovered: true })}
      onPointerOut={(e) => setState({ isHovered: false })}
      {...props}
    >
      <boxBufferGeometry arg={[2, 2, 2]} />
      <meshPhongMaterial
        color={state.isHovered ? "#820263" : "#d90368"}
        shininess={100}
      />
    </mesh>
  );
}

export default Box;
