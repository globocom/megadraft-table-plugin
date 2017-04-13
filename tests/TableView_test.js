/*
 * Copyright (c) 2016, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import TestUtils from "react-addons-test-utils";
import * as Table from "reactabular-table";

import {mount} from "enzyme";
import chai from "chai";

import TableView from "../src/TableView";

const expect = chai.expect;

describe("TableView", function() {

  const rowsWithOneCell = [["00"]];
  const rowsWithTwoCells = [["00"],["10"]];
  const twoRowsWithTwoColumns = [["00", "01"], ["10", "11"]];
  const firstColumnName = "c0";

  const createTable = function(rows){
    return mount(<TableView rows={rows}/>).instance();
  };

  const expectCellsValueOnRightPosition = function(tableView, rows) {
    let columns = tableView.state.columns;
    let propertyName;
    for(let rowIndex=0; rowIndex<rows.length ;rowIndex++) {
      for(let columnIndex=0; columnIndex<rows[rowIndex].length; columnIndex++) {
        propertyName = columns[columnIndex].property;
        expect(tableView.state.rows[rowIndex][propertyName]).to.be.equal(rows[rowIndex][columnIndex]);
      }
    }
  };

  it("should have one cell value", function() {
    let tableView = createTable(rowsWithOneCell);
    expectCellsValueOnRightPosition(tableView, rowsWithOneCell);
  });

  it("should have two rows with one column", function() {
    let tableView = createTable(rowsWithTwoCells);
    expectCellsValueOnRightPosition(tableView, rowsWithTwoCells);
    expect(tableView.state.columns).to.have.lengthOf(rowsWithTwoCells[0].length);
  });

  it("should have two rows and two columns", function() {
    let tableView = createTable(twoRowsWithTwoColumns);
    expectCellsValueOnRightPosition(tableView, twoRowsWithTwoColumns);
  });

  it("should have the correct property name", function() {
    let tableView = createTable(twoRowsWithTwoColumns);
    expect(tableView.buildPropertyName(0)).to.be.equal(tableView.state.columns[0].property);
  });

  it("should have column property value with same name as row key", function() {
    const propertyName = firstColumnName;
    let tableView = createTable(rowsWithOneCell);
    expect(tableView.state.rows[0]).to.have.property(propertyName);
    expect(tableView.state.columns[0].property).to.be.equal(propertyName);
  });

  it("should have correct ids for two rows", function() {
    let tableView = createTable(rowsWithTwoCells);
    expect(tableView.buildRowId(firstColumnName, 0, 0)).to.be.equal(tableView.state.rows[0].id);
    expect(tableView.buildRowId(firstColumnName, 1, 0)).to.be.equal(tableView.state.rows[1].id);
  });

  it("should have one cell on initial state", function() {
    let tableView = createTable([[]]);
    expect(tableView.state.rows).to.have.lengthOf(0);
    expect(tableView.state.columns).to.have.lengthOf(0);
  });

  it("should have one column", function() {
    let tableView = createTable(rowsWithOneCell);
    expect(tableView.state.columns.length).to.be.equal(rowsWithOneCell[0].length);
  });

  it("should have one row", function() {
    let tableView = createTable(rowsWithOneCell);
    expect(tableView.state.rows.length).to.be.equal(rowsWithOneCell[0].length);
  });

  describe("render", function() {

    it("should render a Provider Component with columns", function() {
      let tableView = createTable(rowsWithTwoCells);
      let provider = TestUtils.findRenderedComponentWithType(tableView, Table.Provider);
      expect(provider.props.columns).to.be.equal(tableView.state.columns);
    });

    it("should render a TableBody Component with rows", function() {
      let tableView = createTable(rowsWithTwoCells);
      let provider = TestUtils.findRenderedComponentWithType(tableView, Table.Body);
      expect(provider.props.rows).to.be.equal(tableView.state.rows);
    });
  });

});
