/****** Modules **********/
import { Link } from "react-router-dom";
/***** Logo *************/
import logo from "../../media/logo/logoheader.webp";
import "../../styles/header.css";

function Header() {
  return (
    <section>
      <div>
        <img src={logo} alt="" />
        <h1 id="asso-name">Lévriers sans Frontières</h1>
        <h5 id="asso-qualification">
          Association de défense et de sauvetage des lévriers Galgos d'Espagne
        </h5>
      </div>
      <ul id="nav-main">
        <li id="home">
          <Link to={"/"}>Accueil</Link>
        </li>
        <li id="association">
          <Link to={"/association"}>L'Association</Link>
        </li>
        <li className="chiens">
          <Link to={"/chiens/france"}>Chiens en France </Link>
        </li>
        <li className="chiens">
          <Link to={"/chiens/espagne"}>Chiens en Espagne</Link>
        </li>
      </ul>
    </section>
  );
}
export default Header;
