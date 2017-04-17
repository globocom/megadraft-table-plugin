/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import TestUtils from "react-addons-test-utils";
import {unmountComponentAtNode} from "react-dom";

import {mount} from "enzyme";
import chai from "chai";
import sinon from "sinon";

import TableManagerModal from "../src/TableManagerModal";
import {EmptyTableConfig, ValidTableConfig} from "./fixtures";

const expect = chai.expect;

describe("TableManagerModal", function () {

  beforeEach(function() {
    this.onSaveRequest = sinon.spy();
    this.tableManagerModal = mount(<TableManagerModal isOpen={true} onSaveRequest={(data) => {this.onSaveRequest(data);}} data={EmptyTableConfig}/>);
  });

  afterEach(function() {
    this.tableManagerModal = null;
    unmountComponentAtNode(document);
    document.body.innerHTML = "";
  });

  describe("isValid", function() {

    it("should be true when title is present", function(done) {
      this.tableManagerModal.setState({data: ValidTableConfig}, () => {
        expect(this.tableManagerModal.instance().isValid()).to.be.true;
        done();
      });
    });

    it("should be false when title is not present", function() {
      expect(this.tableManagerModal.instance().isValid()).to.be.false;
    });

  });

  describe("click add button", function() {

    it("save callback should be called when TableConfig is valid", function(done) {
      this.tableManagerModal.setState({data: ValidTableConfig}, () => {
        const addButton = document.querySelector(".table-manager-modal__add-button");
        TestUtils.Simulate.click(addButton);
        expect(this.onSaveRequest.calledOnce).to.be.true;
        expect(this.onSaveRequest.getCall(0).args[0]).to.be.deep.equals(ValidTableConfig);
        done();
      });
    });

    it("save callback should not be called when TableConfig is invalid", function() {
      const addButton = document.querySelector(".table-manager-modal__add-button");
      TestUtils.Simulate.click(addButton);
      expect(this.onSaveRequest.notCalled).to.be.true;
    });

  });

  describe("Title", function() {

    it("should update state when input changes", function() {
      expect(this.tableManagerModal.state().data.title).to.be.equals("");
      const titleInput = document.querySelector(".bs-modal input[name=\"title\"]");
      titleInput.value = "Blo";
      TestUtils.Simulate.change(titleInput);
      expect(this.tableManagerModal.state().data.title).to.be.equals("Blo");
    });

  });

  describe("Header Style", function() {

    const getHeaderStyleObj = function() {
      return {
        top: false,
        bottom: false,
        right: false,
        left: false
      };
    };

    const getHeaderCheckboxDOM = function(position) {
      return document.querySelector(`.bs-modal input[name="header-style"][value="${position}"]`);
    };

    const testChangeHeaderStyle = function(position) {
      it(`should update state when header-style-${position} is clicked`, function() {
        expect(this.tableManagerModal.state().data.headerStyle[position]).to.be.false;
        const headeStyleCheckbox = getHeaderCheckboxDOM(position);
        headeStyleCheckbox.checked = true;
        TestUtils.Simulate.change(headeStyleCheckbox);
        expect(this.tableManagerModal.state().data.headerStyle[position]).to.be.true;
      });

      it(`should check the checkbox-${position}`, function() {
        const headeStyleCheckbox = getHeaderCheckboxDOM(position);
        const newheaderStyle = Object.assign(getHeaderStyleObj(), {[position]: true});

        expect(headeStyleCheckbox.checked).to.be.false;
        this.tableManagerModal.setState({data: {headerStyle: newheaderStyle}});
        expect(headeStyleCheckbox.checked).to.be.true;
      });
    };

    testChangeHeaderStyle("top");
    testChangeHeaderStyle("bottom");
    testChangeHeaderStyle("right");
    testChangeHeaderStyle("left");

    it("should maintain the state of others options", function() {
      this.tableManagerModal.setState({data: ValidTableConfig});
      const headeStyleCheckbox = getHeaderCheckboxDOM("bottom");
      headeStyleCheckbox.checked = true;
      TestUtils.Simulate.change(headeStyleCheckbox);
      expect(this.tableManagerModal.state().data.headerStyle.top).to.be.true;
      expect(this.tableManagerModal.state().data.headerStyle.bottom).to.be.true;
      expect(this.tableManagerModal.state().data.headerStyle.right).to.be.false;
      expect(this.tableManagerModal.state().data.headerStyle.left).to.be.false;
    });

  });

  describe("Add or Remove Rows", function() {

    describe("Add", function() {

      beforeEach(function() {
        this.btnAddRow = document.querySelector(".bs-modal .add-remove-rows .btn-add");
      });

      it("should add a new row", function() {
        expect(this.tableManagerModal.state().data.rows).to.be.lengthOf(0);
        TestUtils.Simulate.click(this.btnAddRow);
        expect(this.tableManagerModal.state().data.rows).to.be.lengthOf(1);
      });

      it("should add a new row after selected row cell", function() {
        const rows = [["A1", "B1"],["A2", "B2"]];
        const selectedCell = [1, 0];
        const data = Object.assign({}, ValidTableConfig, {rows});
        this.tableManagerModal.setState({data, selectedCell});
        TestUtils.Simulate.click(this.btnAddRow);
        expect(this.tableManagerModal.state().data.rows).to.be.lengthOf(3);
        expect(this.tableManagerModal.state().data.rows[1]).to.not.deep.equals(rows[0]);
        expect(this.tableManagerModal.state().data.rows[1]).to.not.deep.equals(rows[1]);
      });

      it("should create a new row with the same quantity of columns when does have rows created previously", function() {
        const rows = [["A1", "B1"]];
        const data = Object.assign({}, ValidTableConfig, {rows});
        this.tableManagerModal.setState({data});
        TestUtils.Simulate.click(this.btnAddRow);
        expect(this.tableManagerModal.state().data.rows[1]).to.deep.equals(["", ""]);
      });

      it("should create a new row with any column when does not have rows created previously", function() {
        const rows = [["A1", "B1"]];
        const data = Object.assign({}, ValidTableConfig, {rows});
        this.tableManagerModal.setState({data});
        TestUtils.Simulate.click(this.btnAddRow);
        expect(this.tableManagerModal.state().data.rows[1]).to.deep.equals(["", ""]);
      });

    });

    describe("Remove", function() {

      beforeEach(function() {
        this.btnRemoveRow = document.querySelector(".bs-modal .add-remove-rows .btn-remove");
      });

      it("should keeps without rows when does not have any row", function() {
        expect(this.tableManagerModal.state().data.rows).to.be.lengthOf(0);
        TestUtils.Simulate.click(this.btnRemoveRow);
        expect(this.tableManagerModal.state().data.rows).to.be.lengthOf(0);
      });

      it("should remove the last row when does not have any selected cell", function() {
        const rows = [["A1", "B1"], ["A2", "B2"]];
        const data = Object.assign({}, ValidTableConfig, {rows});
        this.tableManagerModal.setState({data, selectedCell: []});

        TestUtils.Simulate.click(this.btnRemoveRow);

        expect(this.tableManagerModal.state().data.rows).to.be.lengthOf(1);
        expect(this.tableManagerModal.state().data.rows[0]).to.deep.equals(["A1", "B1"]);
      });

      it("should remove the selected row when does have a selectedCell", function() {
        const rows = [["A1", "B1"], ["A2", "B2"]];
        const data = Object.assign({}, ValidTableConfig, {rows});
        this.tableManagerModal.setState({data, selectedCell: [0, 0]});

        TestUtils.Simulate.click(this.btnRemoveRow);

        expect(this.tableManagerModal.state().data.rows).to.be.lengthOf(1);
        expect(this.tableManagerModal.state().data.rows[0]).to.deep.equals(["A2", "B2"]);
      });

    });

  });

  describe("Add or Remove Columns", function() {

    describe("Add", function() {

      beforeEach(function() {
        this.btnAddColumn = document.querySelector(".bs-modal .add-remove-columns .btn-add");
        const rows = [["A1", "B1"], ["A2", "B2"]];
        const data = Object.assign({}, ValidTableConfig, {rows});
        this.tableManagerModal.setState({data, selectedCell: []});
      });

      it("should add a new column", function() {
        const expected = [["A1", "B1", ""], ["A2", "B2", ""]];

        TestUtils.Simulate.click(this.btnAddColumn);
        expect(this.tableManagerModal.state().data.rows).to.deep.equals(expected);
      });

      it("should add a new column after selected cell", function() {
        const expected = [["A1", "", "B1"], ["A2", "", "B2"]];
        this.tableManagerModal.setState({selectedCell: [0, 1]});

        TestUtils.Simulate.click(this.btnAddColumn);
        expect(this.tableManagerModal.state().data.rows).to.deep.equals(expected);
      });

      it("should not do anything when does not have any row", function() {
        const rows = [];
        const data = Object.assign({}, ValidTableConfig, {rows});
        this.tableManagerModal.setState({data});

        TestUtils.Simulate.click(this.btnAddColumn);
        expect(this.tableManagerModal.state().data.rows).to.deep.equals([]);
      });

    });

    describe("Remove", function() {

      beforeEach(function() {
        this.btnRemoveColumn = document.querySelector(".bs-modal .add-remove-columns .btn-remove");
      });

      it("should keeps without columns when does not have rows", function() {
        expect(this.tableManagerModal.state().data.rows).to.be.deep.equals([]);

        TestUtils.Simulate.click(this.btnRemoveColumn);

        expect(this.tableManagerModal.state().data.rows).to.be.deep.equals([]);
      });

      it ("should remove the last column when does not have any selected cell", function() {
        const rows = [["A1", "B1"], ["A2", "B2"]];
        const data = Object.assign({}, ValidTableConfig, {rows});
        this.tableManagerModal.setState({data, selectedCell: []});

        TestUtils.Simulate.click(this.btnRemoveColumn);

        expect(this.tableManagerModal.state().data.rows).to.be.deep.equals([["A1"], ["A2"]]);
      });

    });
  });

});
