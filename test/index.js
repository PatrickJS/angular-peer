var test = require("tape")

var angularPeer = require("../index.js")

test("angularPeer is a function", function (assert) {
    assert.equal(typeof angularPeer, "function")
    assert.end()
})
