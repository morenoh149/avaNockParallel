# ava nock parallel example

Demonstrates a problem when testing the nock environment using parallel ava tests

## error
```bash
$ yarn test
yarn test v0.18.1
$ ava 
matching http://foo.com:80 to GET http://foo.com:80/: true
matching http://foo.com:80 to GET http://foo.com:80/: true

  2 failed

  test one
    
  t.true(scope.pendingMocks().length == 9)
                              |           
                              1           
  
    _promise2.default.then.apiResponse (test.js:20:5)

  test two
    
  t.true(scope.isDone())
               |        
               false    
  
    _promise2.default.then.apiResponse (test.js:38:5)

error Command failed with exit code 1.
```
