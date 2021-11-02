import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";
import { Sky, OrbitControls } from "@react-three/drei"

function App() {
  return (
    <Canvas colorManagement>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <pointLight position={[-10, 0, -10]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <Box position={[-1, 0, 0]} />
      <Box position={[1, 0, 0]} />
      {/* creating a floor... */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeBufferGeometry args={[100,100]}/>
        <meshStandardMaterial color="lightblue"/>
      </mesh>
      <Sky distance={4000} sunPosition={[0,1,0]} inclination={0} azimuth={0.25}/>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
