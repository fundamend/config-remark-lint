# config-remark-lint

_config-remark-lint_ is a configuration preset for [remark-lint] used by [config-remark] and the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-remark-lint

... or [yarn], like so:

    yarn add --dev @fundamend/config-remark-lint

## Usage

In your [.remarkrc.js], import _config-remark-lint_ and add it to the plugins array, like so:

```js
const lint = require('@fundamend/config-remark-lint');

const plugins = [lint];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings
};
```

## License

[MIT]

[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[config-remark]: https://github.com/fundamend/config-remark
[remark-lint]: https://github.com/remarkjs/remark-lint
[.remarkrc.js]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[yarn]: https://yarnpkg.com/
