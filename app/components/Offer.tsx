import { ReactElement } from "react";
import { Svg1 } from "../svg/Svg1";

interface OfferProps{
    svg:ReactElement,
    title:String,
    desc:String
}

const Offer = ({svg,title,desc}:OfferProps) => {
  return (
    <div className="flex flex-col w-full px-20 gap-6">
      <hr className="w-full border mt-6 border-blue-600" />
      <div className="flex justify-between">
        <div className="flex gap-2">
          {" "}
         {svg}
          <h1 className="w-1/2 text-2xl">{title}</h1>
        </div>

        <p className="text-xs w-80 ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Offer;
