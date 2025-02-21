import { React, useState } from "react";
import tv from "../../assets/porto/tv.png"
import foundationImg from "../../assets/porto/foundation.png"
import movieImg from "../../assets/porto/movie-id.png"
import titactoeImg from "../../assets/porto/tictactoe.png"
import cardImg from "../../assets/porto/card.png"
import notes from "../../assets/porto/notes.png"
import books from "../../assets/porto/books.png"

const porto = [
    {
        id:1,
        title:'Foundation',
        desc:'The company profile website for a fictional company named FOUNDATION represents a business operating in the construction and development industry. It offers services including consulting, planning, construction, and renovation.',
        imgSrc: foundationImg,
        bgColor: '#f4f7fe',
        color:'#10375C',
        position:'right',
        link:'https://foundationweb.netlify.app/',
    },
    {
        id:2,
        title:'TV-Shows',
        desc:"It's a rating website for TV programs inspired by IMDb, contain information about titles, genres, and ratings. The information data is fetched from TVmaze API. (www.tvmaze.com/api)",
        imgSrc: tv,
        bgColor: '#f9fafc',
        color:'mediumseagreen',
        position:'center',
        link:'https://tvshow-tau.vercel.app/',
    },
    {
        id:3,
        title:'Movie-id',
        desc:'A movie streaming website inspired by Netflix, featuring information about films such as synopses, reviews, and ratings. Include main features such as homepage, watching page, ranking page, and supporting features like About Us and Subscription.',
        imgSrc: movieImg,
        bgColor: '#1f1f1f',
        color:'white',
        position:'left',
        link:'https://movie-id.vercel.app/',
    },
    {
        id:4,
        title:'Tic Tac Toe',
        desc:'A classic 3x3 Tic Tac Toe game that supports single player and two player modes. It features background music that can be toggled on or off, along with interactive sound effects.',
        imgSrc: titactoeImg,
        bgColor: 'white',
        color:'#007ed7',
        position:'left',
        link:'https://rezial011.github.io/TicTacToe/',
    },
    {
        id:5,
        title:'Card Minigame',
        desc:'A simple card guessing game where players aim to find the Ace betwwen two cards. Designed for quick and fun gameplay.',
        imgSrc: cardImg,
        bgColor: '#2d2e2f',
        color:'#white',
        position:'center',
        link:'https://rezial011.github.io/card_minigame/',
    },
    {
        id:6,
        title:'Bookshelf-API',
        desc:'A web server for a book management service that allows users to read, add, edit, and delete book entries, including details such as ID, date, and reading status.',
        imgSrc: books,
        bgColor: '#30302e',
        color:'#white',
        position:'center',
        link:'https://github.com/Rezial011/bookshelf-api',
    },
    {
        id:7,
        title:'Notes-API',
        desc:'A web server for an online note-taking service that enables users to create, read, update, and delete notes along with their details.',
        imgSrc: notes,
        bgColor: '#30302e',
        color:'#white',
        position:'center',
        link:'https://github.com/Rezial011/js-notes-app',
    }
  ];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? porto.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === porto.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-parent relative w-[75vw] mx-auto">
        {/* Slides */}
        <div className="carousel overflow-hidden">
            <div
            className="flex h-[65vh] transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {porto.map((index) => (
                <div key={index.id} className="carousel-items w-full flex-shrink-0 flex items-center p-4" style={{backgroundColor: `${index.bgColor}`}} >
                    <div alt={`Slide ${index.id + 1}`} className="porto-img min-w-[350px] h-full">
                        <img
                    src={index.imgSrc}
                    style={{objectPosition: index.position}}
                    />
                    </div>

                  <div className="px-[45px]">
                    <h1 className="text-4xl title mb-5 " style={{color: `${index.color}`}}>{index.title}</h1>
                    <p className="font-medium" style={{color: `${index.color}`}}>{index.desc}</p>
                    <br />
                    <br />
                    <a href={index.link} target="_blank" className="prim-red font-bold hover:underline">Project Preview 🚀</a>
                  </div>
              </div>
            ))}
            </div>
        </div>

        {/* Previous Button */}
        <button
            className="absolute top-1/2 left-[-3vw] transform -translate-y-1/2 text-white"
            onClick={goToPrevious}
        >
            ❮
        </button>

        {/* Next Button */}
        <button
            className="absolute top-1/2 right-[-3vw] transform -translate-y-1/2 text-white"
            onClick={goToNext}
        >
            ❯
        </button>

        </div>
    );
};