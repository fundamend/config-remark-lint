const lint = require('remark-lint');
const noDuplicateDefinitions = require('remark-lint-no-duplicate-definitions');
const noAutoLinkWihtoutProtocol = require('remark-lint-no-auto-link-without-protocol');

const plugins = [lint, noDuplicateDefinitions, noAutoLinkWihtoutProtocol];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings,
};
