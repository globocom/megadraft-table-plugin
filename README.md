# Table Plugin - Megadraft Plugin [![Build Status](https://secure.travis-ci.org/globocom/megadraft-table-plugin.png?branch=master)](https://travis-ci.org/globocom/megadraft-table-plugin) [![npm version](https://img.shields.io/npm/v/megadraft-table-plugin.svg?style=flat)](https://www.npmjs.com/package/megadraft-table-plugin)


## Usage

Include the plugin in the `plugins` prop of your `Megadraft` instance.

```js
import React from "react";
import ReactDOM from "react-dom";
import Megadraft from "megadraft";

import plugin from "megadraft-table-plugin";

class Example extends React.Component {
  render(){
    return (
      <Megadraft plugins={[plugin]} />
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("container"));
```

## Contributing

Install, run, test.

```
# Install npm dependencies
make setup
# Gulp dev-server task with webpack + sass running on http://localhost:8080/
make run
# Run mocha tests + eslint
make test
```

If you're constantly running tests, there's a faster alternative using mocha's
watch feature:

```
make watch_unit
```

## Releasing

There's a `prepublish` script entry on `package.json` that runs build tasks
before publishing the package.

```
npm publish
```
