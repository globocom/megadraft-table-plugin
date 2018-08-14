/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import chai from "chai";

import {addRow, removeRow, addColumn, removeColumn, highlightedClass, isTableData, getTableFromClipBoard, correctSelectedCellIndex} from "../src/TableManagerHelper";

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

    it("should not remove if only has one row", function() {
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

  describe("removeColumn", function() {
    it("should return a new array of rows", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];

      expect(removeColumn(initialRows)).to.be.not.equals(initialRows);
    });


    it("should not delete if it has only one column", function() {
      const initialRows = [[""]];
      const expectedRows = [[""]];

      expect(removeColumn(initialRows)).to.deep.equals(expectedRows);
    });

    it("should remove the last column when the position is not passed", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["A1"], ["A2"]];

      expect(removeColumn(initialRows)).to.deep.equals(expectedRows);
    });

    it("should remove the selected column when the position is passed", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["B1"], ["B2"]];

      expect(removeColumn(initialRows, 0)).to.deep.equals(expectedRows);
    });
  });

  describe("highlightedClass", function() {
    it("should return empty string if no header style is selected", function() {
      expect(highlightedClass({})).to.be.equal("");
    });

    it("should return highlight-top class if header style top is selected", function() {
      const headerStyle = {top: true};
      const expectedClass = "highlight-top ";
      expect(highlightedClass(headerStyle)).to.be.equal(expectedClass);
    });

    it("should return highlight-bottom class if header style bottom is selected", function() {
      const headerStyle = {bottom: true};
      const expectedClass = "highlight-bottom ";
      expect(highlightedClass(headerStyle)).to.be.equal(expectedClass);
    });

    it("should return highlight-left class if header style left is selected", function() {
      const headerStyle = {left: true};
      const expectedClass = "highlight-left ";
      expect(highlightedClass(headerStyle)).to.be.equal(expectedClass);
    });

    it("should return highlight-right class if header style right is selected", function() {
      const headerStyle = {right: true};
      const expectedClass = "highlight-right ";
      expect(highlightedClass(headerStyle)).to.be.equal(expectedClass);
    });
  });

  describe("getTableFromClipBoard", function() {
    it("should return one row with two cells if data has one line and tab separator", function() {
      const data = "title\tvalue";
      const expectedResult = [["title", "value"]];
      expect(getTableFromClipBoard(data)).to.deep.equals(expectedResult);
    });

    it("should return two rows with two cells if data has two lines and a tab separator for each line", function() {
      const data = "title\tvalue\ntest\t1";
      const expectedResult = [["title", "value"], ["test", "1"]];
      expect(getTableFromClipBoard(data)).to.deep.equals(expectedResult);
    });

    it("should return three rows with two cells each if data has three lines and the last row is longest rows with two cells", function() {
      const data = "title\nvalue\ntest\t1";
      const expectedResult = [["title", ""], ["value", ""], ["test", "1"]];
      expect(getTableFromClipBoard(data)).to.deep.equals(expectedResult);

    });

    it("should return three rows with two cells each if data has three lines and the longest rows has two cells", function() {
      const data = "title\tvalue\ntest\n1";
      const expectedResult = [["title", "value"], ["test", ""], ["1", ""]];
      expect(getTableFromClipBoard(data)).to.deep.equals(expectedResult);
    });

    it("should return three rows with three cells each if data has three lines and the longest rows has three cells", function() {
      const data = "title\tvalue\tdata\ntest\n1";
      const expectedResult = [["title", "value", "data"], ["test", "", ""], ["1", "", ""]];
      expect(getTableFromClipBoard(data)).to.deep.equals(expectedResult);
    });

    it("should return three rows with three cells each if data has three lines and the longest rows has two cells", function() {
      const data = "title\tvalue\tdata\ntest\n1";
      const expectedResult = [["title", "value", "data"], ["test", "", ""], ["1", "", ""]];
      expect(getTableFromClipBoard(data)).to.deep.equals(expectedResult);
    });

    it("should return two rows with two cells if data has two lines and a tab separator for each line", function() {
      const data = "title\tvalue\ntest\t1";
      const expectedResult = [["title", "value"], ["test", "1"]];
      expect(getTableFromClipBoard(data)).to.deep.equals(expectedResult);
    });
  });

  describe("isTableData", function() {
    it("should return false if has only one row with one cell", function() {
      const rows = [["test"]];
      expect(isTableData(rows)).to.be.false;
    });

    it("should return true if has more than one row or more than one cell", function() {
      const rows = [["A1", "B1"], ["A2", "B2"]];
      expect(isTableData(rows)).to.be.true;
    });
  });

  describe("correctSelectedCellIndex", function() {
    it("should return the selected column index with the value of the number of columns minus one", function() {
      const rows = [["A1", "B1"], ["A2", "B2"]];
      const selectedCell = [2,1];
      const expectedResult = [1,1];
      expect(correctSelectedCellIndex(selectedCell, rows)).to.deep.equals(expectedResult);
    });

    it("should return the selected row index with the value of the number of rows minus one", function() {
      const rows = [["A1", "B1"], ["A2", "B2"]];
      const selectedCell = [1,2];
      const expectedResult = [1,1];
      expect(correctSelectedCellIndex(selectedCell, rows)).to.deep.equals(expectedResult);
    });
  });
});
