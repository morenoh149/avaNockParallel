import test from 'ava'
import axios from 'axios'
import nock from 'nock'

const testUrl = 'http://foo.com'
test('test one', t => {
  const scope = nock(testUrl)
    .log(console.log)
    .get('/')
    .times(10)
    .reply(200, 'hello one')

  return new Promise((resolve, reject) => {
    axios
      .get(testUrl)
      .then((apiResponse) => {
        resolve(apiResponse)
      })
  }).then((apiResponse) => {
    t.true(scope.pendingMocks().length == 9)
  })
})

test('test two', t => {
   const scope = nock(testUrl)
    .log(console.log)
    .get('/')
    .times(1)
    .reply(200, 'hello two')

  return new Promise((resolve, reject) => {
    axios
      .get(testUrl)
      .then((apiResponse) => {
        resolve(apiResponse)
      })
  }).then((apiResponse) => {
    t.true(scope.isDone())
  })
})
