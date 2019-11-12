import React from 'react';
import { EDIT_ME } from './_editMe';

class ClassComponent extends React.Component {
  constructor() {
    super();

    // 这里为什么会执行两次？
    // 可以发现，一旦文件发生修改，两次的结果会不一致，一次是老的，一次新的，且新的在前
    // this is class component constructor 2
    // this is class component constructor 1
    console.log('this is class component constructor 2');
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Class Component</legend>
          <h1>class Component 3</h1>
        </fieldset>
      </div>
    );
  }
}

export default ClassComponent;
