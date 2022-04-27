function Chien({ chien }) {
  return (
    <li className="dog-detail" onClick={() => console.log("coucou")}>
      <a>
        <div>
          <img src={chien.imageUrl} alt="" />
          <p>{chien.nom}</p>
        </div>
      </a>
    </li>
  );
}
export default Chien;
