import React, {Component, PropTypes} from "react";

// import * as Table from 'reactabular-table';

export default class TableView extends Component {

  constructor(props) {
      super(props);

      this.state = {
          columns: [{property: "c1" }],
          rows: [{c1: "00"}]
      };

  }

    render() {
        return (<h1></h1>
            );
    }
}
