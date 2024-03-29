import React from "react";

// Here source is an object with key source (●'◡'●)
var Card = (source) => {
  return (
    <div className="col-4">
      <div className="card" style={{ width: 18+'rem' }}>
        <img
          src={source.source}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-success">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;