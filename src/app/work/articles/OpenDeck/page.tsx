import Final from "./OpenDeck.mp4";
import Image from "@/generated/code/OpenDeck";
import { useTranslation } from "./translation";

export default function Page() {
  const tr = useTranslation();
  return (
    <>
      <h1>Open Deck Controller</h1>
      <video src={Final} controls muted autoPlay loop />
      {tr.description}
      <Image />
    </>
  );
}
