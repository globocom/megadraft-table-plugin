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

import {MegadraftPlugin} from "megadraft";
import TableBlock from "../src/Block";
import TableManagerModal from "../src/TableManagerModal";
import {ValidTableConfig} from "./fixtures";

const expect = chai.expect;

describe("Table Block", function () {

  const container = {
    remove: sinon.spy(),
    plugin: sinon.spy(),
    setReadOnly: sinon.spy(),
    updateData: sinon.spy()
  };

  beforeEach(function() {
    const data = Object.assign({}, ValidTableConfig);
    this.block = mount(<TableBlock container={container} blockProps={container} data={data} />);
    this.popin = this.block.find(TableManagerModal);
  });

  afterEach(function() {
    container.updateData.reset();

    unmountComponentAtNode(document);
    document.body.innerHTML = "";
  });


  it("editable popin should be close", function() {
    expect(this.popin.prop("isOpen")).to.be.false;
  });

  it("editable popin should open when EditButton was clicked", function() {
    const editButton = this.block.find(MegadraftPlugin.BlockAction).first();

    editButton.simulate("click");

    expect(this.block.find(TableManagerModal).prop("isOpen")).to.be.true;
  });


  describe("on save", function() {

    beforeEach(function() {
      this.block.setState({isEditing:true});
      expect(this.block.find(TableManagerModal).prop("isOpen")).to.be.true;
      const addButton = document.querySelector(".table-manager-modal__add-button");
      addButton.click();
    });

    it("should call updateData", function() {
      expect(container.updateData.calledOnce).to.be.true;
    });

    it("should close popin", function() {
      this.block.update();
      expect(this.block.find(TableManagerModal).prop("isOpen")).to.be.false;
    });

  });
});
