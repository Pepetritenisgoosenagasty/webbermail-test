fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((data) => console.log(data))
         .catch((error) => console.log(error))
        

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
// xhr.onload = function(){
//     console.log(xhr.responseText);
// };
// xhr.send();