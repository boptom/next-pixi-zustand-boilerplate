import { Container, Stage } from "@inlet/react-pixi";

export const GameProvider = () => {
  return (
    <>
      <Stage
        width={800}
        height={600}
        options={{
          backgroundColor: 0xeeeeee,
        }}
      >
        <Container></Container>
      </Stage>
    </>
  );
};
