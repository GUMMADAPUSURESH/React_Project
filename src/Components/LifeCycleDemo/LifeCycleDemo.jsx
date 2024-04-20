import React from "react";
import LoadingAnimation from "../Animations/LoadingAnimation";

const LazyLoading = React.lazy(() => import("./LazyLoading"));

export class LifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  state = {
    a: 0,
  };

  UNSAFE_componentWillMount = () => {
    console.log("Component Will mount");
  };

  componentDidMount = () => {
    console.log("Component Did Mount");
  };

  shouldComponentUpdate = () => {
    console.log("Should Component Update");
    return true;
  };

  UNSAFE_componentWillUpdate = () => {
    console.log("Component Will Update");
  };

  componentDidUpdate = () => {
    console.log("Component Did update");
  };

  changeState = (e) => {
    this.setState({
      a: this.state.a + 10,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h2>LifeCycleDemo</h2>
        <button className="count-btn" onClick={this.changeState}>
          Change State
        </button>
        <h2>{this.state.a}</h2>
        <React.Suspense fallback={<LoadingAnimation />}>
          <LazyLoading />
        </React.Suspense>
      </div>
    );
  }
}

export default LifeCycleDemo;
