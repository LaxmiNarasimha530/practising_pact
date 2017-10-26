import _ from 'lodash';
import React from 'react';
import { Button } from './';
import { makeGetRequest } from '../helpers';

export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.setData = this.setData.bind(this);
    this.url = 'http://localhost:5000/health';
    this.state = {
      data: [],
    };
  }

  setData() {
    makeGetRequest(this.url)
      .then((value) => {
        this.setState({
          number: value.data.length,
          data: value.data,
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
    const data = this.state.data;
    <div>
      {data}
    </div>

    return (
      <div>
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
