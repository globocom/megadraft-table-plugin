/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import chai from "chai";

import {validate} from "../src/TableConfig";
import {ValidTableConfig, EmptyTableConfig} from "./fixtures";

const expect = chai.expect;

describe("TableConfig", function() {

  describe("validate", function() {

    it("should return an empty object when the table config is valid", function() {
      expect(validate(ValidTableConfig)).to.be.deep.equals({});
    });

    it("should return errors grouped by property when the table config is invalid", function() {
      const expectedResult = {title: ["Campo requirido"]};
      expect(validate(EmptyTableConfig)).to.be.deep.equals(expectedResult);
    });

  });

});