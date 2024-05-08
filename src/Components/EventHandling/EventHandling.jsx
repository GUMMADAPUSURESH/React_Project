import "./EventHandling.css";

const EventHandling = () => {
  const eventHandler = (event, name) => {
    console.log("From Event Handler", event, name);
    alert("Event Handler Invoked");
  };

  return (
    <button className="button" onClick={(e) => eventHandler(e, "Suresh")}>
      Click me
    </button>
  );
};

export default EventHandling;
