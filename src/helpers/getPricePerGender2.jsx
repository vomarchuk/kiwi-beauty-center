export const getPricePerGender2 = (arr) => {
  const result = arr.reduce(
    (prev, { name, price, _id }) => {
      for (const key in price) {
        if (price[key].cost && price[key].costByCard) {
          key === "man"
            ? prev.man.push({
                _id,
                name,
                cost: price[key].cost,
                costByCard: price[key].costByCard,
              })
            : prev.woman.push({
                _id,
                name,
                cost: price[key].cost,
                costByCard: price[key].costByCard,
              });
        }
      }
      return prev;
    },
    { woman: [], man: [] }
  );
  return result;
};
