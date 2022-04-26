function Chien({ chien }) {
  return (
    <div>
      <p>{chien.nom}</p>
      <img src={chien.imageUrl} alt="" />
    </div>
  );
}
export default Chien;
