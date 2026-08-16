// Basic Web Syntax Examples

// 1. DOM Manipulation
document.getElementById('id').innerHTML = 'Hello, World!';
document.querySelector('.class').style.color = 'blue';

// 2. Event Listeners
document.addEventListener('click', function() {
  console.log('Clicked!');
});

// 3. Fetch API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// 4. Local Storage
localStorage.setItem('key', 'value');
const item = localStorage.getItem('key');

// 5. Basic Function
function greet(name) {
  return `Hello, ${name}!`;
}

// 6. Arrow Function
const add = (a, b) => a + b;

// 7. Class Definition
class User {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}
