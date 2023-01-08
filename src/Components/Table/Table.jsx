import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Table.css";

export default function Table() {
  const [data, setData] = useState([]);
  const [elements, setElements] = useState([])
  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      const thead = res.data[0];
      console.log(Object.keys(thead));
      const obj = Object.keys(thead);
      console.log(obj);
      obj.map((key) => [key])
      setElements(obj)
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <table>
        <thead>
          {elements.map((e) => {
            return <th>{e}</th>;
          })}
        </thead>
        {data.map((item) => {
          return (
            <tbody>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>{item.company.name}</td>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
