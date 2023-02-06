import axios from "axios";

import { DEFAULT_URL } from "../Constants";
axios.defaults.baseURL = DEFAULT_URL;

export const ServiceSetup = () => {
  const fetchCatregories = async () => {
    const { data } = await axios.get("/api/category");
    const result = data?.data;
    console.log(result);

    return result;
  };
  fetchCatregories();

  return (
    <div>
      <div style={{ color: "black" }}>
        <p>I'm service setup PAGE</p>
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
      </div>
    </div>
  );
};
