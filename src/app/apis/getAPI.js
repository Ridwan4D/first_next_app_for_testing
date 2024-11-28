export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

// export const getMeals = async (search) => {
//   const res = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
//   );
//   const data = await res.json();
//   return data;
// };
