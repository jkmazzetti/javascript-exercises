function findTheOldest(people) {
    return people.reduce((oldest, person) => {
        if (person.yearOfDeath === undefined) {
            if (oldest.yearOfDeath != undefined && new Date().getFullYear() - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
                oldest = person;
            } else if (new Date().getFullYear() - person.yearOfBirth > new Date().getFullYear() - oldest.yearOfBirth) {
                oldest = person;
            }
        } else {
            if (oldest.yearOfDeath === undefined && person.yearOfDeath - person.yearOfBirth > new Date().getFullYear() - oldest.yearOfBirth) {
                oldest = person;
            } else if (person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
                oldest = person;
            }

        }

        return oldest;
    }, people[0]);

}
// Do not edit below this line
module.exports = findTheOldest;
