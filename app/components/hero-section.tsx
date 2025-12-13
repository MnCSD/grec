import { Lobster } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-10">
      <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-brick/80 font-normal text-base sm:text-lg md:text-xl lg:text-2xl italic mb-2 sm:mb-3">
          Welcome to
        </h2>
        <h1
          className={`text-5xl sm:text-7xl md:text-9xl lg:text-[120px] xl:text-[150px] font-bold text-logo capitalize mb-6 sm:mb-8 md:mb-10 ${lobster.className}`}
        >
          grec
        </h1>

        <Link
          href="#menu"
          className="capitalize w-32 sm:w-36 md:w-40 h-10 sm:h-11 md:h-12 rounded-md border border-brick/80 flex items-center justify-center gap-x-2 transition-colors cursor-pointer relative group"
        >
          <div className="absolute flex items-center justify-center -left-6 sm:-left-8 md:-left-12">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brick"></span>
            <span className="w-3 sm:w-4 md:w-5 h-0.5 bg-brick"></span>
          </div>
          <div className="absolute bg-brick py-1 sm:py-1.5 w-[115%] rounded-sm flex items-center justify-center text-white text-xs sm:text-sm font-medium">
            view menu
          </div>
          <div className="absolute flex items-center justify-center -right-6 sm:-right-8 md:-right-12">
            <span className="w-3 sm:w-4 md:w-5 h-0.5 bg-brick"></span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brick"></span>
          </div>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-4 justify-center px-4 sm:px-6 md:px-10">
        <div className="relative w-full sm:w-1/3 rounded-xl overflow-hidden max-h-[300px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
          <Image
            src={"/assets/road_grec.jpg"}
            alt="Road GREC"
            width={800}
            height={700}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
          />
        </div>
        <div className="relative w-full sm:w-1/3 sm:mx-0 md:mx-4 rounded-xl overflow-hidden max-h-[300px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
          <Image
            src={"/assets/indoor_grec.jpg"}
            alt="Indoor GREC"
            width={800}
            height={700}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
          />
        </div>
        <div className="relative w-full sm:w-1/3 rounded-xl overflow-hidden max-h-[300px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
          <Image
            src={"/assets/view_grec.jpg"}
            alt="View GREC"
            width={800}
            height={700}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};
