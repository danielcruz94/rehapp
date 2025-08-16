export interface Exercise {
  url: string;
  name: string;
  difficulty: string;
  video: string;
  machine: boolean;
}

export interface PainType {
  id: number;
  name: string;
  icon: string;
  description: string;
  link: string;
  img: string;
  backgroundImage: string;
  exercise: Exercise[];
  
}

export const data: PainType[] = [
  {
    id: 1,
    name: "Cuello",
    icon: "/default/Capa_1.svg",
    description: "Selecciona si estás experimentando un dolor en el cuello.",
    link: "issued/neck",
    img: "/default/Rehapp/img.cuello.svg",
    backgroundImage: "/background/backgroundcuello.jpg",

    exercise: [
      {
        url: "/neck1",
        name: "Flexiones profundas",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/flexionesProfundas.Neck.mp4",
        machine: false
      },
      {
        url: "/neck2",
        name: "Rotaciones",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/Rotaciones.Neck.mp4",
        machine: false
      },
      {
        url: "/neck3",
        name: "Encogimiento hombro",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Neck/EncogimientoHombros.Neck.mp4",
        machine: false
      },
    ],
  },
  {
    id: 2,
    name: "Manos",
    icon: "/default/Capa_mano.svg",
    description: "Selecciona si estás experimentando un dolor en las manos.",
    link: "issued/wrist",
    img: "/default/Rehapp/img.manos.png",
    backgroundImage: "/background/eee1463f38a93c246a646e79c495a57b030b133e.jpg",

    exercise: [
      {
        url: "/wrist1",
        name: "Martillo",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/martillo.Wrist.mp4",
        machine: false
      },
      {
        url: "/wrist2",
        name: "Flexo-extensión",
        difficulty: "medio",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/Flexo-extensio%CC%81n.Wrist.mp4",
        machine: false
      },
      {
        url: "/wrist3",
        name: "Estiramiento de muñeca",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Wrist/estiramientoMun%CC%83eeca.Wrist.mp4",
        machine: false
      },
    ],
  },
  {
    id: 3,
    name: "Rodilla",
    icon: "/default/Capa_rodilla.svg",
    description: "Selecciona si estás experimentando un dolor en la rodilla.",
    link: "issued/knee",
    img: "/default/Rehapp/img.rodilla.svg",
    backgroundImage: "/background/bgRodilla.jpg",

    exercise: [
      {
        url: "/knee1",
        name: "Estiramiento Isquiotibiales",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Estiramiento+Isquiotibiales.mp4",
        machine: false
      },
      {
        url: "/knee2",
        name: "Sentadilla Isometrica",
        difficulty: "medio",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Sentadilla+Isometrica.mp4",
        machine: false
      },
      {
        url: "/knee3",
        name: "Ascenso unilateral",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/knee-Exercises/Ascenso+unilateral.mp4",
        machine: false
      },
    ],
  },
  {
    id: 4,
    name: "Espalda B",
    icon: "/default/Capa_1-2.svg",
    description: "Selecciona si estás experimentando un dolor en la espalda baja.",
    link: "issued/upperback",
    img: "/default/Rehapp/img.espaldabaja.svg",
    backgroundImage: "/background/bgEspaldaBaja.jpg",
    exercise: [
      {
        url: "/lowerback1",
        name: "Puente glúteo",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/puente-gluteo.mp4",
        machine: false
      },
      {
        url: "/lowerback2",
        name: "Movilidad lumbo pélvica",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/Movilidad+lumbopelvica.mp4",
        machine: false
      },
      {
        url: "/lowerback3",
        name: "Cobra dinámica",
        difficulty: "medio",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Baja/cobra-dinamica.mp4",
        machine: false
      },
    ],
  },
  {
    id: 5,
    name: "Espalda A",
    icon: "/default/Capa_1-3.svg",
    description: "Selecciona si estás experimentando un dolor en la espalda alta.",
    link: "issued/lowerback",
    img: "/default/Rehapp/img.espalda_alta.svg",
    backgroundImage: "/background/BgEspaldaAlta.jpg",

    exercise: [
      {
        url: "/upperback1",
        name: "Extensión y flexión torácica",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Extension-Flexion-toraxica.mp4",
        machine: false
      },
      {
        url: "/upperback2",
        name: "Trapecio medio",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Trapecio-medio.mp4",
        machine: false
      },
      {
        url: "/upperback",
        name: "Retracción escapular",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Espalda+Alta/Retraccion-escapular.mp4",
        machine: false
      },
    ],
  },
  {
    id: 6,
    name: "Hombro",
    icon: "/default/Capa_hombro.svg",
    description: "Selecciona si estás experimentando un dolor en los hombros.",
    link: "issued/shoulder",
    img: "/default/Rehapp/img.hombro.svg",
    backgroundImage: "/background/bgCodo.jpg",

    exercise: [
      {
        url: "/shoulder1",
        name: "Encogimiento escapular",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Encogimiento-escapular.mp4",
        machine: false
      },
      {
        url: "/shoulder2",
        name: "Movilidad torácica",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Movilidad-toraxica.mp4",
        machine: false
      },
      {
        url: "/shoulder3",
        name: "Circunducción de hombro",
        difficulty: "medio",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/circunduccion-hombro.mp4",
        machine: false
      },
      // {
      //   url: "/shoulder4",
      //   name: "rotaciones externas contra resistencia",
      //   difficulty: "medio",
      //   video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/rotacion-externa-contra-resistencia.mp4",
      //   machine: false
      // },
      // {
      //   url: "/shoulder5",
      //   name: "T- Escapular",
      //   difficulty: "medio",
      //   video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/T-escapular.mp4",
      //   machine: false
      // },
      // {
      //   url: "/shoulder6",
      //   name: "Press Hombro Asistido",
      //   difficulty: "fácil",
      //   video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/Press-hombro+asistido.mp4",
      //   machine: false
      // },
      // {
      //   url: "/shoulder7",
      //   name: "Curl femoral Balón",
      //   difficulty: "medio",
      //   video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Hombros/curl+-femoral-balon.mp4",
      //   machine: false
      // },
    ],
  },
  {
    id: 7,
    name: "Tobillo",
    icon: "/default/Capa_tobillo.svg",
    description: "Selecciona si estás experimentando un dolor en los tobillos.",
    link: "issued/ankle",
    img: "/default/Rehapp/img.tobillo.svg",
    backgroundImage: "/background/bgTobillo.jpg",

    exercise: [
      {
        url: "/ankle1",
        name: "Dorsiflexión",
        difficulty: "medio",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/dorsiflexion.mp4",
        machine: false
      },
      {
        url: "/ankle2",
        name: "Plantiflexión",
        difficulty: "medio",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/platiflexion.mp4",
        machine: false
      },
      {
        url: "/ankle3",
        name: "Movilidad tobillo",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Tobillos/movilidad-tobillo.mp4",
        machine: false
      },
    ],
  },
  {
    id: 8,
    name: "Cadera",
    icon: "/default/Capa_cadera.svg",
    description: "Selecciona si estás experimentando un dolor en la cadera.",
    link: "issued/hip",
    img: "/default/Rehapp/img.cadera.svg",
    backgroundImage: "/background/bgCadera.jpg",

    exercise: [
      {
        url: "/hips1",
        name: "Movilidad de cadera",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/movilidad-cadera.mp4",
        machine: false
      },
      {
        url: "/hips2",
        name: "Flexión y abducción",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/abduccion-flexion-cadera.mp4",
        machine: false
      },
      {
        url: "/hips3",
        name: "Extensión de cadera",
        difficulty: "medio",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Cadera/Extension-cadera.mp4",
        machine: false
      },
    ],
  },
  {
    id: 9,
    name: "Codo",
    icon: "/default/Capa_codo.svg",
    description: "Selecciona si estás experimentando un dolor en los codos.",
    link: "issued/elbow",
    img: "/default/Rehapp/img.codo.svg",
    backgroundImage: "/background/bgCodo.jpg",

    exercise: [
      {
        url: "/elbow1",
        name: "Extensión de muñeca",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Extensio-mun%CC%83eca.mp4",
        machine: false
      },
      {
        url: "/elbow2",
        name: "Flexión de muñeca",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Flexion-mun%CC%83eca.mp4",
        machine: false
      },
      {
        url: "/elbow3",
        name: "Prono-supinación",
        difficulty: "fácil",
        video: "https://freevideos-reapp.s3.us-east-2.amazonaws.com/Codo/Prono-supinacion.mp4",
        machine: false
      },
    ],
  },
];
