import React from "react";
import line3 from "../../assets/line (3).png"
import line4 from "../../assets/line (4).png"

export default function ProfileLayout() {
    return (
        <section id="profile" className="profile flex gap-10 py-19 px-25">
            <div className="p-10 pe-20 flex flex-col justify-center">
                <h1 className="title text-5xl mb-15 text-center md:text-left">quick <br />introduce</h1>
                <img src={line3} alt="" className="w-30 mb-3"/>
                <img src={line4} alt="" className="w-50 hidden"/>
            </div>
            <p className="text-lg col-span-2 flex items-center text-justify">I'm an Informatics Engineering student focusing on website development and its related fields.
                <br /><br />
                I can translate design prototypes into functional code and ensure responsiveness across different device sizes, understanding RESTful API architecture for developing web servers, and I can fetch data from APIs. I also have experience with other programming languages such as C++ and Python.</p>
        </section>
    )
}