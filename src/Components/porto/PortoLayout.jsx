import React from "react";
import Carousel from "./Carousel";

export default function PortoLayout() {
    return (
        <section id="porto" className="porto py-17 flex flex-col items-center h-[99vh]">
            <h1 className="title text-6xl mb-10">projects</h1>
            <Carousel/>
        </section>
    )
}