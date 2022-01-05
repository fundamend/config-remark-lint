import lint from 'remark-lint';
import blockquoteIndentation from 'remark-lint-blockquote-indentation';
import checkboxCharacterStyle from 'remark-lint-checkbox-character-style';
import checkboxContentIndent from 'remark-lint-checkbox-content-indent';
import codeBlockStyle from 'remark-lint-code-block-style';
import definitionCase from 'remark-lint-definition-case';
import definitionSpacing from 'remark-lint-definition-spacing';
import emphasisMarker from 'remark-lint-emphasis-marker';
import fencedCodeFlag from 'remark-lint-fenced-code-flag';
import fileExtension from 'remark-lint-file-extension';
import finalDefinition from 'remark-lint-final-definition';
import finalNewline from 'remark-lint-final-newline';
import firstHeadingLevel from 'remark-lint-first-heading-level';
import hardBreakSpaces from 'remark-lint-hard-break-spaces';
import headingIncrement from 'remark-lint-heading-increment';
import headingStyle from 'remark-lint-heading-style';
import linebreakStyle from 'remark-lint-linebreak-style';
import linkTitleStyle from 'remark-lint-link-title-style';
import listItemContentIndent from 'remark-lint-list-item-content-indent';
import listItemBulletIndent from 'remark-lint-list-item-bullet-indent';
import listItemIndent from 'remark-lint-list-item-indent';
import lintListItemSpacing from 'remark-lint-list-item-spacing';
import maximumHeadingLength from 'remark-lint-maximum-heading-length';
import maximumLineLength from 'remark-lint-maximum-line-length';
import noBlockquoteWithoutMarker from 'remark-lint-no-blockquote-without-marker';
import noConsecutiveBlankLines from 'remark-lint-no-consecutive-blank-lines';
import noDuplicateDefinedUrls from 'remark-lint-no-duplicate-defined-urls';
import noDuplicateDefinitions from 'remark-lint-no-duplicate-definitions';
import noDuplicateHeadings from 'remark-lint-no-duplicate-headings';
import noEmphasisAsHeading from 'remark-lint-no-emphasis-as-heading';
import noEmptyURL from 'remark-lint-no-empty-url';
import noFileNameArticle from 'remark-lint-no-file-name-articles';
import noFileNameConsecutiveDashes from 'remark-lint-no-file-name-consecutive-dashes';
import noFileNameIrregularCharacters from 'remark-lint-no-file-name-irregular-characters';
import nofileNameMixedCase from 'remark-lint-no-file-name-mixed-case';
import nofileNameOuterDashes from 'remark-lint-no-file-name-outer-dashes';
import noHeadingContentIndent from 'remark-lint-no-heading-content-indent';
import noHeadingIndent from 'remark-lint-no-heading-indent';
import noHeadingLikeParagraph from 'remark-lint-no-heading-like-paragraph';
import noHeadingPunctuation from 'remark-lint-no-heading-punctuation';
import noInlinePadding from 'remark-lint-no-inline-padding';
import noLiteralUrls from 'remark-lint-no-literal-urls';
import noMissingBlankLines from 'remark-lint-no-missing-blank-lines';
import noMultipleToplevelHeadings from 'remark-lint-no-multiple-toplevel-headings';
import noParagraphContentIndent from 'remark-lint-no-paragraph-content-indent';
import noReferenceLikeUrl from 'remark-lint-no-reference-like-url';
import noShellDollars from 'remark-lint-no-shell-dollars';
import noShortcutReferenceImage from 'remark-lint-no-shortcut-reference-image';
import noShortcutReferenceLink from 'remark-lint-no-shortcut-reference-link';
import noTableIndentation from 'remark-lint-no-table-indentation';
import noTabs from 'remark-lint-no-tabs';
import noUndefinedReferences from 'remark-lint-no-undefined-references';
import noUnneededFullReferenceImage from 'remark-lint-no-unneeded-full-reference-image';
import noUnneededFullReferenceLink from 'remark-lint-no-unneeded-full-reference-link';
import noUnusedDefinitions from 'remark-lint-no-unused-definitions';
import orderedListMarkerStyle from 'remark-lint-ordered-list-marker-style';
import orderedListMarkerValue from 'remark-lint-ordered-list-marker-value';
import ruleStyle from 'remark-lint-rule-style';
import strikethroughMarker from 'remark-lint-strikethrough-marker';
import strongMarker from 'remark-lint-strong-marker';
import tableCellPadding from 'remark-lint-table-cell-padding';
import tablePipeAlignment from 'remark-lint-table-pipe-alignment';
import tablePipes from 'remark-lint-table-pipes';
import unorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style';

import noAutoLinkWihtoutProtocol from 'remark-lint-no-auto-link-without-protocol';

const plugins = [
	lint,
	[blockquoteIndentation, 2],
	[checkboxCharacterStyle, { checked: 'x', unchecked: ' ' }],
	checkboxContentIndent,
	[codeBlockStyle, 'fenced'],
	definitionCase,
	definitionSpacing,
	[emphasisMarker, '*'],
	fencedCodeFlag,
	[fileExtension, 'md'],
	finalDefinition,
	finalNewline,
	firstHeadingLevel,
	hardBreakSpaces,
	headingIncrement,
	[headingStyle, 'atx'],
	[linebreakStyle, 'unix'],
	[linkTitleStyle, '"'],
	listItemBulletIndent,
	listItemContentIndent,
	[listItemIndent, 'space'],
	lintListItemSpacing,
	maximumHeadingLength,
	[maximumLineLength, 80],
	noBlockquoteWithoutMarker,
	noConsecutiveBlankLines,
	noDuplicateDefinedUrls,
	noDuplicateDefinitions,
	noDuplicateHeadings,
	noEmphasisAsHeading,
	noEmptyURL,
	noFileNameArticle,
	noFileNameConsecutiveDashes,
	noFileNameIrregularCharacters,
	nofileNameMixedCase,
	nofileNameOuterDashes,
	noHeadingContentIndent,
	noHeadingIndent,
	noHeadingLikeParagraph,
	noHeadingPunctuation,
	noInlinePadding,
	noLiteralUrls,
	noMissingBlankLines,
	noMultipleToplevelHeadings,
	noParagraphContentIndent,
	noReferenceLikeUrl,
	noShellDollars,
	noShortcutReferenceImage,
	noShortcutReferenceLink,
	noTableIndentation,
	noTabs,
	noUndefinedReferences,
	noUnneededFullReferenceImage,
	noUnneededFullReferenceLink,
	noUnusedDefinitions,
	[orderedListMarkerStyle, '.'],
	[orderedListMarkerValue, 'ordered'],
	[ruleStyle, '---'],
	[strikethroughMarker, '~'],
	[strongMarker, '*'],
	[tableCellPadding, 'padded'],
	tablePipeAlignment,
	tablePipes,
	unorderedListMarkerStyle,

	noAutoLinkWihtoutProtocol
];
const settings = {};

export default {
	plugins: plugins,
	settings: settings
};
