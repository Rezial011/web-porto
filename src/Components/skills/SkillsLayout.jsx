import React from "react";

const nameMapping = {
    'logo (1).svg': 'Bootstrap',
    'logo (2).svg': 'C++',
    'logo (3).svg': 'CSS 3',
    'logo (4).svg': 'Git',
    'logo (5).svg': 'HTML 5',
    'logo (6).svg': 'Express',
    'logo (7).svg': 'Javascript',
    'logo (8).svg': 'Node Js',
    'logo (9).svg': 'Tailwind',
    'logo (10).svg': 'Postman',
    'logo (11).svg': 'Python',
    'logo (12).svg': 'React Js',
    'logo (13).svg': 'Hapi',
  };

const images = import.meta.glob('../../assets/skills/logo (*).svg', { eager: true });
// Mengonversi objek hasil glob import ke dalam array
const imageList = Object.entries(images).map(([path, module]) => {
    const fileName = path.split('/').pop(); // Ambil nama file
    const displayName = nameMapping[fileName] || fileName.replace('.svg', ''); // Gunakan nama mapping atau nama file sebagai fallback
    return {
      src: module.default,
      name: displayName, // Gunakan nama yang sudah dimapping
    };
  });



// Fungsi untuk mengacak array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Tukar elemen
    }
return array;
};

const shuffledImages = shuffleArray([...imageList]);

export default function SkillsLayout() {

    return (
        <section id="skills" className="skills pb-40 pt-30 flex flex-col items-center justify-center overflow-hidden">
            <h1 className="title prim-red text-6xl pb-5">skills & tools</h1>
            <br />
            <br />
            <div className="flex flex-wrap justify-center content-start gap-15 px-23 h-75">
            {shuffledImages.map((image, index) => (
                <img className="w-27 hover:w-28"
                    key={index}
                    src={image.src}
                    title={image.name}
                />
                ))}
            </div>
        </section>
    )
}