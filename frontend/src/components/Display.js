import _ from 'lodash';
import React from 'react';
import { Button } from './';
import { makeGetRequest } from '../helpers';

export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.setData = this.setData.bind(this);
    this.url = 'https://jsonplaceholder.typicode.com/posts';
    this.state = {
      on: false,
      counter: 0,
      data: [],
    };
  }

  setData() {
    makeGetRequest(this.url)
      .then((value) => {
        this.setState({
          number: value.data.length,
          data: value.data,
          on: !this.state.on,
        });
      });
  }

  click() {
    this.setState((this.state, {
      on: !this.state.on,
      counter: this.state.counter + 1,
    }));
  }

  render() {
    const renderList = this.state.data.map((val, index) => (
      <li
        key={`datalist_${index}`}
      >{JSON.stringify(val)}
      </li>
    ));

    const renderIDs = this.state.data.map(val => (
      <li />
    ));

    let value;
    if (this.state.on) {
      value = 'Hello';
    } else {
      value = 'Goodbye';
    }
    const vata = this.state.number;

    return (
      <div>
        <p>
          Length of data: {vata}
        </p>
        <ul>
          {renderList}
        </ul>
        <Button
          label="Get Data"
          onclick={this.setData}
        />
        <div>
          <hr />
          {JSON.stringify(this.state.data)}
        </div>
      </div>
    );
  }
}

export { Display as default };
