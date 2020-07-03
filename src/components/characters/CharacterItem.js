import React from "react";

import "./characters.style.css";

const CharacterItem = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={item.img} alt="" />
          </div>
          <div className="card-back">
            <h3 className="info">{item.name}</h3>
            <div className="details">
              <h4 className="nickname">
                <strong>Nickname: </strong>
                {item.nickname}
              </h4>
              <div className="occupation">
                ~Occupation~{" "}
                {item.occupation.map((job, i) => {
                  return (
                    <h5 key={i} className="job">
                      {job}
                    </h5>
                  );
                })}
              </div>
              <h4 className="status info">
                <strong>Status: </strong>
                {item.status}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
