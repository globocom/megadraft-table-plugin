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

import {AddRemove} from "../src/AddRemove";

const expect = chai.expect;

describe("AddRemove", function() {

  beforeEach(function() {
    this.addRemove = mount(<AddRemove title="Bloblo" />);
  });

  afterEach(function() {
    this.addRemove = null;
    unmountComponentAtNode(document);
    document.body.innerHTML = "";
  });

  describe("title", function() {
    it("should have a title", function() {
      expect(this.addRemove.find("label").text()).to.be.equals("Bloblo");
    });
  });

  describe("Add Button", function() {

    it("should have a button to add", function() {
      expect(this.addRemove.find(".btn-add").exists()).to.be.true;
    });

    it("should call add callback", function() {
      const onAdd = sinon.spy();
      this.addRemove.setProps({onAdd});
      this.addRemove.find(".btn-add").simulate("click");
      expect(onAdd.calledOnce).to.be.true;
    });

  });

  describe("Remove Button", function() {
    it("should have a button to remove", function() {
      expect(this.addRemove.find(".btn-remove").exists()).to.be.true;
    });

    it("should call remove callback", function() {
      const onRemove = sinon.spy();
      this.addRemove.setProps({onRemove: onRemove});
      this.addRemove.find(".btn-remove").simulate("click");
      expect(onRemove.calledOnce).to.be.true;
    });

  });

});
