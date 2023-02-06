import React, { useState } from "react";

function HogCard({ name, specialty, greased, weight, medal, image }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(isClicked => !isClicked);
  }
  console.log(isClicked);

  return (
    <div className="ui card eight wide column pigTile" onClick={handleClick}>
      <h2>{name}</h2>
      <img src={image} />

      {/* added ternary for details.. can i make a variable for this outside and 
            call it in the ternary instead? */}

      {isClicked ? (
        <div>
          <li>Specialty: {specialty}</li>
          <li>Weight: {weight} lbs</li>
          <li>{greased ? "Greased" : "Not Greased"}</li>
          <li>Highest Medal Achieved: {medal.toUpperCase()}</li>
        </div>
      ) : null}
    </div>
  );
}

export default HogCard;
