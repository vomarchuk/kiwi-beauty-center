export const getPricePerGender = (gender, arr) => {
  const result = arr.reduce((prev, { name, price, _id }) => {
    for (const key in price) {
      if (key === gender && price[key].cost)
        prev.push({
          name,
          _id,
          gender,
          cost: price[key].cost,
          costByCard: price[key].costByCard,
        });
    }
    return prev;
  }, []);
  return result;
};
