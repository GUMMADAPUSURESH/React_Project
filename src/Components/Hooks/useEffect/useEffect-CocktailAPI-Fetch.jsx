import React, { useState, useEffect } from "react";
import LoadingAnimation from "../../Animations/LoadingAnimation";

const DrinksURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailAPIFetch = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const [isLoading, setIsLoading] = useState(false);

  const cocktailAPIFetch = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const { drinks } = await response.json();
      setDrinksData(drinks);
      setIsError({ status: false, msg: "" });
      setIsLoading(false);
      if (drinks === null) throw Error("No Data Found");
    } catch (error) {
      setIsLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong",
      });
    }
  };

  useEffect(() => {
    const correctedURL = `${DrinksURL}${searchInput}`;
    cocktailAPIFetch(correctedURL);
  }, [searchInput]);

  return (
    <>
      <form style={{ margin: "10px" }} onSubmit={(e) => e.preventDefault()}>
        {searchInput === "" ? (
          <input
            className="todo-input"
            type="text"
            name="search"
            id="search"
            placeholder="Search something..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        ) : (
          <input
            className="todo-input"
            style={{ borderColor: "green" }}
            type="text"
            name="search"
            id="search"
            placeholder="Search something..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        )}
      </form>
      <hr />
      {isLoading && <LoadingAnimation />}
      {!isLoading && (
        <>
          {isError.status === true ? (
            <h3 className="error">{isError.msg}</h3>
          ) : (
            <ul className="drinks-container">
              {drinksData.map((eachDrink) => {
                const { idDrink, strDrink, strDrinkThumb } = eachDrink;
                return (
                  <li className="drinks" key={idDrink}>
                    <div className="drink">
                      <img src={strDrinkThumb} alt={strDrink} />
                      <h3>{strDrink}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
      <hr />
    </>
  );
};

export default CocktailAPIFetch;
