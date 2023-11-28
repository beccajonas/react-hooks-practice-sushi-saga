import React from "react";

function Sushi({ sushi, onDelete }) {

  const {id, name, img_url, price} = sushi

  function handleDelete() {
    fetch(`http://localhost:3001/sushis/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'
      }
    })
    onDelete(id)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleDelete}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img_url}
            alt={name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
