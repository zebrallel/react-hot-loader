import React from 'react';
import { EDIT_ME } from './_editMe';

class ClassComponent extends React.Component {
  constructor() {
    super();

    console.log('this is class component constructor 3');
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
