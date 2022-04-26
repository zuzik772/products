import { useState, useEffect } from "react";
export default function Fetcher() {
  console.log("fetcher was here");
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products?start=" + count);
      const data = await res.json();
      setAllData((oldData) => oldData.concat(data));
    }
    getData();
  }, [count]);
  return (
    <div>
      <article>
        {allData.map((item) => (
          <Item {...item} />
        ))}
      </article>
      <button onClick={addItems}>Add 10 more...</button>
    </div>
  );

  function addItems() {
    setCount((old) => old + 10);
  }
  function Item(props) {
    return (
      <div>
        <h4>{props.usagetype}</h4>
        <p>{props.brandname}</p>
        <p>{props.productdisplayname}</p>
        <p>{props.price}kr</p>
      </div>
    );
  }
}
