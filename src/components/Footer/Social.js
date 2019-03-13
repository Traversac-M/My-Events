import React from "react";

export default function Social() {
  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
      <div className="footer-widget ">
        <div className="footer-title">Social</div>
        <ul className="list-unstyled">
          <li>
            <a href="http://facebook.com">
              Facebook <span className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="http://twitter.com">
              Twitter <span className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="http://google.com">
              Google + <span className="fa fa-google-plus" />
            </a>
          </li>
          <li>
            <a href="http://linkedin.com">
              LinkedIn <span className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
