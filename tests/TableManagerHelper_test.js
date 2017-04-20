/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import chai from "chai";

import {addRow} from "../src/TableManagerHelper";

const expect = chai.expect;

describe("TableManagerHelper", function() {

  describe("AddRow", function() {

    it("should return a new array of rows", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["A1", "B1"], ["A2", "B2"], ["", ""]];
      expect(initialRows).to.be.not.deep.equals(expectedRows);
    });

    it("should add a new row at last position", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["A1", "B1"], ["A2", "B2"], ["", ""]];
      expect(addRow(initialRows)).to.be.deep.equals(expectedRows);
    });

    it("should add a new row after the position passed", function() {
      const initialRows = [["A1", "B1"], ["A2", "B2"]];
      const expectedRows = [["A1", "B1"], ["", ""], ["A2", "B2"]];
      expect(addRow(initialRows, 1)).to.be.deep.equals(expectedRows);
    });

    it("should create a new row with the same quantity of columns when does have rows created previously", function() {
      const initialRows = [["A1", "B1", "C1"], ["A2", "B2", "C2"]];
      const expectedRows = [["A1", "B1", "C1"], ["A2", "B2", "C2"], ["", "", ""]];
      expect(addRow(initialRows)).to.be.deep.equals(expectedRows);
    });

  });


});