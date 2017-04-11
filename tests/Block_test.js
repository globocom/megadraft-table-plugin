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

import {MegadraftPlugin} from "megadraft";
import TableBlock from "../src/Block";
import TableManagerModal from "../src/TableManagerModal";

const expect = chai.expect;

describe("Table Block", function () {

  const createData = function(data = {}) {
    return Object.assign({isFirstTime: true}, data);
  };

  const container = {
    remove: sinon.spy(),
    plugin: sinon.spy(),
    setReadOnly: sinon.spy()
  };

  afterEach(function() {
    unmountComponentAtNode(document);
    document.body.innerHTML = "";
  });

  describe("when new block is added" , function() {

    beforeEach(function() {
      const data = createData();
      this.block = mount(<TableBlock container={container} blockProps={container} data={data} />);
      this.popin = this.block.find(TableManagerModal);
    });

    it("editable popin should be open", function() {
      expect(this.popin.prop("isOpen")).to.be.true;
    });

    it("on close popin should delete block when don't have any data saved", function() {
      const closeButton = document.querySelector(".bs-modal__close");
      TestUtils.Simulate.click(closeButton);
      expect(this.block.state("isEditing")).to.be.false;
      expect(container.remove.calledOnce).to.be.true;
    });

  });

  describe("when is a old block" , function() {

    beforeEach(function() {
      const data = createData({isFirstTime: false});
      this.block = mount(<TableBlock container={container} blockProps={container} data={data} />);
      this.popin = this.block.find(TableManagerModal);
    });

    it("editable popin should be close", function() {
      expect(this.popin.prop("isOpen")).to.be.false;
    });

    it("editable popin should open when EditButton was clicked", function() {
      const editButton = this.block.find(MegadraftPlugin.BlockAction).first();

      editButton.simulate("click");

      expect(this.block.find(TableManagerModal).prop("isOpen")).to.be.true;
    });

  });
});
