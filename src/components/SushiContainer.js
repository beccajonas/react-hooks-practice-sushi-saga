import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi, onDelete, handlePagination }) {

  const renderSushi = sushi.map(sushi => 
    <Sushi key={sushi.id} sushi={sushi} onDelete={onDelete} />
  )

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton handlePagination={handlePagination} />
    </div>
  );
}

export default SushiContainer;
