import React from "react";

import { articles, offPageContent } from "./artikel";

export default function Article() {
  return (
    <section>
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center">
        <hr className="border-gray-300 -mb-5 w-[90%] " />
        <span className="sec-black text-sm p-2 bg-white italic">Article</span>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {articles.map((article) => (
          <a
            key={article.id}
            className="bg-gray-100 w-full sm:w-72 md:w-88 lg:w-78 p-5 shadow-md hover:brightness-95 grow lg:grow-0"
            href={article.url}
            target="_blank"
          >
            <h3 className="title prim-black line-clamp-4">{article.title}</h3>
            <p className="sec-black text-[12.5px] text-justify my-3 line-clamp-4">
              {article.metaDesc}
            </p>
            <p className="sec-red text-[12.5px] font-semibold self-end">
              Keyword: {article.keyword}
            </p>
          </a>
        ))}
        <div className="bg-gray-100 w-full sm:w-72 md:w-88 lg:w-78 p-5 shadow-md grow sm:grow-0 break-words flex flex-col gap-3 justify-center">
          <h3 className="title sec-red text-lg line-clamp-4">More article:</h3>
          <a
            href="https://indotechglobal.com/author/admindafaal/"
            className="sec-black text-[12.5px] hover:underline"
          >
            https://indotechglobal.com/author/admindafaal/
          </a>
          <a
            href="https://muliaberkahtamaabadi.com/author/admindafa/"
            className="sec-black text-[12.5px] hover:underline"
          >
            https://muliaberkahtamaabadi.com/author/admindafa/
          </a>
          <a
            href="https://rehobotsuksesmandiri.com/author/admindafa/"
            className="sec-black text-[12.5px] hover:underline"
          >
            https://rehobotsuksesmandiri.com/author/admindafa/
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col">
        <hr className="border-gray-300 -mb-5" />
        <span className="sec-black text-sm p-2 bg-white self-center italic">
          Off Page Content
        </span>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {offPageContent.map((content) => (
          <a
            key={content.id}
            className="flex flex-col bg-gray-200 w-full sm:w-72 md:w-88 lg:w-78 p-2 shadow-md hover:brightness-95 grow lg:grow-0"
            href={content.url}
            target="_blank"
          >
            <img src={content.image} alt="" />
            <div className="px-2">
            <h3 className="title prim-black line-clamp-3 mt-3">{content.title}</h3>
            <hr className="border-gray-400 mt-3 w-[30%]"/>
            <p className="sec-black text-[12.5px] text-justify  line-clamp-4 my-2">
              Content: <span className="sec-red font-semibold">{content.metaDesc}</span>
            </p>
            </div>
          </a>
        ))}
        <div className="bg-gray-100 w-full h-max sm:w-72 md:w-88 lg:w-78 p-5 shadow-md grow sm:grow-0 break-words flex flex-col gap-3 justify-center self-center">
          <h3 className="title sec-red text-lg line-clamp-4">More content:</h3>
          <a
            href="https://www.linkedin.com/company/cvindotechglobal/posts/?feedView=all"
            className="sec-black text-[12.5px] hover:underline"
          >
            https://www.linkedin.com/company/cvindotechglobal/posts/?feedView=all
          </a>
          <a
            href="https://share.google/RCfFMh1EJUusHChGt"
            className="sec-black text-[12.5px] hover:underline"
          >
            https://share.google/RCfFMh1EJUusHChGt
          </a>
          <a
            href="https://share.google/c9bCMmnbtysx7I9m1"
            className="sec-black text-[12.5px] hover:underline"
          >
            https://share.google/c9bCMmnbtysx7I9m1
          </a>
        </div>
      </div>
    </section>
  );
}
