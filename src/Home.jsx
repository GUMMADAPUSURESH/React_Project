import React from "react";
import movieData from "./Json/MovieData.json";
import Comment from "./Components/Comment/Comment";
import Index from "./Components/Netflix/Index";
import EventHandling from "./Components/EventHandling/EventHandling";
import DynamicFormHandling from "./Components/Hooks/useState/useState-DynamicFormHandling";

const InnerComponent = () => {
  return <h2>I am from Inner Component</h2>;
};

const Home = () => {
  //Javascript variable holding the HTML tag
  const element = <h3>Hello from Element</h3>;

  // Javascrpit function to return value from variable
  const testFunction = () => {
    const element = "function";
    return `Hello From ${element}`;
  };

  return (
    <div>
      <h1>Welcome to React from Khushbu</h1>
      <h2>Hello from App</h2>
      <DynamicFormHandling />
      <InnerComponent />
      {element}
      <h1>{testFunction()}</h1>
      <EventHandling />
      <section className="movie-container">
        {/* Accessing data from json file using map */}
        {movieData.map((eachMovie) => {
          //Destructuring props
          const { id, movieBanner, movieTitle, link } = eachMovie;
          //Rendering the component at runtime
          //Passing props
          return (
            <Index
              key={id}
              moviebanner={movieBanner}
              movietitle={movieTitle}
              link={link}
            />
          );
        })}
      </section>
      <Comment />
    </div>
  );
};

export default Home;
