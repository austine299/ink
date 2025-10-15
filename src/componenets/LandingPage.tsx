// import React from 'react'
import Benefits_card from "./Benefits_card";
import ServiceCard from "./ServiceCard";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
function LandingPage() {
  return (
    <div className="bg-black">
      <div className=" bg-black h-fit w-full mb-14">
        <button className="cursor-pointer bg-black hover:bg-gray-800 w-60 rounded-4xl border border-blue-300 h-11 font-bold absolute right-[400px] top-13 text-white ">
          Contact Us
        </button>

        <img src="/images/icons/landing_page_banner.png" />
      </div>
      <div className="flex flex-col gap-10 items-center w-full border border-t-gray-400 border-b-gray-400 p-13">
        <button className=" text-[16px] font-[Maiandra] cursor-pointer bg-black hover:bg-gray-800 rounded-4xl border border-blue-300 h-9 font-bold pl-5 pr-5 text-white ">
          YOU DREAM WE CREATE
        </button>
        <a
          href=""
          className="text-blue-300 w-[55%] text-center text-[24px] hover:underline"
        >
          We help <em className="text-white">clarify</em> your vision, then we
          create <em className="text-white">functional</em> visual
          representation and then help you build a reliable{" "}
          <em className="text-white"> implementation</em>
          process
        </a>
      </div>
      <div className="flex flex-col items-center gap-5 mt-14 border-b border-gray-400 pb-14">
        <button className=" font-[Maiandra] cursor-pointer bg-black hover:bg-gray-800  rounded-4xl border border-blue-300 h-9 pl-5 pr-5 font-bold  text-white ">
          BENEFITS
        </button>
        <a href="" className="text-blue-400 text-2xl font-[Montserrat]">Why Choose <span className="font-[Aclonica]">INK</span></a>
        <h3  className="text-white text-[19px] ">We don’t just design, we create to bring your vision to life </h3>
        <div className="flex gap-8 justify-center w-full mt-16">
            <Benefits_card
                image ="/images/icons/timely1.png"
                title = "Timely Response and Delivery"
                description ="Experience real time ideation and on-time design iterations"
            />
            <Benefits_card
                image ="/images/icons/chart.png"
                title = "Timely Response and Delivery"
                description ="We don’t just design, we create to bring your vision to life "
            />
            <Benefits_card
                image ="/images/icons/cycles.png"
                title = "Timely Response and Delivery"
                description ="We don’t just design, we create to bring your vision to life "
            />
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center border-b border-gray-400 pb-14">
        <button className="flex gap-4 items-center font-[Maiandra] cursor-pointer bg-black w-fit hover:bg-gray-800  rounded-4xl border border-blue-300 h-9 pl-5 pr-5 font-bold  text-white ">
          <img src="/images/icons/menu.png" className="h-5"/> OUR SERVICES
        </button>
        <div className="mt-14 flex flex-col gap-14 ">
            <ServiceCard
                title= "SYSTEM STRUCTURE DESIGN"
                list1= "Experience real time ideation and on-time design iterations"
                list2= "Experience real time ideation and on-time design iterations"
                list3= "Experience real time ideation and on-time design iterations"
                list4= "Experience real time ideation and on-time design iterations"
                image ="/images/icons/structure.png"
            />
            <ServiceCard
                title= "PRODUCT DESIGN"
                list1= "Experience real time ideation and on-time design iterations"
                list2= "Experience real time ideation and on-time design iterations"
                list3= "Experience real time ideation and on-time design iterations"
                list4= "Experience real time ideation and on-time design iterations"
                image ="/images/icons/design.png"
            />
            <ServiceCard
                title= "BRANDING"
                list1= "Experience real time ideation and on-time design iterations"
                list2= "Experience real time ideation and on-time design iterations"
                list3= "Experience real time ideation and on-time design iterations"
                list4= "Experience real time ideation and on-time design iterations"
                image ="/images/icons/structure.png"
            />
        </div>
      </div>
      <div className="w-full h-[236px] bg-gray-100 flex items-center justify-between p-14">
        <h2 className="font-bold text-3xl text-gray-600">Section heading</h2>
        <div className="flex gap-5 h-10">
            <button className="bg-black pl-5 pr-5 pt-2 pb-2 text-white rounded-2xl">Button</button>
            <button className="bg-gray-300 pl-5 pr-5 pt-2 pb-2 text-black rounded-2xl">Secondary Button</button>
        </div>
      </div>
      <div className="w-full h-[264px] bg-white justify-between p-14 flex">
        <div className="flex flex-col justify-between">
            <h3 className="text-2xl">Site Name</h3>
            <ul className="flex gap-5">
                <li><FaFacebook/></li>
                <li><FaLinkedin/></li>
                <li><FaYoutube/></li>
                <li><FaInstagram/></li>
            </ul>
        </div>
        <div className="flex w-[50%] justify-between">
            <ul className="flex flex-col gap-5">
                <li>Topic</li>
                <li>Page</li>
                <li>Page</li>
                <li>Page</li>
            </ul>
            <ul className="flex flex-col gap-5">
                <li>Topic</li>
                <li>Page</li>
                <li>Page</li>
                <li>Page</li>
            </ul>
            <ul className="flex flex-col gap-5">
                <li>Topic</li>
                <li>Page</li>
                <li>Page</li>
                <li>Page</li>
            </ul>

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
