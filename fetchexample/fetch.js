// ES6 way
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))

// JQuery way
$.get('https://jsonplaceholder.typicode.com/posts', function(data){
  console.log(data)
});

// JQuery with arrow function callback
//$.get('https://jsonplaceholder.typicode.com/posts', data => console.log(data));
