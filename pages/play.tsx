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
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <GameComponent />
    </div>
  );
};

export default Play;
