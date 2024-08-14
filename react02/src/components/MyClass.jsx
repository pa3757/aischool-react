import React, { Component } from "react";

export class MyClass extends Component {
  // Lifecycle 함수
  // => 컴포넌트 생명주기에 따라 실행되는 함수
  // 1. componentDidMount()
  // => 컴포넌트 렌더링 직후에 실행되는 함수
  componentDidMount() {
    console.log("Mount단계");
  }
  // 2. componentDidUpdate()
  // => 컴포넌트 재렌더링 직후에 실행되는 함수
  componentDidUpdate() {
    console.log("Update단계");
  }
  state = {
    num: 0,
  };

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default MyClass;
