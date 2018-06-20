/*
 * Copyright (c) 2016, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import * as Table from "reactabular-table";

import {mount} from "enzyme";
import chai from "chai";
import sinon from "sinon";

import TableView from "../src/TableView";

const expect = chai.expect;

describe("TableView", function() {

  const rowsWithOneCell = [["00"]];
  const rowsWithTwoCells = [["00"],["10"]];
  const twoRowsWithTwoColumns = [["00", "01"], ["10", "11"]];
  const firstColumnName = "c0";
  const headerStyle = {
    top: false,
    bottom: false,
    left: false,
    right: false
  };

  const createTable = function(rows, onEditCellSpy, onChangeRowsSpy){
    return mount(<TableView rows={rows} onEditCell={onEditCellSpy} onChangeRows={onChangeRowsSpy} headerStyle={headerStyle} editable={true} />).instance();
  };

  const createTableWrapper = function(rows, onEditCellSpy, onChangeRowsSpy){
    return mount(<TableView rows={rows} onEditCell={onEditCellSpy} onChangeRows={onChangeRowsSpy} headerStyle={headerStyle} editable={true} />);
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

  describe("Reactabular", function() {

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

    it("should render a Provider Component with columns", function() {
      let tableView = createTableWrapper(rowsWithTwoCells);
      let provider = tableView.find(Table.Provider);
      expect(provider.prop("columns")).to.be.equal(tableView.state().columns);
    });

    it("should render a TableBody Component with rows", function() {
      let tableView = createTableWrapper(rowsWithTwoCells);
      let provider = tableView.find(Table.Body);
      expect(provider.prop("rows")).to.be.equal(tableView.state().rows);
    });
  });

  describe("render", function() {
    beforeEach(function() {
      this.tableView = createTableWrapper(twoRowsWithTwoColumns);
    });

    it("should render a table strucuture", function() {
      expect(this.tableView.find(".table-row")).to.be.lengthOf(2);
      expect(this.tableView.find(".table-cell")).to.be.lengthOf(4);
    });

    it("should re-render a table structure when props is updated", function() {
      this.tableView.setProps({rows: rowsWithOneCell});
      expect(this.tableView.find(".table-row")).to.be.lengthOf(1);
      expect(this.tableView.find(".table-cell")).to.be.lengthOf(1);
    });

    it("should render a content cell in right position", function() {
      const firstRow = this.tableView.find(".table-row").first();
      expect(firstRow.find(".table-cell").first().text()).to.be.equals("00");
      expect(firstRow.find(".table-cell").last().text()).to.be.equals("01");
    });

  });

  describe("Editing", function() {


    it("should call onEditCell when a cell is editing", function() {

      const onEditCellSpy = sinon.spy();
      const firstLineSecondColumn = "10";
      const newValue = "11";
      const tableViewWrapper = createTableWrapper(rowsWithTwoCells, onEditCellSpy);

      const tdEls = tableViewWrapper.find(".table-cell");
      const cellEl = tdEls.filterWhere((item) => { return item.text() === firstLineSecondColumn;}).first();

      cellEl.simulate("click");
      const input = tableViewWrapper.find("input");
      input.props().value = newValue;
      input.simulate("blur");

      expect(onEditCellSpy.called).to.be.true;
    });

    it("should call onChangeRows when a table data is pasted", function() {
      const onEditCellSpy = sinon.spy();
      const onChangeRowsSpy = sinon.spy();
      const data = "title\tvalue\ntest\t1";
      const tableView = createTable(rowsWithTwoCells, onEditCellSpy, onChangeRowsSpy);
      tableView.buildTableFromPasteData(data);
      expect(onChangeRowsSpy.called).to.be.true;
    });
  });

});
