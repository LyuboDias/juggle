import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { requestOptions } from "../apiHeaders";
import { baseUrl } from "../apiUrl";

const RenderCats = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(8);
  const [pageCount, setPageCount] = useState(0);
  const url = `${baseUrl}breeds?`;

  const getData = async () => {
    const res = await axios.get(url, requestOptions);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    // console.log(slice);
    const postData = slice.map((pd) => (
      <div className="App" key={pd.id}>
        <div className="col ">
          <div className="card">
            <div className="img-div">
              {pd.image && (
                <img className="card-img-top" src={pd.image.url}></img>
              )}
            </div>
            <div className="card-body">
              <h5 className="card-title">Breed - {pd.name}</h5>
              {pd.cfa_url && (
                <a href={pd.cfa_url} target="_blank" rel="noreferrer">
                  Learn More!
                </a>
              )}
              <p className="card-text">
                Affection Level -{" "}
                {pd.affection_level >= 4 ? "❤️❤️❤️" : "💔💔💔"}
              </p>

              <p className="card-text">
                Short legs - {pd.short_legs == 0 ? "NO ❌" : "YES 😬"}
              </p>
              <p className="card-text">{pd.description}</p>
            </div>
          </div>
        </div>
      </div>
    ));

    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };

  useEffect(() => {
    getData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;

    setOffset(selectedPage * perPage);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {data}
      </div>
    </div>
  );
};

export default RenderCats;
