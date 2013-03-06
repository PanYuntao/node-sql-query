var common     = require('../common');
var assert     = require('assert');
var dialect    = common.getDialect('mysql');

assert.equal(
	dialect.escapeId('col'),
	"`col`"
);

assert.equal(
	dialect.escapeId('table', 'col'),
	"`table`.`col`"
);

assert.equal(
	dialect.escapeId('table', 'co`l'),
	"`table`.`co``l`"
);

assert.equal(
	dialect.escapeVal(123),
	"123"
);

assert.equal(
	dialect.escapeVal('abc'),
	"'abc'"
);

assert.equal(
	dialect.escapeVal('ab\'c'),
	"'ab\\'c'"
);

assert.equal(
	dialect.escapeVal(true),
	"true"
);

assert.equal(
	dialect.escapeVal(false),
	"false"
);