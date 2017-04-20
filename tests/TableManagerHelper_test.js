/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import chai from "chai";

import {addRow, removeRow, addColumn} from "../src/TableManagerHelper";

const expect = chai.expect;

describe("TableManagerHelper", function() {

  describe("AddRow", function() {

    it("should return a new array of rows", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      expect(addRow(initialRows)).to.be.not.deep.equals(initialRows);
    });

    it("should add a new row at last position", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["A1", "B1"], ["A2", "B2"], ["", ""]];
      expect(addRow(initialRows)).to.be.deep.equals(expectedRows);
    });

    it("should add a new row after the position passed", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["A1", "B1"], ["", ""], ["A2", "B2"]];
      expect(addRow(initialRows, 0)).to.be.deep.equals(expectedRows);
    });

    it("should create a new row with the same quantity of columns when does have rows created previously", function() {
      const initialRows = [["A1", "B1", "C1"], ["A2", "B2", "C2"]];
      const expectedRows = [["A1", "B1", "C1"], ["A2", "B2", "C2"], ["", "", ""]];
      expect(addRow(initialRows)).to.be.deep.equals(expectedRows);
    });

  });

  describe("RemoveRow", function() {

    it("should return a new array of rows", function() {
      const initialRows = [[""]];
      expect(removeRow(initialRows)).to.be.not.equals(initialRows);
    });

    it("should keep row when does have only one row and one column", function() {
      const initialRows = [[""]];
      const expectedRows = [[""]];
      expect(removeRow(initialRows)).to.deep.equals(expectedRows);
    });

    it("should remove the last row when the position is not passed", function() {
      const initialRows = [["A1", "B1", "C1"], ["A2", "B2", "C2"]];
      const expectedRows = [["A1", "B1", "C1"]];
      expect(removeRow(initialRows)).to.be.deep.equals(expectedRows);
    });

    it("should remove the selected row when the position is passed", function() {
      const initialRows = [["A1", "B1", "C1"], ["A2", "B2", "C2"]];
      const expectedRows = [["A2", "B2", "C2"]];
      expect(removeRow(initialRows, 0)).to.be.deep.equals(expectedRows);
    });

  });

  describe("AddColumn", function() {

    it("should return a new array of rows", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      expect(addColumn(initialRows)).to.be.not.deep.equals(initialRows);
    });

    it("should add a new column at the last position if the position is not passed", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["A1", "B1", ""], ["A2", "B2", ""]];

      expect(addColumn(initialRows)).to.deep.equals(expectedRows);
    });

    it("should add a new column after the position passed", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["A1", "", "B1"], ["A2", "", "B2"]];

      expect(addColumn(initialRows, 0)).to.deep.equals(expectedRows);
    });
  });

});