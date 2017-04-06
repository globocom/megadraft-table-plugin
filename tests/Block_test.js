/*
 * Copyright (c) 2016, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import TestUtils from "react-addons-test-utils";
import chai from "chai";
import sinon from "sinon";

import Block from "../src/Block";
import TagManagerModal from "../src/TableManagerModal";

let expect = chai.expect;

describe("Table Block", function () {
  beforeEach(function () {
    this.updateData = sinon.spy();
    this.remove = sinon.spy();
    this.plugin = sinon.spy();

    this.wrapper = TestUtils.renderIntoDocument(
      <Block container={this} blockProps={this} data={this.data} />
    );
  });

  it("deve abrir popin quando escolhido", function() {
    const popin = TestUtils.findRenderedComponentWithType(this.wrapper, TagManagerModal);
    expect(popin.props.isOpen).to.be.true;
  });

  it("updates entity on caption change", function () {
    this.caption.value = "new caption";
    TestUtils.Simulate.change(this.caption);
    expect(this.updateData.calledWith({caption: "new caption"})).to.be.true;
  });

  it("your tests here...", function () {
    expect(true).to.be.false;
  });
});
