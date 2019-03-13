import React from "react";

export default function Newsletter(props) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
      <div className="footer-widget ">
        <h3 className="footer-title">Newsletter</h3>
        <form onSubmit={props.onSubmit}>
          <div className="newsletter-form">
            <input
              onChange={props.onChange}
              className="form-control"
              placeholder="Enter Your Email address"
              type="text"
            />
            <button className="btn btn-pink btn-block" type="submit">
              Subscribe for free !
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
