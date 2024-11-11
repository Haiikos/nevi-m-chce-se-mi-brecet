import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../components/Loader"
import Island from '../models/Island'
import Sky from "../models/sky"
import Drone from "../models/Drone"
import HomeInfo from "../components/HomeInfo"


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -2, -12];
    let rotation = [0.1,4.7,0]

    if(window.innerWidth< 768){
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0, -6.5, -43];
    }else {
      screenScale = [1,1,1];
      screenPosition = [0, -2, -12];
    }

    return[screenScale, screenPosition, rotation];
  }
  const adjustDroneForScreenSize = () => {
    let screenScale,screenPosition;

    if(window.innerWidth< 768){
      screenScale = [0.007,0.007,0.007];
      screenPosition=[0,-1.5,0];
      }else {
      screenScale = [0.010,0.010,0.010];
      screenPosition = [0, 1.2, -2]; 
    }

    return[screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandrotation] = adjustIslandForScreenSize();
  const [droneScale, dronePosition] = adjustDroneForScreenSize();

  return (
    <section className="w-full, h-screen relative">
      {<div className="absolute top-28 left-0 right-0 z-10 flex
      items-center justify-center">
      {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>}
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ?
        'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#b1e1ff"
             groundColor="#000000" intensity={1}/>
    
            <Sky 
            isRotating={isRotating}
            />
            <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation= {islandrotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            />
            <Drone
            isRotating={isRotating}
            setIsRotating={setIsRotating} // Přidáno
            scale={droneScale}
            position={dronePosition}
            rotation={[0,30,0]}
            />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home