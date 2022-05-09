const fundamend = require('@fundamend/config-jest');
const packageName = require('./package.json').name;

module.exports = {
	...fundamend,
	rootDir: '.',
	displayName: packageName
};
