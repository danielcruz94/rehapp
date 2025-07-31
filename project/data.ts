
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
    name: "Espalda alta",
    icon: "/default/Capa_1-2.svg",
    description: "Selecciona si estás experimentando un dolor en la espalda alta.",
    link: "issued/upperback",
    img: "/default/Rehapp/img.espalda_alta.svg",
    backgroundImage: "/background/BgEspaldaAlta.jpg",
    exercise:[{url:"/upperback1",name:"Extension lateral",difficulty:"Fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/Back_Excersises+/IMG_2186.MOV"},{url:"/upperback2",name:"Extensión frontal",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/Back_Excersises+/IMG_2184.MOV"},{url:"/upperback3",name:"Reabilitación",difficulty:"difícil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/Back_Excersises+/IMG_2187.MOV"}]
  },
  {
    id: 2, 
    name: "Espalda baja",
    icon: "/default/Capa_1-3.svg",
    description: "Selecciona si estás experimentando un dolor en la espalda baja.",
    link: "issued/lowerback",
    img: "/default/Rehapp/img.espaldabaja.svg",
    backgroundImage: "/background/bgEspaldaBaja.jpg",

    exercise:[{url:"/lowerback1",name:"Extensión baja",difficulty:"Fácil",video:"/video/lowerback1"},{url:"/lowerback2",name:"Fuerza centrica",difficulty:"medio",video:"/video/lowerback2"},{url:"/upperback3",name:"Reabilitación",difficulty:"difícil",video:"/video/upperback3"}]
  },
  {
    id: 3,
    name: "Rodilla",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/knee1",name:"Extensión frontal",difficulty:"Fácil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2188.MOV"},{url:"/knee2",name:"Presión lateral",difficulty:"medio",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2189.MOV"},{url:"/knee3",name:"Reabilitación",difficulty:"difícil",video:"https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/IMG_2191.MOV"}]
  },
];