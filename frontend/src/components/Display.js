import _ from 'lodash';
import React from 'react';
import { Button } from './';
import { makeGetRequest } from '../helpers';


const ShowExternalApiData = (data) => {
  const basicStructure = (element, i) => (
    <div
      key={i}
    >
      <hr />
      <span
        className="column"
      >
        Title:
        {element.title}
      </span>
      <span
        className="column"
      >
        ID:
        {element.userId}
      </span>
    </div>
  );

  const arrayOfData = _.first(data.data);
  const contents = _.map(arrayOfData, basicStructure);

  return (
    <div>{contents}</div>
  );
};

const ShowData = data => (
  <div>
    <hr />
    {JSON.stringify(data)}
  </div>
);

export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.clearData = this.clearData.bind(this);
    this.getExampleData = this.getExampleData.bind(this);
    this.url = 'http://localhost:5000/health';
    this.externalApi = 'https://jsonplaceholder.typicode.com/posts';
    this.state = {
      localApiData: [],
      externalApiData: [],
    };
  }

  getData() {
    makeGetRequest(this.url)
      .then((value) => {
        this.setState({
          localApiData: [value.data],
        });
      });
  }

  getExampleData() {
    makeGetRequest(this.externalApi)
      .then((value) => {
        this.setState({
          externalApiData: [value.data],
        });
      });
  }

  clearData() {
    this.setState({
      localApiData: [],
      externalApiData: [],
    });
  }

  render() {
    <div>
      {this.state.data}
    </div>;

    return (
      <div>
        <Button
          label="Get data from local API"
          onclick={this.getData}
        />
        { 
          // <Button
          //   label="Get external data"
          //   onclick={this.getExampleData}
          // />
        }
        <br />
        <br />
        <Button
          label="Clear Data"
          onclick={this.clearData}
        />
        <ShowData data={this.state.localApiData} />
        <ShowExternalApiData data={this.state.externalApiData} />
      </div>
    );
  }
}

export { Display as default };
