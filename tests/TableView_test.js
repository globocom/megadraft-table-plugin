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
    const rowsWithOneCell = [["00"]];
    const rowsWithTwoCells = [["00"],["10"]];
    const rowsWithTwoCellsId =[["c00"]];
    const twoRowsWithTwoColumns = [["00", "01"], ["10", "11"]];
    const firstColumnName = "c0";
    const twoColumnsNames = ["c0", "c1"];

    const createTable = function(rows){
        return mount(<TableView rows={rows}/>).instance();
    }

    it("should have one column", function() {
      let tableView = createTable(rowsWithOneCell);
      expect(tableView.state.columns.length).to.be.equal(rowsWithOneCell[0].length);
    });

    it("should have one row", function() {
      let tableView = createTable(rowsWithOneCell);
      expect(tableView.state.rows.length).to.be.equal(rowsWithOneCell[0].length);
    });

    it("should have one cell value", function() {
      let tableView = createTable(rowsWithOneCell);
      expect(tableView.state.rows[0][firstColumnName]).to.be.equal(rowsWithOneCell[0][0]);
    });

    it("should have column property value with same name as row key", function() {
      const propertyName = firstColumnName;
      let tableView = createTable(rowsWithOneCell);
      expect(tableView.state.rows[0]).to.have.property(propertyName);
      expect(tableView.state.columns[0].property).to.be.equal(propertyName);
    });

    it("should have two rows with one column", function() {
      let tableView = createTable(rowsWithTwoCells);
      for(let i=0; i<rowsWithTwoCells.length ;i++) {
        expect(tableView.state.rows[i][firstColumnName]).to.be.equal(rowsWithTwoCells[i][0]);
      }
      expect(tableView.state.columns).to.have.lengthOf(rowsWithTwoCells[0].length);
    });

    it("should have correct ids for two rows", function() {
      let tableView = createTable(rowsWithTwoCells);
      expect(tableView.buildRowId(firstColumnName, 0, 0)).to.be.equal(tableView.state.rows[0].id);
      expect(tableView.buildRowId(firstColumnName, 1, 0)).to.be.equal(tableView.state.rows[1].id);
    });

    it("should have two rows and two columns", function() {
      let tableView = createTable(twoRowsWithTwoColumns);
      for(let i=0; i<twoRowsWithTwoColumns.length; i++) {
        for(let j=0; j<twoRowsWithTwoColumns[i].length; j++) {
          expect(tableView.state.rows[i][twoColumnsNames[j]]).to.be.equal(twoRowsWithTwoColumns[i][j]);
        }
      }
    });

})
