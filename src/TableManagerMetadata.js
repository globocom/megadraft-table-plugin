/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

import {HeaderStyle} from "./HeaderStyle";
import {Input} from "./FormComponents";


export function TableManagerMetadata({data, errors, onChange}) {

  return (<div>
      <Input title="Título"
        name="title"
        value={data.title}
        errors={errors.title}
        onChange={onChange} />

      <Input title="Fonte"
        name="source"
        value={data.source}
        onChange={onChange}
        isRequired={false} />

      <HeaderStyle name="headerStyle"
        selectedOptions={data.headerStyle}
        onChange={onChange}/>
    </div>);
}
