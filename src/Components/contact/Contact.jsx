import React from "react";
import line from "../../assets/contact/line (1).png"

export default function Contact() {
    return (
        <div className="contact h-58 flex items-center overflow-hidden">
            <img src={line} alt="" className="w-5 mt-59 me-4 opacity-80" />
            <h1 className="title prim-red text-7xl">contact</h1>
        </div>
    )
}