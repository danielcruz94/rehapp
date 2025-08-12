
export interface Exercise {
  url: string;
  name: string;
  difficulty: string;
  video: string;
}

export interface PainType {
  id: number; 
  name: string;
  icon: string;
  description: string;
  link: string;
  img: string;
  backgroundImage:string;
  exercise: Exercise[];
}

export const data: PainType[] = [
  {
    id: 1, 
    name: "Espalda B",
    icon: "/default/Capa_1-2.svg",
    description: "Selecciona si estás experimentando un dolor en la espalda baja.",
    link: "issued/upperback",
    img: "/default/Rehapp/img.espalda_alta.svg",
    backgroundImage: "/background/BgEspaldaAlta.jpg",
    exercise:[{url:"/upperback1",name:"Puente glúteo",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/Back_Excersises+/IMG_2186.MOV"},{url:"/upperback2",name:"Movilidad lumbopelvica",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/Back_Excersises+/IMG_2184.MOV"},{url:"/upperback3",name:"Cobra dinámica",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/Back_Excersises+/IMG_2187.MOV"}]
  },
  {
    id: 2, 
    name: "Espalda A",
    icon: "/default/Capa_1-3.svg",
    description: "Selecciona si estás experimentando un dolor en la espalda alta.",
    link: "issued/lowerback",
    img: "/default/Rehapp/img.espaldabaja.svg",
    backgroundImage: "/background/bgEspaldaBaja.jpg",

    exercise:[{url:"/lowerback1",name:"Extensión y flexión toráxica",difficulty:"fácil",video:"/video/lowerback1"},{url:"/lowerback2",name:"Trapecio medio",difficulty:"fácil",video:"/video/lowerback2"},{url:"/upperback3",name:"Retracción escapular",difficulty:"fácil",video:"/video/upperback3"}]
  },
  {
    id: 3,
    name: "Rodilla",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/knee1",name:"Estiramiento isquiotibiales",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2188.MOV"},{url:"/knee2",name:"Sentadilla isometrica",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2189.MOV"},{url:"/knee3",name:"Ascenso unilateral",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2191.MOV"}]
  },
  {
    id: 4,
    name: "Cuello",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/cuello",name:"Flexiones profundas",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2188.MOV"},{url:"/knee2",name:"Rotaciones",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2189.MOV"},{url:"/knee3",name:"Encogimiento hombro",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2191.MOV"}]
  },
  {
    id: 4,
    name: "Muñeca",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/cuello",name:"Martillo",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2188.MOV"},{url:"/knee2",name:"Flexo-estensión",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2189.MOV"},{url:"/knee3",name:"Estiramiento de muñeca",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2191.MOV"}]
  },
  {
    id: 5,
    name: "Hombro",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/cuello",name:"Encogimiento escapular",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2188.MOV"},{url:"/knee2",name:"Movilidad toráxica",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2189.MOV"},{url:"/knee3",name:"Circundución de hombro",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2191.MOV"}]
  },
  {
    id: 6,
    name: "Tobillo",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/cuello",name:"Dorsiflexión",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2188.MOV"},{url:"/knee2",name:"Plantiflexión",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2189.MOV"},{url:"/knee3",name:"Movilidad",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2191.MOV"}]
  },
  {
    id: 6,
    name: "Cadera",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/cuello",name:"Movilidad de cadera",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2188.MOV"},{url:"/knee2",name:"Flexión y abducción",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2189.MOV"},{url:"/knee3",name:"Extensión de cadera",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2191.MOV"}]
  },
  {
    id: 6,
    name: "Codo",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/cuello",name:"Extensión de muñeca",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2188.MOV"},{url:"/knee2",name:"Flexión de muñeca",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2189.MOV"},{url:"/knee3",name:"Prono-supinación",difficulty:"fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2191.MOV"}]
  },
];