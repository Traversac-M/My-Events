import React from "react";

export default function Filter(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="card offset-lg-3 col-lg-6 col-md-12 mt-3 mb-2">
          <h3 className="p-2">Filters</h3>

          <form onSubmit={props.onSubmit}>
            <select onChange={props.handleSelect} className="form-control">
              <option disable="true" hidden>
                Please select a category
              </option>
              {props.categoryList}
            </select>

            <input
              onChange={props.handleInput}
              className="form-control mt-2 mb-2"
              type="text"
              placeholder="Country / City"
            />

            <div className="font-weight-bold float-right mb-2 p-3">
              <button className="btn btn-outline-pink" type="submit">
                Filter <span className="fa fa-arrow-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
