import { expect, describe, test } from 'vitest';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import config from '../src/index.js';
import fs from 'fs';

const loadFixture = function (filename) {
	return fs.readFileSync(
		new URL(`./fixtures/${filename}`, import.meta.url),
		'utf-8'
	);
};

let processor = remark().use(gfm).use(config);

describe('config-remark-lint', () => {
	// TODO: Fix test
	test.skip('should pass on valid markdown', () => {
		const markdown = loadFixture('config-remark-lint.md');
		const result = processor.processSync(markdown);
		expect(result.messages.length).toBe(0);
	});

	// TODO: Fix test
	describe.skip('remark-lint-blockquote-indentation', () => {
		test('should fail on incorrect blockquote indentation', () => {
			const markdown = loadFixture('remark-lint-blockquote-indentation.md');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(2);
			expect(result.messages[0].ruleId).toEqual('blockquote-indentation');
			expect(result.messages[1].ruleId).toEqual('no-paragraph-content-indent');
		});
	});

	// TODO: Fix test
	describe.skip('remark-lint-checkbox-character-style', () => {
		test('should fail on incorrect checkbox character style', () => {
			const markdown = loadFixture('remark-lint-checkbox-character-style.md');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('checkbox-character-style');
		});
	});

	// TODO: Fix test
	describe.skip('remark-lint-checkbox-content-indent', () => {
		test('should fail on incorrect checkbox content indent', () => {
			const markdown = loadFixture('remark-lint-checkbox-content-indent.md');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('checkbox-content-indent');
		});
	});

	describe('remark-lint-code-block-style', () => {
		test('should fail on incorrect code block style', () => {
			const markdown = loadFixture('remark-lint-code-block-style.md');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('code-block-style');
		});
	});

	// TODO: Fix test
	describe.skip('remark-lint-definition-case', () => {
		test('should fail on incorrect definiton case', () => {
			const markdown = loadFixture('remark-lint-definition-case.md');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('definition-case');
		});
	});

	// TODO: Fix test
	describe.skip('remark-lint-definition-spacing', () => {
		test('should fail on incorrect definiton spacing', () => {
			const markdown = loadFixture('remark-lint-definition-spacing.md');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('definition-spacing');
		});
	});

	describe('remark-lint-emphasis-marker', () => {
		test('should fail on incorrect emphasis marker', () => {
			const markdown = loadFixture('remark-lint-emphasis-marker.md');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('emphasis-marker');
		});
	});

	// TODO: Fix test
	describe.skip('remark-lint-fenced-code-flag', () => {
		test('should fail on incorrect fenced code', () => {
			const markdown = loadFixture('remark-lint-fenced-code-flag.md');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('fenced-code-flag');
		});
	});

	// TODO: Fix test
	describe.skip('remark-lint-file-extension', () => {
		test('should fail on incorrect file extension', () => {
			const markdown = loadFixture('remark-lint-file-extension.mkd');
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('file-extension');
		});
	});

	describe('remark-lint-final-definition', () => {
		test('should pass on correct final definition', () => {
			const markdown =
				'Paragraph [correct][].\n' + '\n' + '[correct]: Correct]\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect final definition', () => {
			const markdown =
				'Paragraph [incorrect][].\n' +
				'\n' +
				'[incorrect]: Inorrect]\n' +
				'\n' +
				'Paragraph.\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('final-definition');
		});
	});

	describe('remark-lint-final-newline', () => {
		test('should pass on correct final newline', () => {
			const markdown = 'Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect final newline', () => {
			const markdown = 'Incorrect';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('final-newline');
		});
	});

	describe('remark-lint-first-heading-level', () => {
		test('should pass on correct first heading level', () => {
			const markdown = '# Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect first heading level', () => {
			const markdown = '## Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('first-heading-level');
		});
	});

	describe('remark-lint-hard-break-spaces', () => {
		test('should pass on correct hard break spaces', () => {
			const markdown = 'Correct  \n' + 'Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect hard break spaces', () => {
			const markdown = 'Incorrect   \n' + 'Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('hard-break-spaces');
		});
	});

	describe('remark-lint-heading-increment', () => {
		test('should pass on correct heading increment', () => {
			const markdown = '# Correct\n' + '\n' + '## Also Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect heading increment', () => {
			const markdown = '# Correct\n' + '\n' + '### Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('heading-increment');
		});
	});

	describe('remark-lint-heading-style', () => {
		test('should pass on correct heading style', () => {
			const markdown = '# Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect heading style 1', () => {
			const markdown = '# Inorrect #\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('heading-style');
		});

		test('should fail on incorrect heading style 2', () => {
			const markdown = 'Inorrect\n' + '========\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('heading-style');
		});
	});

	describe('remark-lint-linebreak-style', () => {
		test('should pass on correct linebreak style', () => {
			const markdown = 'Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect linebreak style', () => {
			const markdown = 'Inorrect\r\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('linebreak-style');
		});
	});

	describe('remark-lint-link-title-style', () => {
		test('should pass on correct link title style', () => {
			const markdown =
				'[correct][]\n' +
				'\n' +
				'[correct]: http://example.com "Example Domain"\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect link title style', () => {
			const markdown =
				'[incorrect][]\n' +
				'\n' +
				"[incorrect]: http://example.com 'Example Domain'\n";
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('link-title-style');
		});
	});

	describe('remark-lint-list-item-bullet-indent', () => {
		test('should pass on correct list item bullet indent', () => {
			const markdown = '- correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect list item bullet indent', () => {
			const markdown = ' - incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('list-item-bullet-indent');
		});
	});

	describe('remark-lint-list-item-content-indent', () => {
		test('should pass on correct list item content indent', () => {
			const markdown = '1. [x] correct\n' + '\n' + '   1. correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect list item content indent', () => {
			const markdown = '1. [x] correct\n' + '\n' + '    1. incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('list-item-content-indent');
		});
	});

	describe('remark-lint-list-item-indent', () => {
		test('should pass on correct list item indent', () => {
			const markdown = '- correct\n' + '- correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect list item indent', () => {
			const markdown = '- correct\n' + '-  incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('list-item-indent');
		});
	});

	describe('remark-lint-list-item-spacing', () => {
		test('should pass on correct list item spacing 1', () => {
			const markdown = '- correct\n' + '- correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should pass on correct list item spacing 2', () => {
			const markdown = '- correct\n' + '  correct\n' + '\n' + '- correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect list item spacing', () => {
			const markdown = '- correct\n' + '  correct\n' + '- incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('list-item-spacing');
		});
	});

	describe('remark-lint-maximum-heading-length', () => {
		test('should pass on correct maximum heading length', () => {
			const markdown = '# This is a short headline\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect maximum heading length', () => {
			const markdown =
				'# This is a very long headline that exeeds reasonable headline length by quite a bit and triggers a warning\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('maximum-heading-length');
		});
	});

	describe('remark-lint-maximum-line-length', () => {
		test('should pass on correct maximum line length', () => {
			const markdown = 'This is a short line\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect maximum line length', () => {
			const markdown =
				'This is a very long line that exeeds reasonable headline length by quite a bit and triggers a warning\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('maximum-line-length');
		});
	});

	describe('remark-lint-no-blockquote-without-marker', () => {
		test('should pass on correct blockquote with markers', () => {
			const markdown = '> correct\n' + '> correct\n' + '> correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect blockquote without marker', () => {
			const markdown = '> correct\n' + '  incorrect\n' + '> correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-blockquote-without-marker');
		});
	});

	describe('remark-lint-no-consecutive-blank-lines', () => {
		test('should pass on correct consecutive blank lines', () => {
			const markdown = 'This is\n' + '\n' + 'correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect consecutive blank lines', () => {
			const markdown = 'This is\n' + '\n' + '\n' + 'incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-consecutive-blank-lines');
		});
	});

	describe('remark-lint-no-duplicate-defined-urls', () => {
		test('should pass on correct defined urls', () => {
			const markdown =
				'[correct][]\n' +
				'[correct too][]\n' +
				'\n' +
				'[correct]: http://example.com\n' +
				'[correct too]: http://example2.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect defined urls', () => {
			const markdown =
				'[correct][]\n' +
				'[incorrect][]\n' +
				'\n' +
				'[correct]: http://example.com\n' +
				'[incorrect]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-duplicate-defined-urls');
		});
	});

	describe('remark-lint-no-duplicate-definitions', () => {
		test('should pass on correct definitions', () => {
			const markdown =
				'[correct][]\n' +
				'[correct too][]\n' +
				'\n' +
				'[correct]: example.com\n' +
				'[correct too]: example2.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect definitions', () => {
			const markdown =
				'[incorrect][]\n' +
				'\n' +
				'[incorrect]: example.com\n' +
				'[incorrect]: example2.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-duplicate-definitions');
		});
	});

	describe('remark-lint-no-duplicate-headings', () => {
		test('should pass on correct headlines', () => {
			const markdown =
				'# Correct\n' + '\n' + '## Correct Too\n' + '\n' + '## Also Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect headlines', () => {
			const markdown =
				'# Correct\n' + '\n' + '## Incorrect\n' + '\n' + '## Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-duplicate-headings');
		});
	});

	describe('remark-lint-no-emphasis-as-heading', () => {
		test('should pass on correct heading', () => {
			const markdown = '# Correct\n' + '\n' + 'Paragraph.\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect heading', () => {
			const markdown = '*Incorrect*\n' + '\n' + 'Paragraph.\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-emphasis-as-heading');
		});
	});

	describe('remark-lint-no-empty-url', () => {
		test('should pass on correct url', () => {
			const markdown = '[correct](http://example.com)\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect url', () => {
			const markdown = '[incorrect]()\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-empty-url');
		});
	});

	describe('remark-lint-no-file-name-articles', () => {
		test.todo('Add test');
	});

	describe('remark-lint-no-file-name-consecutive-dashes', () => {
		test.todo('Add test');
	});

	describe('remark-lint-no-file-name-irregular-characters', () => {
		test.todo('Add test');
	});

	describe('remark-lint-no-file-name-mixed-case', () => {
		test.todo('Add test');
	});

	describe('remark-lint-no-file-name-outer-dashes', () => {
		test.todo('Add test');
	});

	describe('remark-lint-no-heading-content-indent', () => {
		test('should pass on correct heading content indent', () => {
			const markdown = '# Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect heading content indent', () => {
			const markdown = '#  Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-heading-content-indent');
		});
	});

	describe('remark-lint-no-heading-indent', () => {
		test('should pass on correct heading indent', () => {
			const markdown = '# Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect heading indent', () => {
			const markdown = ' # Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-heading-indent');
		});
	});

	describe('remark-lint-no-heading-like-paragraph', () => {
		test('should pass on correct heading', () => {
			const markdown =
				'# Correct 1\n' +
				'\n' +
				'## Correct 2\n' +
				'\n' +
				'### Correct 3\n' +
				'\n' +
				'#### Correct 4\n' +
				'\n' +
				'##### Correct 5\n' +
				'\n' +
				'###### Correct 6\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect heading', () => {
			const markdown =
				'# Correct 1\n' +
				'\n' +
				'## Correct 2\n' +
				'\n' +
				'### Correct 3\n' +
				'\n' +
				'#### Correct 4\n' +
				'\n' +
				'##### Correct 5\n' +
				'\n' +
				'###### Correct 6\n' +
				'\n' +
				'####### Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-heading-like-paragraph');
		});
	});

	describe('remark-lint-no-heading-punctuation', () => {
		test('should pass on correct heading punctuation', () => {
			const markdown = '# Correct\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect heading punctuation', () => {
			const markdown = '# Incorrect.j;:!?\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-heading-punctuation');
		});
	});

	describe('remark-lint-no-inline-padding', () => {
		test('should pass on correct inline padding', () => {
			const markdown = '[correct](https://example.com)\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect inline padding', () => {
			const markdown = '[ incorrect ](https://example.com)\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-inline-padding');
		});
	});

	describe('remark-lint-no-literal-urls', () => {
		test('should pass on correct URLs', () => {
			const markdown = '<https://example.com>\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect URLs', () => {
			const markdown = 'https://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-literal-urls');
		});
	});

	describe('remark-lint-no-missing-blank-lines', () => {
		test('should pass on correct blank lines', () => {
			const markdown = '# Correct\n' + '\n' + '## Correct 2\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect blank lines', () => {
			const markdown = '# Incorrect\n' + '## Incorrect 2\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-missing-blank-lines');
		});
	});

	describe('remark-lint-no-multiple-toplevel-headings', () => {
		test('should pass on correct toplevel headings', () => {
			const markdown = '# Correct\n' + '\n' + '## Correct 2\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect toplevel headings', () => {
			const markdown = '# Incorrect\n' + '\n' + '# Incorrect 2\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual(
				'no-multiple-toplevel-headings'
			);
		});
	});

	describe('remark-lint-no-paragraph-content-indent', () => {
		test('should pass on correct paragraph content indent', () => {
			const markdown = 'Correct\n' + 'Correct 2\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect paragraph content indent', () => {
			const markdown = 'Correct\n' + ' Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-paragraph-content-indent');
		});
	});

	describe('remark-lint-no-reference-like-url', () => {
		test('should pass on correct reference URL', () => {
			const markdown =
				'[correct][]\n' +
				'[correct 2](http://example.com)\n' +
				'\n' +
				'[correct]: http://example2.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect reference like URL', () => {
			const markdown =
				'[correct][]\n' +
				'[incorrect](correct)\n' +
				'\n' +
				'[correct]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-reference-like-url');
		});
	});

	describe('remark-lint-no-shell-dollars', () => {
		test('should pass on correct shell dollars', () => {
			const markdown = '```sh\n' + 'echo correct\n' + '```\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect shell dollars', () => {
			const markdown = '```sh\n' + '$ echo incorrect\n' + '```\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-shell-dollars');
		});
	});

	describe('remark-lint-no-shortcut-reference-image', () => {
		test('should pass on correct shortcut reference image', () => {
			const markdown =
				'![correct][]\n' + '\n' + '[correct]: http://example.com/test.png\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect shortcut reference image', () => {
			const markdown =
				'![incorrect]\n' + '\n' + '[incorrect]: http://example.com/test.png\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-shortcut-reference-image');
		});
	});

	describe('remark-lint-no-shortcut-reference-link', () => {
		test('should pass on correct shortcut reference link', () => {
			const markdown =
				'[correct][]\n' + '\n' + '[correct]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect shortcut reference link', () => {
			const markdown =
				'[incorrect]\n' + '\n' + '[incorrect]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-shortcut-reference-link');
		});
	});

	describe('remark-lint-no-table-indentation', () => {
		test('should pass on correct table indentation', () => {
			const markdown =
				'| A       | B       |\n' +
				'| ------- | ------- |\n' +
				'| correct | correct |\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect table indentation', () => {
			const markdown =
				' | A       | B       |\n' +
				' | ------- | ------- |\n' +
				' | correct | correct |\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(3);
			expect(result.messages[0].ruleId).toEqual('no-table-indentation');
			expect(result.messages[1].ruleId).toEqual('no-table-indentation');
			expect(result.messages[2].ruleId).toEqual('no-table-indentation');
		});
	});

	describe('remark-lint-no-undefined-references', () => {
		test('should pass on correct references', () => {
			const markdown =
				'[correct][]\n' + '\n' + '[correct]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect references', () => {
			const markdown = '[incorrect][]\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-undefined-references');
		});
	});

	describe('remark-lint-no-unneeded-full-reference-image', () => {
		test('should pass on correct full reference images', () => {
			const markdown =
				'![correct][]\n' + '\n' + '[correct]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect full reference images', () => {
			const markdown =
				'![incorrect][incorrect]\n' +
				'\n' +
				'[incorrect]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual(
				'no-unneeded-full-reference-image'
			);
		});
	});

	describe('remark-lint-no-unneeded-full-reference-link', () => {
		test('should pass on correct full reference link', () => {
			const markdown =
				'[correct][]\n' + '\n' + '[correct]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect full reference link', () => {
			const markdown =
				'[incorrect][incorrect]\n' + '\n' + '[incorrect]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual(
				'no-unneeded-full-reference-link'
			);
		});
	});

	describe('remark-lint-no-unused-definitions', () => {
		test('should pass on correct definitions', () => {
			const markdown =
				'[correct][]\n' + '\n' + '[correct]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect definitions', () => {
			const markdown = '[incorrect]: http://example.com\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('no-unused-definitions');
		});
	});

	describe('remark-lint-ordered-list-marker-style', () => {
		test('should pass on correct list marker style', () => {
			const markdown = '1. Correct\n' + '2. Correct 2\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect list marker style', () => {
			const markdown = '1. Correct\n' + '\n' + '2) Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('ordered-list-marker-style');
		});
	});

	describe('remark-lint-ordered-list-marker-value', () => {
		test('should pass on correct list marker value', () => {
			const markdown = '1. Correct\n' + '2. Correct 2\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect list marker value', () => {
			const markdown = '1. Correct\n' + '1. Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('ordered-list-marker-value');
		});
	});

	describe('remark-lint-rule-style', () => {
		test('should pass on correct rule style', () => {
			const markdown = '---\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect rule style', () => {
			const markdown = '***\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('rule-style');
		});
	});

	describe('remark-lint-strikethrough-marker', () => {
		test('should pass on correct strikethrough marker', () => {
			const markdown = '~correct~\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect strikethrough marker', () => {
			const markdown = '~~incorrect~~\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('strikethrough-marker');
		});
	});

	describe('remark-lint-strong-marker', () => {
		test('should pass on correct strong marker', () => {
			const markdown = '*correct*\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect strong marker', () => {
			const markdown = '_incorrect_\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(1);
			expect(result.messages[0].ruleId).toEqual('emphasis-marker');
		});
	});

	describe('remark-lint-table-cell-padding', () => {
		test('should pass on correct table cell padding', () => {
			const markdown =
				'| A       | B       |\n' +
				'| ------- | ------- |\n' +
				'| correct | correct |\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect table cell padding', () => {
			const markdown =
				'| A       | B       |\n' +
				'| ------- | ------- |\n' +
				'|incorrect| correct |\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(2);
			expect(result.messages[0].ruleId).toEqual('table-cell-padding');
			expect(result.messages[1].ruleId).toEqual('table-cell-padding');
		});
	});

	describe('remark-lint-table-pipe-alignment', () => {
		test('should pass on correct table pipe alignment', () => {
			const markdown =
				'| A       | B       |\n' +
				'| ------- | ------- |\n' +
				'| correct | correct |\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect table pipe alignment', () => {
			const markdown =
				'| A | B |\n' + '| --- | --- |\n' + '| incorrect | incorrect |\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(2);
			expect(result.messages[0].ruleId).toEqual('table-pipe-alignment');
			expect(result.messages[1].ruleId).toEqual('table-pipe-alignment');
		});
	});

	describe('remark-lint-table-pipes', () => {
		test('should pass on correct table pipes', () => {
			const markdown =
				'| A       | B       |\n' +
				'| ------- | ------- |\n' +
				'| correct | correct |\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect table pipes', () => {
			const markdown =
				'| A       | B       |\n' +
				'| ------- | ------- |\n' +
				'| correct | correct \n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(3);
			expect(result.messages[0].ruleId).toEqual('table-cell-padding');
			expect(result.messages[1].ruleId).toEqual('table-pipe-alignment');
			expect(result.messages[2].ruleId).toEqual('table-pipes');
		});
	});

	describe('remark-lint-unordered-list-marker-style', () => {
		test('should pass on correct list marker style', () => {
			const markdown = '- Correct\n' + '- Correct 2\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(0);
		});

		test('should fail on incorrect list marker style', () => {
			const markdown = '* Incorrect\n' + '\n' + '+ Incorrect\n';
			const result = processor.processSync(markdown);
			expect(result.messages.length).toBe(2);
			expect(result.messages[0].ruleId).toEqual('unordered-list-marker-style');
		});
	});
});
