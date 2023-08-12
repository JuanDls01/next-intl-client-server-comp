import me from "@/public/me.jpg";
import Image, { ImageLoader } from "next/image";

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const HeroSection = () => {
  return (
    <div className="container h-screen py-20 flex flex-wrap gap-[10px]">
      <div>
        <h1 className="font-bold text-blue-400 text-xl">
          Minimal Next Testing Project
        </h1>
        <p>Using Next, Tailwind and TypeScript</p>
      </div>
      <Image
        src={me}
        alt="me"
        width={300}
        height={500}
        className="w-1/4 h-fit"
        quality={100}
      />
    </div>
  );
};
export default HeroSection;
