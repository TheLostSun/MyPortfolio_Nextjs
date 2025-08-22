import Image from "next/image";
import profilePic from "../../public/meriphoto.jpg";
import AnimatedText from "../components/MiddleSection/AnimatedText.js"
import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className="my-12 flex max-lg:flex-col max-lg:justify-center p-10 items-center">
          <Image src={profilePic} alt="Prabhu Awasthi" className="drop-shadow-2xl p-1 rounded-full border-8 border-double border-dark lg:w-full max-lg:mb-4"></Image>
          <AnimatedText value="My Odyssey of development in various fields!"></AnimatedText>
          </div>
    </>
  )
}
