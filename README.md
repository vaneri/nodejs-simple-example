# nodejs-simple-example
A very basic and simple example using nodejs, axios, jest, docker 

- How to get it started?
  npm install
  npm start 

  "run on port 3000"

- Usage of docker ([more information](https://docs.docker.com/language/nodejs/))
  - docker build --tag nodejs-simple-example .
  - docker run --publish 8000:8000 nodejs-simple-example

Features
- Usage of async methods with Promise.all for parallelism 
- Testing using a simple mocking strategy
- Definition of axios.interceptors.request and axios.interceptors.response for catching request and response done to an external service in making use of a timeout strategy
