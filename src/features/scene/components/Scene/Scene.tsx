import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import {
  Environment,
  Ground,
  Lights,
  PlaceholderCharacter,
} from '@/features/scene/components';

import styles from './Scene.module.css';

const Scene = () => {
  return (
    <div className={styles.sceneContainer}>
      <Canvas camera={{ position: [0, 3, 5], fov: 60 }} shadows>
        <color attach="background" args={['#111827']} />

        <Environment />
        <Lights />
        <Ground />
        <PlaceholderCharacter />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;