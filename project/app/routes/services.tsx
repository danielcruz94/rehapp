
import { useParams,Link}from "react-router";;
import { data, type PainType } from "../../data"; 
import styles from "../componentes/styles/exercise.css?url"; 


export function links() {
  return [{ rel: "stylesheet", href: styles }];
}



const LightningIcon = () => (
 <img src="/icons/Vector.svg" alt="rayoicon" className="flash" />
);



const getDifficultyLevel = (difficulty: string): number => {
  const lowerCaseDifficulty = difficulty.toLowerCase();
  if (lowerCaseDifficulty === 'fácil') return 1;
  if (lowerCaseDifficulty === 'medio') return 2;
  if (lowerCaseDifficulty === 'difícil') return 3;
  return 1; 
};

export default function service() {
  const { id } = useParams();

  const item: PainType | undefined = data.find((d) => d.id === +id!);

  if (!item) {
    return (
      <div className="page-container error-container">
        <h1>Error 404</h1>
        <p>La zona de dolor con ID "{id}" no fue encontrada.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url(${item.backgroundImage})
    `
  };

  return (
    <div className="exercise-page" style={backgroundStyle}>
      
      <div className="card-content-wrapper">

        <header className="card-header">
          <div className="header-title">
            <img src={item.icon} alt={`${item.name} icon`} />
            <h2>{item.name}</h2>
            <Link to={`/issued`}>
            <svg 
            className="icono-flecha-arriba"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="39px" 
            height="39px"
        >
            <title>Flecha hacia arriba</title>
            <circle className="circulo" cx="12" cy="12" r="12"/>
            <path 
                className="flecha"
                d="M7 14 l5-5 5 5" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none" 
            />
        </svg>
            </Link>
          </div>
        </header>

        <div className="diagram-container">
          <img src={item.img} alt={`${item.name} diagram`} />
        </div>
        
        <ul className="exercise-list">
          {item.exercise.map((exerciseItem) => (
            <li key={exerciseItem.url} className="exercise-item">
              <Link to={exerciseItem.url}>
                <span>{exerciseItem.name}</span>
                <div className="intensity-level">
                  {Array.from({ length: getDifficultyLevel(exerciseItem.difficulty) }).map((_, index) => (
                    <LightningIcon key={index} />
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
