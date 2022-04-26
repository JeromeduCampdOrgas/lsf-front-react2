import Chien from "./Chien";
import "../../../styles/chienFrance.css";
import ChiensContext from "../../../context/ChiensContext";
import { useContext } from "react";

function ChienFrance() {
  const { chiens } = useContext(ChiensContext);

  return (
    <section>
      <h1>Chiens en France</h1>
      <div className="dogs-list">
        {chiens.map((chien) => (
          <div className="dog" key={chien.id}>
            <Chien chien={chien} />
          </div>
        ))}
      </div>
    </section>
  );
}
export default ChienFrance;
