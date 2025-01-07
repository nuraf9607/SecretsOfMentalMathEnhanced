export const fetchMenulist = function()  {
  return fetch("/src/Data/MenuList.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
