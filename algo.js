
// Function to compare users based on defined criteria
function compareUsers(user1, user2) {
    if (
        user1.name === user2.name &&
        user1.age === user2.age &&
        user1.gender === user2.gender &&
        user1.wish === user2.wish
    ) {
        return false;
    }
   
    const ageCriteria = Math.abs(user1.age - user2.age) <= 5;
    const genderCriteria = user1.gender === user2.wish && user1.wish === user2.gender
    return ageCriteria && genderCriteria
}

module.exports = compareUsers;