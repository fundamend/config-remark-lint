import lint from 'remark-lint';
import noDuplicateDefinitions from 'remark-lint-no-duplicate-definitions';
import noAutoLinkWihtoutProtocol from 'remark-lint-no-auto-link-without-protocol';

const plugins = [lint, noDuplicateDefinitions, noAutoLinkWihtoutProtocol];
const settings = {};

export default {
	plugins: plugins,
	settings: settings
};
