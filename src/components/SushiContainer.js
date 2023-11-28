import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi }) {

  const renderSushi = sushi.map(sushi => {
    <Sushi 
      name={sushi.name}
      img_url={sushi.img_url} 
      price={sushi.price}
      created_at={sushi.created_at} 
    />
  })

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
