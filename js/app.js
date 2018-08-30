const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//     const postsList = JSON.parse(posts);
//     let output = '';
//     postsList.forEach(post => {
//       output += `
//       <li class="list-group-item">
//         <ul class="list-group">
//           <li class="list-group-item"><strong>User Id: </strong>${post.userId}</li>
//           <li class="list-group-item"><strong>Post Id: </strong>${post.id}</li>
//           <li class="list-group-item" style="background:rgb(255, 150, 101);"><strong>Title: </strong>${post.title}</li>
//           <li class="list-group-item"><strong>Body: </strong>${post.body}</li>
//         </ul>
//       </li>
//       `;
//     });

//     document.getElementById('output').innerHTML = output;
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//     const input = JSON.parse(post);
//     const output = `
//       <li class="list-group-item">
//         <ul class="list-group">
//           <li class="list-group-item"><strong>User Id: </strong>${input.userId}</li>
//           <li class="list-group-item"><strong>Post Id: </strong>${input.id}</li>
//           <li class="list-group-item" style="background:rgb(255, 150, 101);"><strong>Title: </strong>${input.title}</li>
//           <li class="list-group-item"><strong>Body: </strong>${input.body}</li>
//         </ul>
//       </li>
//     `;

//     document.getElementById('output').innerHTML = output;
//   }
// });

// Post Request
// Create data
const data = {
  userId: 101,
  title: 'Custom Post',
  body: 'This is a custom post'
}
// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Put Request
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});