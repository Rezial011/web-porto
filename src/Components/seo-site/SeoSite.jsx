import React from "react";
import Experience from "./Experience";
import Article from "./article";
import ContactLayout from "../contact/ContactLayout";

export default function SeoSite() {
  return (
    <section>
      <div className="seo p-5">
        <div className="bg-[#464646] p-5 rounded-3xl">
          <p className=" text-[12.5px] text-justify md:text-sm ">
            Saya adalah seorang mahasiswa dari Universitas Raharja Kota
            Tangerang yang menekuni bidang web developer namun memiliki
            pengalaman di bidang SEO. Laman ini berisi tentang pemaparan
            pemahaman saya dalam praktik SEO, yang berfokus pada optimasi untuk
            meningkatkan visibilitas website dalam hasil pencarian search engine
            melalui traffic organik yang berkualitas.
            <br />
            <br />
            Berbekal pengalaman dari Internship, Saya memiliki kemampuan untuk
            melakukan riset keyword, implementasi SEO On-Page dan Off Page,
            serta menganalisis performa website dengan tools seperti Google
            Search Console. Informasi lain mengenai riwayat pendidikan dan
            pengalaman, serta beberapa konten artikel yang pernah dibuat sebagai
            portfolio.
          </p>
        </div>
        <br />
        <Experience />
        <Article />
      </div>
      <ContactLayout />
    </section>
  );
}
