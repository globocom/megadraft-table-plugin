/*
 * Copyright (c) 2016, Globo.com <https://github.com/globocom/megadraft-table-plugin>
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

const expect = chai.expect;

describe("TableManagerModal", function () {

  const validData = {
    title: "Bloblo"
  };

  beforeEach(function() {
    this.onSaveRequest = sinon.spy();
    this.tableManagerModal = mount(<TableManagerModal isOpen={true} onSaveRequest={(data) => {this.onSaveRequest(data);}}/>);
  });

  afterEach(function() {
    this.tableManagerModal = null;
    unmountComponentAtNode(document);
    document.body.innerHTML = "";
  });

  describe("isValid", function() {

    it("should be true when title is present", function(done) {
      this.tableManagerModal.setState({data: validData}, () => {
        expect(this.tableManagerModal.instance().isValid()).to.be.true;
        done();
      });
    });

    it("should be false when title is not present", function() {
      expect(this.tableManagerModal.instance().isValid()).to.be.false;
    });

  });

  describe("click add button", function() {

    it("save callback should be called when is valid", function(done) {
      this.tableManagerModal.setState({data: validData}, () => {
        const addButton = document.querySelector(".bs-button");
        TestUtils.Simulate.click(addButton);
        expect(this.onSaveRequest.calledOnce).to.be.true;
        done();
      });
    });

    it("save callback should not be called when is invalid", function() {
      const addButton = document.querySelector(".bs-button");
      TestUtils.Simulate.click(addButton);
      expect(this.onSaveRequest.notCalled).to.be.true;
    });

  });

});
