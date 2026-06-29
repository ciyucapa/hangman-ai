import { Sky } from '@react-three/drei';

const Environment = () => {
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[0, 1, -1]}
        inclination={0.6}
        azimuth={0.25}
      />

      <fog attach="fog" args={['#111827', 10, 40]} />
    </>
  );
};

export default Environment;