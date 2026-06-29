import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Lights from './Lights';
import Ground from './Ground';
import PlaceholderCharacter from './PlaceholderCharacter';

import styles from './Scene.module.css';

const Scene = () => {
  return (
    <div  className={styles.sceneContainer}>
      <Canvas
        camera={{ position: [0, 3, 5], fov: 60 }}
        shadows
      >
        <color attach="background" args={['#111827']} />

        <Lights />

        <Ground />

        <PlaceholderCharacter />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;