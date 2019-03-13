import React from "react";
import Moment from "react-moment";
import noImage from "../Images/noImage.png";

export default function EventList(props) {
  const imageEvent = props.event.logo ? (
    <img src={props.event.logo.url} alt={props.event.name.text} />
  ) : (
    <img className="defaultImg" src={noImage} alt="Not found" />
  );

  const descEvent = props.getCategoryName.get(props.event.category_id) ? (
    <h4 className="card-title col-lg-12 mb-3">
      {props.getCategoryName.get(props.event.category_id)}
    </h4>
  ) : (
    <h4 className="card-title col-lg-12 mb-3">Unknown</h4>
  );

  const descNameEvent = props.event.description ? (
    <h5 className="card-title">{props.event.name.text}</h5>
  ) : (
    <h5 className="card-title">Undefined name</h5>
  );

  const descTextEvent = props.event.description.text ? (
    <p className="card-text cardScrolling">{props.event.description.text}</p>
  ) : (
    <p className="card-text cardScrolling">There is no description for this Event</p>
  );

  const showModal = props.event ? (
    <div>
      <a href="#myModal" role="button" className="btn btn-pink mt-2" data-toggle="modal">
        See more
      </a>

      <div
        value={props.event.id}
        className="modal"
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-size" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.event.name.text}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body p-4" id="result">
              <div className="row">
                <div className="cardScrolling">{props.event.description.text}</div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-pink" data-dismiss="modal">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="card text-center mb-3 mt-3 col-md-6 col-xl-4">
      {imageEvent}

      <div className="card-header">
        <h4 className="card-title mt-2">{props.event.start.timezone}</h4>
      </div>

      <div className="card-body">
        {descNameEvent}
        {descTextEvent}
      </div>

      <div className="card-footer">
        {descEvent}
        <Moment format="D MMM YYYY \at HH:mm">{props.event.start.local}</Moment>
        {showModal}
      </div>
    </div>
  );
}
