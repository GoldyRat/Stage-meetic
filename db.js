const userList = [];
const compareUsers = require('./algo');

function userExist( newUser) {
// Check if user already exists in the list
     return userList.some(user => 
         user.name === newUser.name &&
         user.age === newUser.age &&
         user.gender === newUser.gender &&
         user.wish === newUser.wish
     );
}
function createUser (newUser) {
    userList.push({...newUser} );
}

function addUser(userData) {
    
    const userExists = userExist(userData);
    console.log('userexist:' +userExists);
    // If user does not exist, add them to the list
    if (userExists== false) {
        let roomId = null;

        for (const user of userList) {
            if (compareUsers(userData, user)) {
                console.log(`New user ${userData.name} matches with existing user ${user.name}`);
                userData.roomId = user.roomId;
                roomId = true
                break;  
            }
        }
        
        if (roomId == null) {
            console.log("no match found");
            userData.roomId = Math.random() * 100;
        }
        
       createUser(userData);
       // console.log(userList);
        return userData.roomId;
    } else {
        console.log(`User ${userData.name} already exists in the list.`);
    }
}


module.exports = {
    userList,
    addUser,
    createUser,
    userExist
};