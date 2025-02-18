const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        //Handling undefined yearOfDeath
        if (current.yearOfDeath === undefined) {
            let currentYear = new Date().getFullYear();
            current.yearOfDeath = currentYear;
        }
        else {
            current.yearOfDeath = current.yearOfDeath;
        }

        // computes and compares the age between objects
        return (current.yearOfDeath - current.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ?
            current : oldest; 
    }, people[0])       
};

// Do not edit below this line
module.exports = findTheOldest;
