import { Lobster } from "next/font/google";
import Link from "next/link";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export const HeroSection = () => {
  return (
    <div className="flex flex-col  justify-center mt-20">
      <div
        className="
    flex flex-col items-center mb-10
        "
      >
        <h2 className="text-brick/80 font-normal text-2xl italic">
          Welcome to
        </h2>
        <h1
          className={`text-[150px] font-bold text-logo capitalize ${lobster.className}`}
        >
          grec
        </h1>

        <Link
          href="#menu"
          className="capitalize w-40 h-12 rounded-md border border-brick/80 flex items-center justify-center gap-x-2 transition-colors cursor-pointer relative"
        >
          <div className="absolute flex items-center justify-center -left-12">
            <span className="w-1.5 h-1.5 rounded-full  bg-brick"></span>
            <span className="w-5 h-0.5  bg-brick"></span>
          </div>
          <div className="" />
          <div className="absolute bg-brick py-1.5 w-[115%] rounded-sm flex items-center justify-center">
            view menu
          </div>
          <div className="absolute flex items-center justify-center -right-12">
            <span className="w-5 h-0.5  bg-brick"></span>
            <span className="w-1.5 h-1.5 rounded-full  bg-brick"></span>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-x-4 justify-center px-10">
        <img
          src={"/assets/road_grec.jpg"}
          alt="Road GREC"
          className="rounded-xl w-1/3  max-h-[700px]"
        />
        <img
          src={"/assets/indoor_grec.jpg"}
          alt="Indoor GREC"
          className="rounded-xl w-1/3 mx-4 object-cover
            max-h-[700px]
          "
        />
        <img
          src={"/assets/view_grec.jpg"}
          alt="View GREC"
          className="rounded-xl w-1/3  max-h-[700px]"
        />
      </div>
    </div>
  );
};
