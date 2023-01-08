import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Table.css";

export default function Table() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      console.log(res);
      console.log(res.data.company);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
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
