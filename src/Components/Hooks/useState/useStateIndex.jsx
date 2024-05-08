import React from "react";
import Count from "./useState-Count";
import ObjectDataChange from "./useState-advanced";
import ConditionalUseState from "./useState-ConditionalRendering";
import FormHandling from "./useState-formHandling";
import Todo from "./useState-Todo";
import TodoModified from "./useState-Todo-Modified";

const Index = () => {
  return (
    <div>
      <Count />
      <ObjectDataChange />
      <ConditionalUseState />
      <FormHandling />
      <Todo />
      <TodoModified />
    </div>
  );
};

export default Index;
