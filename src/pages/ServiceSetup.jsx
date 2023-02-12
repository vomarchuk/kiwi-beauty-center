import { useState, useEffect } from "react";
import axios from "axios";

import { DEFAULT_URL } from "../Constants";

// import AddCategory from '../components/Modal/AddCategory';
axios.defaults.baseURL = DEFAULT_URL;

export const ServiceSetup = () => {
  // const [categories, setCategories] = useState();
  const [services, setServices] = useState();

  // const fetchCategories = async () => {
  //   const { data } = await axios.get('/api/category');
  //   const result = data?.data;
  //   return result;
  // };
  const fetchServicesByCategoryId = async (id) => {
    const { data } = await axios.get(`/api/services/${id}`);
    const result = data?.data;
    return result;
  };
  useEffect(() => {
    // fetchCategories().then((response) => setCategories(response));
    fetchServicesByCategoryId("62015a6a064b3770e9537426").then((response) =>
      setServices(response)
    );
  }, []);

  return (
    <>
      <header style={style.main}>
        <h1>HEADER</h1>
      </header>
      <main style={style.main}>
        <table style={style.table}>
          <caption>Manicure</caption>

          <thead style={style.thead}>
            <tr>
              <th rowSpan="2">Zabieg</th>
              <th colSpan="2">Cena</th>
              <th></th>
              <th colSpan="2">
                Z kartą <span>Kiwi Beauty Center</span>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {services &&
              services.map((service) => {
                return (
                  <tr key={service["_id"]} className="table-line">
                    <td>{service.name} </td>
                    <td colSpan="2">{service.price.woman.cost}zł</td>
                    <td></td>
                    <td className="karta-kiwi" colSpan="2">
                      {service.price.woman.costByCart}zł
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "tomato",
            color: "black",
          }}
          type="button"
        >
          <a href="/">BACK</a>
        </button>
      </main>
    </>
  );
};

const style = {
  main: {
    color: "black",
  },
  table: {
    paddingTop: "10px",
    borderSpace: "0",
  },
  thead: {
    backgroundColor: "#ccc",
    color: "black",
    fontSize: "15px",
    width: "auto",
  },
};
