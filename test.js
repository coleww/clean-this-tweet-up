var tap = require('tap')

var cleanTweet = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(cleanTweet('world'), 'hello world', 'does it')
})
