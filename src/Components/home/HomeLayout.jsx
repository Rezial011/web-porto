import React from "react";
import cv from "../../assets/CV_DafaAlFarezi.pdf"

export default function HomeLayout() {
    return (
        <section className="home flex flex-col justify-center items-center">
            <h1 className="title prim-red font-bold text-7xl mb-3 text-center">dafa al Farezi</h1>
            <p className="prim-black text-3xl">Web Developer</p>
            <br />
            <br />
            <a href={cv} target="_blank"><button className="text-xs py-4 px-7">My Resume</button></a>
        </section>
    )
}