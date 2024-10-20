import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const Pagination = (props) => {
  var { pageCount, offset, onPageChange, perPage } = props;

  console.log(props);
  // const [offset, setoffset] = useState(0);
  const handlePageClick = (data) => {
    // console.log(data);
    // console.log("onPageChange", data);
    let selected = data.selected;
    // console.log(selected);
    offset = Math.ceil(selected * perPage);
    onPageChange(offset);

    // getCustomersData();
  };
  const currentPage = Math.round(offset / perPage);
  return (
    <div>
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        containerClassName="pagination justify-content-end pagination-sm m-2 "
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        // hrefBuilder={(page, pageCount, selected) =>
        //   page >= 1 && page <= pageCount ? `/page/${page}` : "#"
        // }
        hrefAllControls
        forcePage={currentPage}
        // onClick={(clickEvent) => {
        //   console.log("onClick", clickEvent);
        // }}
      />
    </div>
  );
};

export default Pagination;
