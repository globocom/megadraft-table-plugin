/*
 * Copyright (c) 2016, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import TestUtils from "react-addons-test-utils";
import * as Table from "reactabular-table";
import {unmountComponentAtNode} from "react-dom";

import {mount} from "enzyme";
import chai from "chai";
import sinon from "sinon";

import TableView from "../src/TableView";

const expect = chai.expect;

describe("TableView", function() {
    it("should have one column", function() {
      const rows = [["00"]];
      let tableView = mount(<TableView rows={rows}/>);
      expect(tableView.instance().state.columns.length).to.be.equal(rows[0].length);
    });

    it("should have one row", function() {
      const rows = [["00"]];
      let tableView = mount(<TableView rows={rows}/>);
      expect(tableView.instance().state.rows.length).to.be.equal(rows[0].length);
    });
})
