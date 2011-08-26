var vows = require('vows'),
    assert = require('assert'),
    jwt = require('../jwt');

vows.describe('JWT').addBatch({
    'A simple json object': {
        topic: {"foo":"bar"},

        'encodes and decodes': function (payload) {
            var secret = "secret"
            var encoded_payload = jwt.encode(payload, secret);
            var decoded_payload = jwt.decode(encoded_payload, secret);
            assert.deepEqual(payload, decoded_payload);
        }
    }
}).export(module); // Export the Suite
