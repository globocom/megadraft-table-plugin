/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

import {mount} from "enzyme";
import chai from "chai";
import sinon from "sinon";

import {TableManagerMetadata} from "../src/TableManagerMetadata";

const expect = chai.expect;

describe("TableManagerMetadata", function() {

  beforeEach(function() {
    const headerStyle = {top: false, bottom: false, left: false, right: false};
    const data = {title: "test", source: "source", headerStyle: headerStyle};
    const onChange = sinon.spy();
    this.tableManagerMetadata = mount(<TableManagerMetadata data={data} errors={[]} onChange={onChange} />);
  });

  describe("Title Input", function() {
    it("should open with correct title value if has already one", function() {
      const titleInput = this.tableManagerMetadata.find("input[name=\"title\"]");
      expect(titleInput.node.value).to.be.equal("test");
    });
  });

  describe("Source Input", function() {
    it("should open with correct source value if has already one", function() {
      const titleInput = this.tableManagerMetadata.find("input[name=\"source\"]");
      expect(titleInput.node.value).to.be.equal("source");
    });
  });
});
