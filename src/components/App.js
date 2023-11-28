import React, { useState, useEffect }from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const [sushi, setSushi] = useState([])
const [page, setPage] = useState(0)

  useEffect( () => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushi(data.slice(page, page + 4)))
  }, [page])

  function onDelete(id) {
    const filteredSushi = sushi.filter(item => {
      return item.id !== id
    })
    setSushi(filteredSushi)
  }

  function handlePagination() {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onDelete={onDelete} handlePagination={handlePagination} />
      <Table />
    </div>
  );
}

export default App;
