import React from "react";

function MoreButton({ handlePagination }) {

  function handleClick() {
    console.log('more sushi');
    handlePagination()
  }
  
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
