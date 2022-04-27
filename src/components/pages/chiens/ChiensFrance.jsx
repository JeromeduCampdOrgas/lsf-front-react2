import Chien from "./Chien";
import "../../../styles/chienFrance.css";
import ChiensContext from "../../../context/ChiensContext";
import { useState, useContext, useEffect } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 4;

function ChienFrance() {
  const { chiens } = useContext(ChiensContext);

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    console.log(("selected page: ", selectedPage));
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  //console.log("offset: ", offset);

  const currentPageData = chiens
    .slice(offset, offset + PER_PAGE)
    .map((chien, index) => (
      <div className="dog" key={index}>
        <Chien chien={chien} />
      </div>
    ));
  //console.log("currentPageData: ", currentPageData);
  const pageCount = Math.ceil(chiens.length / PER_PAGE);
  /******* pagination***** */

  return (
    <section>
      <h1>Chiens en France</h1>
      <div id="dogs-list">{currentPageData}</div>
      <ReactPaginate
        previousLabel={"<- Previous"}
        nextLabel={"Next ->"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link__disabled"}
        activeClassName={"pagination__link__active"}
      />
    </section>
  );
}
export default ChienFrance;
