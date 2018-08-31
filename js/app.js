const http = new EasyHTTP();

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(user => {
      output += `
        <li class="list-group-item">
          <ul class="list-group">
            <li class="list-group-item"><strong>Id : </strong>${user.id}</li>
            <li class="list-group-item bg-light"><strong>Name : </strong>${user.name}</li>
            <li class="list-group-item"><strong>Username : </strong>${user.username}</li>
            <li class="list-group-item"><strong>Email : </strong>${user.email}</li>
          </ul>
        </li>
      `;
    });

    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));

// User data
// const data = {
//   name: 'John Doe',
//   username: 'johndoe',
//   email: 'jdoe@gmail.com'
// }

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));