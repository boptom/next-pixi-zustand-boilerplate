import type { NextPage } from "next";
import dynamic from "next/dynamic";

const GameComponent = dynamic(
  () =>
    import("@/components/GameProvider").then((mod) => mod.GameProvider) as any,
  {
    ssr: false,
  }
);

const Play: NextPage = () => {
  return <GameComponent />;
};

export default Play;
