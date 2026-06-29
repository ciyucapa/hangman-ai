const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={2}
        castShadow
      />
    </>
  );
};

export default Lights;