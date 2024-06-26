const userList = [];
const compareUsers = require('./algo');

function addUser(userData) {
    // Check if user already exists in the list
    const userExists = userList.some(user => 
        user.name === userData.name &&
        user.age === userData.age &&
        user.gender === userData.gender &&
        user.wish === userData.wish
    );

    // If user does not exist, add them to the list
    if (!userExists) {
        userList.push({...userData});
        
        // Check for matches with existing users
        for (let i = 0; i < userList.length - 1; i++) {
            if (compareUsers(userList[userList.length - 1], userList[i])) {
                console.log(`New user ${userData.name} matches with existing user ${userList[i].name}`);
             
            }
        }
    } else {
        console.log(`User ${userData.name} already exists in the list.`);
    }
}

module.exports = {
    userList,
    addUser
};