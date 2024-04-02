const axios = require('axios');

// GET Request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('GET Request:', response.data);
  })
  .catch(error => {
    console.error('GET Request Error:', error);
  });

// POST Request ------------ JS Object
const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

axios.post('https://jsonplaceholder.typicode.com/posts', postData)
  .then(response => {
    console.log('POST Request:', response.data);
  })
  .catch(error => {
    console.error('POST Request Error:', error);
  });

// PUT Request ---------------JS Object
const putData = {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
};

axios.put('https://jsonplaceholder.typicode.com/posts/1', putData)
  .then(response => {
    console.log('PUT Request:', response.data);
  })
  .catch(error => {
    console.error('PUT Request Error:', error);
  });

// DELETE Request -------------------- JS Object
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('DELETE Request:', response.data);
  })
  .catch(error => {
    console.error('DELETE Request Error:', error);
  });
