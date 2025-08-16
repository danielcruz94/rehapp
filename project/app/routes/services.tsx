import { useParams, Link } from "react-router";
import { data, type PainType } from "../../data";
import styles from "../componentes/styles/exercise.css?url";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const LightningIcon = () => (
  <img src="/icons/Vector.svg" alt="rayoicon" className="flash" />
);

// Iconos SVG para diferentes tipos de ejercicios
const StrengthIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
  </svg>
);

const FlexibilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const CardioIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const BalanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const RehabIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
  </svg>
);

const getDifficultyLevel = (difficulty: string): number => {
  const lowerCaseDifficulty = difficulty.toLowerCase();
  if (lowerCaseDifficulty === 'fácil') return 1;
  if (lowerCaseDifficulty === 'medio') return 2;
  if (lowerCaseDifficulty === 'difícil') return 3;
  return 1;
};

// Función para obtener el icono apropiado según el tipo de ejercicio
const getExerciseIcon = (exerciseName: string) => {
  const name = exerciseName.toLowerCase();
  
  if (name.includes('fuerza') || name.includes('fortalec') || name.includes('resistencia')) {
    return <StrengthIcon />;
  } else if (name.includes('estir') || name.includes('flexibil') || name.includes('movilidad')) {
    return <FlexibilityIcon />;
  } else if (name.includes('cardio') || name.includes('aeróbic') || name.includes('correr')) {
    return <CardioIcon />;
  } else if (name.includes('equilibrio') || name.includes('balance') || name.includes('estabilidad')) {
    return <BalanceIcon />;
  } else {
    return <RehabIcon />; // Icono por defecto para rehabilitación
  }
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
      linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.91)),
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
                <div className="exercise-content">
                  <div className="exercise-info">
                    <div className="exercise-icon">
                      {getExerciseIcon(exerciseItem.name)}
                    </div>
                    <span className="exercise-name">{exerciseItem.name}</span>
                  </div>
                  <div className="intensity-level">
                    {Array.from({ length: getDifficultyLevel(exerciseItem.difficulty) }).map((_, index) => (
                      <LightningIcon key={index} />
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}