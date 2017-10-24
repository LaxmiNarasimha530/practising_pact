import _ from 'lodash';
import React from 'react';
import { Button } from './';
import { makeGetRequest } from '../helpers';


export class Display extends React.Component {

  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
    this.setData = this.setData.bind(this)
    this.listData = this.listData.bind(this)
    this.url = 'https://jsonplaceholder.typicode.com/posts';
    this.state = {
      on: false,
      counter: 0,
      data: []
    };
  }
  
  setData() {
    makeGetRequest(this.url)
    .then((value) => {
      console.log(value.data.length);
      this.setState({
        number: value.data.length,
        data: value.data,
        on: this.state.on ? false : true
      });
    });
  }

  click() {
    console.log('this is ahoola');
    this.setState((this.state, {
      on: this.state.on ? false : true,
      counter: this.state.counter + 1
    }));
  }

  listData() {
    this.state.data.map((val) => {
      console.log(val);
    });
  }


  render() {
    const renderList = this.state.data.map((val, index) => (
      <li
        key={`datalist_${index}`}
      >{JSON.stringify(val)}</li>
    ));

    const renderIDs = this.state.data.map((val) => (
      <li></li>
    ));

    const numbers = [1, 2, 3, 4, 5]; 
    const listItems = numbers.map((number, index) => (
      <li key={index}>{number}</li>
    ));

    let value;
    if (this.state.on) {
      value = 'Hello'; 
    } else {
      value = 'Goodbye';
    };
    let vata = this.state.number;

    return (
      <div>
        <h1>{value}</h1>
        <Button 
          label={'Counter'}
          onclick={this.click}
        />
        <p>
          Length of data: {vata}
        </p>
        <hr />
        VATA: {vata}
        <hr />
        <ul>
          <li>This</li>
          <li>{this.state.counter}</li>
        </ul>
        <ul>
          {listItems}
        </ul>
        <ul>
          {renderList}
        </ul>
        <Button
          label={'Get Data'}
          onclick={this.setData}
        ></Button>
        <div>
          <Button
            label={'Log data'}
            onclick={this.listData}
          />
          <hr />
          {JSON.stringify(this.state.data)}
        </div>
      </div>
    );
  }
}

export { Display as default };
