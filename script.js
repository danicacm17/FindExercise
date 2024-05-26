/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(users, username) {
  // Use the find method to search for the first object with the specified username
  return users.find(function(user) {
    return user.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  // Find the index of the user object with the specified username
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  });

  // If no user object is found with the specified username, return early
  if(foundIndex === -1) return;

  // Remove the user object from the array using splice and return it
  return usersArray.splice(foundIndex,1)[0];
}
