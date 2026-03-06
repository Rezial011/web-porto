import React, { useState } from "react";

export default function Experience() {
  const [open, setOpen] = useState(false);
  const experiences = [
    {
      id: 1,
      tempat: "Solusi Klik",
      url: "https://www.google.com/search?q=solusi+klik&oq=solusi+klik&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARAjGCcyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzNzQ4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
      tgl: "Sep - Des 2025",
      status: "Internship",
      responsibilty: [
        "Melakukan riset keyword yang relevan untuk membuat artikel",
        "Membuat artikel untuk meningkatkan traffic dan ranking website",
        "Implementasi SEO On-page dalam artikel",
        "Optimasi SEO On-page Dashboard Company",
        "Implementasi SEO Off page melalui platform LinkedIn dan Gmaps",
        "Memantau dan melaporkan performa organik website",
        "Mendata artikel yang muncul dalam hasil pencarian mesin pencari (search engine)",
      ],
    },
  ];
  return (
    <div>
      <h2 className="prim-red title text-xl">SEO Experiences</h2>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <div className="flex justify-between">
            <div>
              <a
                className="title prim-black text-xl hover:underline lg:text-2xl"
                href={experience.url}
                target="_blank"
              >
                {experience.tempat}
              </a>
              <h4 className="prim-red text-sm mb-2 md:text-base lg:text-lg">
                {experience.status}
              </h4>
            </div>
            <p className="prim-black text-sm md:text-base">{experience.tgl}</p>
          </div>
          <div>
            <div
              className={`bg-gray-100 p-3 lg:p-4 rounded-lg md:rounded-xl lg:rounded-3xl relative overflow-hidden transition-all duration-300 ease-in-out`}
              onClick={() => setOpen(!open)}
            >
              <svg
                className={` absolute top-2 right-4 lg:top-4 lg:right-6 ${open !== true ? "rotate-90" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
              >
                <defs>
                  <path
                    id="SVG1pzpbdYY"
                    fill="#747474"
                    d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                  />
                </defs>
                <use
                  fill-rule="evenodd"
                  href="#SVG1pzpbdYY"
                  transform="rotate(-180 5.02 9.505)"
                />
              </svg>
              <h5 className="sec-black text-sm/3 lg:text-base font-semibold">
                Responsibilities:
              </h5>
              <ul
                className={` list-disc marker:text-[#ff2d2d] marker:text-2xl ms-6 ${open !== true ? "max-h-0 overflow-hidden" : "max-h-100"}`}
              >
                {experience.responsibilty.map((poin, index) => (
                  <li
                    key={index}
                    className="sec-black font-medium text-xs md:text-sm/3 lg:text-base/4"
                  >
                    {poin}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
