jQuery(function() {
    $('button').on('click', function() {
        QUnit.test('password test', function (assert) {
            assert.equal($("input").val(), 12345, "password match")
        })
   })
})


// QUnit.test('Hello world Qunit', function (assert) {
//     assert.ok('1', ' string 1 passed')
//     assert.ok(true, 'true passed')
//     assert.ok(!false, 'not false passed')
// })