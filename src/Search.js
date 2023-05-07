import React, { useState } from "react";
import SearchButton from "./SearchButton";
 import SearchResults from "./SearchResults";
const Search = () => {
  const [searchData, SetsearchData] = useState('')
  const searchhandler = (e) => {
    SetsearchData(e.target.value)
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchData}
                onChange={searchhandler}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
      <SearchResults searchData={searchData}/>
    </div>
  );
};

export default Search;
