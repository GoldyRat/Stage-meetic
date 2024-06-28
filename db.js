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

function checkMatch(userData) {
    
    const userExists = userExist(userData);
    console.log('userexist:' +userExists);
    // If user does not exist, add them to the list
    if (userExists== false) {
        let roomId = null;

        for (let i = 0; i < userList.length; i++) {
            const user = userList[i];
            if (compareUsers(userData, user)) {
                console.log(`New user ${userData.name} matches with existing user ${user.name}`);
                userData.roomId = user.roomId;
                roomId = true;
                userList.splice(i, 1);
            
                break;  
            }
        }
        
        
        if (roomId == null) {
            console.log("no match found");
            userData.roomId = Math.random() * 100;
            createUser(userData);
            
        }
        
       
       // console.log(userList);
        return userData.roomId;
    } else {
        console.log(`User ${userData.name} already exists in the list.`);

    }
}


module.exports = {
    userList,
    checkMatch,
    createUser,
    userExist
    
};