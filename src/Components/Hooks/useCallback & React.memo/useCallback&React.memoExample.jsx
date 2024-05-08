import React from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

const UseCallBackExample = () => {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(7000);

  const incrementAge = React.useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = React.useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div id="useCallback">
      <Title />
      <Count text="Age" value={age} />
      <Button clickHandler={incrementAge}>Increment Age</Button>
      <Count text="Salary" value={salary} />
      <Button clickHandler={incrementSalary}>Increment Salary</Button>
      <hr></hr>
    </div>
  );
};

export default UseCallBackExample;
