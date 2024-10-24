import Final from "./CircuitStudio.mp4";
import Image1 from "@/generated/code/CircuitStudio/snapshot";
import Image2 from "@/generated/code/CircuitStudio/snapshot-2";
import Image3 from "@/generated/code/CircuitStudio/snapshot-3";
import { useTranslation } from "./translation";

export default function Page() {
  const tr = useTranslation();
  return (
    <>
      <h1>Brayns Circuit Studio</h1>
      <video src={Final} controls muted autoPlay loop />
      {tr.description}
      <Image1 />
      <Image2 />
      <Image3 />
    </>
  );
}
