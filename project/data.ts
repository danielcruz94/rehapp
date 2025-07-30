
export interface Exercise {
  url: string;
  name: string;
  difficulty: string;
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
    exercise:[{url:"/exercise/upperback1",name:"Extension lateral",difficulty:"Fácil"},{url:"/exercise/upperback2",name:"Extensión frontal",difficulty:"medio"},{url:"/exercise/upperback3",name:"Reabilitación",difficulty:"difícil"}]
  },
  {
    id: 2, 
    name: "Espalda baja",
    icon: "/default/Capa_1-3.svg",
    description: "Selecciona si estás experimentando un dolor en la espalda baja.",
    link: "issued/lowerback",
    img: "/default/Rehapp/img.espaldabaja.svg",
    backgroundImage: "/background/bgEspaldaBaja.jpg",

    exercise:[{url:"/exercise/lowerback1",name:"Extensión baja",difficulty:"Fácil"},{url:"/exercise/lowerback2",name:"Fuerza centrica",difficulty:"medio"},{url:"/exercise/upperback3",name:"Reabilitación",difficulty:"difícil"}]
  },
  {
    id: 3,
    name: "Rodilla",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise:[{url:"/exercise/knee1",name:"Extensión frontal",difficulty:"Fácil"},{url:"/exercise/knee2",name:"Presión lateral",difficulty:"medio"},{url:"/exercise/knee3",name:"Reabilitación",difficulty:"difícil"}]
  },
];