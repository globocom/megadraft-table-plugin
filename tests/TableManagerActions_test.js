/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

import {mount} from "enzyme";
import chai from "chai";

import {TableManagerActions} from "../src/TableManagerActions";

const expect = chai.expect;

describe("TableManagerActions", function() {

  it("should have the correct number of rows when passed on constructor", function() {
    const initialRows = [["A1", "B1"], ["A2", "B2"]];
    const tableManagerActions = mount(<TableManagerActions rows={initialRows} />).instance();
    expect(tableManagerActions.props.rows).to.be.deep.equals(initialRows);
  });
});
