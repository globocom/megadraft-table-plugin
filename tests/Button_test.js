/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import {unmountComponentAtNode} from "react-dom";

import {mount} from "enzyme";
import chai from "chai";
import sinon from "sinon";

import Button from "../src/Button";
import TableManagerModal from "../src/TableManagerModal";
import {TableConfig} from "../src/TableConfig";

import {editorStateFromRaw} from "megadraft";

const expect = chai.expect;

describe("Button", function () {

  beforeEach(function() {
    this.onChange = sinon.spy();
    this.button = mount(<Button onChange={this.onChange} editorState={editorStateFromRaw(null)} />);
    this.popin = this.button.find(TableManagerModal);
  });

  afterEach(function() {
    unmountComponentAtNode(document);
    document.body.innerHTML = "";
  });

  it("editable popin should be closed", function() {
    expect(this.popin.prop("isOpen")).to.be.false;
  });

  describe("on click", function() {

    beforeEach(function() {
      this.button.find("button").simulate("click");
      this.button.update();
      this.popin = this.button.find(TableManagerModal);
    });

    it("popin should be opened", function() {
      expect(this.popin.prop("isOpen")).to.be.true;
    });

    it("popin should receive a clean object ", function() {
      expect(this.popin.prop("data")).to.be.deep.equals({});
    });

  });

  describe("when editable popin is opened", function() {

    beforeEach(function() {
      this.button.setState({isEditing: true});
    });

    it("should not call updateData when you close popin without saving", function() {
      this.popin.prop("onCloseRequest")();
      expect(this.button.state("isEditing")).to.be.false;
    });

    describe("on save", function() {

      beforeEach(function() {
        this.popin.prop("onSaveRequest")(new TableConfig());
      });

      it("should call updateData", function() {
        expect(this.onChange.calledOnce).to.be.true;
      });

      it("should close popin", function() {
        expect(this.popin.prop("isOpen")).to.be.false;
      });
    });
  });
});
