import axios from "axios";

const getAllReviews = async () => {
  const result = await axios(
    "https://kiwi-rest-api.herokuapp.com/api/reviews/"
  );
  return result?.data?.data;
};

export default getAllReviews;
