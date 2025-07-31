import styles from "../componentes/styles/selection.css?url";
import { data } from "../../data";
import { Link } from "react-router";


export function links() {
  return [{ rel: "stylesheet", href: styles }];
}



export default function PainSelection() {
  return (
    <div className="selection-page">
      <header className="selection-header">
        <div className="header-info">
          <img src="default/Group 1.svg" alt="Rehapp Logo" className="header-logo" />
          <div>
            <h1>¡Bienvenido/a!</h1>
            <span className="subtitle">de vuelta a tu mejor versión</span>
          </div>
        </div>

    
      </header>

      <main className="selection-main">
        <h2>¿Qué tipo de dolencia tienes?</h2>

        <ul className="pain-options-list">
          {data.map((option) => (
            <li key={option.name} className="pain-option-item">
              {/* 2. Cambia la etiqueta <a> por <Link> y el atributo href por to */}
              <Link to={`/issued/${String(option.id)}`} className="option-card">
                <div className="option-content">
                  <img src={option.icon} alt="" className="option-icon" />
                  <span>{option.name}</span>
                </div>
                <div className="option-arrow">
                <svg 
                    className="icono-flecha-derecha"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                >
                    <title>Flecha Derecha</title>
                    <circle className="linea" cx="12" cy="12" r="11" />
                    <path 
                        className="linea"
                        d="M10 8 L 14 12 L 10 16" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                </div>
              </Link>
              <p className="option-description">{option.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}