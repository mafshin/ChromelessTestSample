const {
    Chromeless
} = require('Chromeless')
var http = require('http');
var assert = require('assert');



async function run() {
    const chromeless = new Chromeless({
        remote: false
    })

    const url = 'https://github.com/graphcool/chromeless';

    var authorName = await chromeless
        .goto(url)
        .wait('.author')
        .evaluate(() => {
            return document.querySelector('.author a').innerText;
        });

    await chromeless.end()

    return authorName
}

describe('app', function() {
    describe('RepositoryAuthor', function() {
        it('should return "graphcool" as auther of repository', async() => {

            var expected = "graphcool";

            var actual = await run();

            assert.equal(actual, expected);
        })
    })
})