import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rehapp" },
    { name: "we are proud", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
 
    <div className="home-page">
      
      <div  className="container">
        <img 
          src="/default/imagen1.png" 
          alt="Rehapp" 
          className="logo"
        />
       <h2 className="slogan">De vuelta a tu mejor versión</h2>
      </div>
   
   
      <Link to="/issued" className="buttongreen">
        Saber más
      </Link>
    </div>
  );
}
