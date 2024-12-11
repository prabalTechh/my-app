'use client'
import { Children } from "react";
import  ChatBot  from "./components/Chatbot";
import Offer from "./components/Offer";
import { Svg1 } from "./svg/Svg1";
import { Svg2 } from "./svg/Svg2";
import { Svg3 } from "./svg/Svg3";
import { Svg4 } from "./svg/Svg4";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <div className="flex justify-between px-20 ">
        <div className="  flex flex-col justify-end pb-16 gap-4">
          <h1 className="font-medium text-blue-600 text-5xl">
            Do What's <br /> Best For Your <br />
            Brand.
          </h1>
          <button className="uppercase py-2 px-8 border border-blue-600">
            Book a meeting
          </button>
        </div>
        <div className="bg-blue-200">
          <img
            src="https://static.wixstatic.com/media/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg/v1/fill/w_1043,h_631,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg"
            alt="ImageMain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 mt-20 text-lg text-blue-600 ">
        <h1>what we do</h1>
        <Offer
          svg={<Svg1 />}
          title={"Shifting The Nerratives"}
          desc={
            "we help you in shifting all your negative PR into positive ones using our strategic UGC push."
          }
        />
        <Offer
          svg={<Svg2 />}
          title={"Building An Online Presence"}
          desc={
            "We give your brand a much-needed push in all the relevant communities and forums to make sure that you don't go unnoticed."
          }
        />
        <Offer
          svg={<Svg3 />}
          title={"Building A Personal Brand"}
          desc={
            "People relate with founders much better than they relate with Brands. We help you become more relatable and connect with your audience on a deeper lever."
          }
        />
        <Offer
          svg={<Svg4 />}
          title={"Building Your Content Funnel"}
          desc={
            "Boost website traffic by 20% and brand awareness by 35%! Our all-in-one solution, encompassing research, writing, SEO-optimized blogs, and captivating videos, helps you build an impeccable content machine that gets results."
          }
        />
        <hr className="w-[calc(100vw-10vw)]  border mb-2  border-blue-600" />

        <button className="px-5 py-2 text-xs border border-blue-600">
          Book Now
        </button>
      </div>

      <div className="w-full flex flex-col items-center  mt-20 gap-6 py-10">
        <h1 className="py-4 text-2xl text-blue-600 font-semibold">The Difference We've Made So Far</h1>
        <div className="flex gap-8">
          <InputDiv
            heading="50k+"
            para="average Impressions/per week/per brand"
          />
          <InputDiv
            heading="15%"
            para="Avg. Increase in sales within 3 months of our content service."
          />
          <InputDiv
            heading="30%"
            para="Better engagement on personal accounts within 2 months"
          />
          <InputDiv
            heading="20+"
            para="Business Impacted so far"
          />
        </div>
        <div className="pt-10">
        <Chatbot />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

function InputDiv({ heading, para }: { heading: string; para: string }) {
  return (
    <div className="flex flex-col items-center text-blue-600">
      <h1 className="text-2xl font-medium">{heading}</h1>
      <p className="text-xs w-40 text-center">{para}</p>
    </div>
  );
}
