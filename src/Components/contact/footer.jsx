import React from "react";
import telp from "../../assets/contact/whatsapp.png"
import mail from "../../assets/contact/mail.png"
import loc from "../../assets/contact/location-pin.png"
import linkedin from "../../assets/contact/linkedin.png"
import insta from "../../assets/contact/instagram.png"
import github from "../../assets/contact/github.svg"
import line4 from "../../assets/contact/line (4).png"

export default function Footer() {
    return (
        <div id="footer" className="footer flex items-center justify-between px-30 py-25 overflow-hidden">
            <div className="contacthori">
                <h1 className="title prim-red text-7xl mb-5">contact</h1>
                <p><img src={telp} alt="" />+62 859-5991-4600</p>
                <p><img src={mail} alt="" />dafaalfarezi27@gmail.com</p>
                <p className="capitalize"><a href=""><img src={loc} alt="" /></a>batu ceper, kota tangerang <br />banten, indonesia</p>
            </div>
            <div className="me-35">
                <h3 className="mb-2 title prim-black text-xl">Connect :</h3>
                <div className="flex gap-3 items-start">
                    <img src={line4} alt="" className="h-9 mx-1"/>
                    <a href="https://instagram.com/alfarezi1104" target="_blank"><img src={insta} alt="" /></a>
                    <a href="https://linkedin.com/in/dafa-al-farezi" target="_blank"><img src={linkedin} alt="" /></a>
                    <a href="https://github.com/Rezial011" target="_blank"><img src={github} alt="" /></a>
                </div>
            </div>
        </div>
    )
}