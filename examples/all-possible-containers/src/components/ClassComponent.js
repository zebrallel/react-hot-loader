import React from 'react';
import { EDIT_ME } from './_editMe';

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 100,
    };

    // 这里为什么会执行两次？
    // 可以发现，一旦文件发生修改，两次的结果会不一致，一次是老的，一次新的，且新的在前
    // this is class component constructor 2
    // this is class component constructor 1
    console.log('this is class component constructor 3');
  }
  componentWillReceiveProps(prev, next) {
    console.log('will receive props');
    console.log(prev, next);
  }
  componentWillUpdate() {
    console.log('will update');
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Class Component 5</legend>
          <h3>count: {this.state.count}</h3>
          <button
            onClick={() => {
              this.setState({
                count: 200,
              });
            }}
          >
            click me
          </button>
        </fieldset>
      </div>
    );
  }
}

export default ClassComponent;
