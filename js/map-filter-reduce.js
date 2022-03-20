const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const moreThan3Languages = users.filter(function (user){
    return user.languages.length >= 3;
});
console.log(moreThan3Languages);

const arrStrEmails = users.map(function (user){
    return user.email;
});

console.log(arrStrEmails);

const totalYears = users.reduce(function (accumulation, currentValue){
    return accumulation + currentValue.yearsOfExperience / 5
}, 0);

console.log(totalYears);




const longestEmail = users.reduce(function (accumulation, currentValue){
    console.log(accumulation.length)
    // console.log(currentValue)
    if (accumulation.length < currentValue.email.length) {
        accumulation = currentValue.email;
    }
    return accumulation;
}, "");

console.log(longestEmail);




const userNamesStr = users.reduce(function (accumulation, currentValue, index, array) {
    if (index === array.length - 1) {
        accumulation += currentValue.name + '.';
    }
    else {
        accumulation += currentValue.name + ',';
    }
    return accumulation;
}, "Your instructors are: ");

console.log(userNamesStr);


//
// const userNamesStr = users.reduce(function (previousValue, currentValue) {
//     previousValue += currentValue.name + ',';
//     return previousValue;
// }, "Your instructors are: ");
//
// console.log(userNamesStr);


const newArray = users.reduce(function (accumulation, currentValue){
    currentValue.languages.forEach(function (e){
        if (accumulation.includes(e) === false) {
            accumulation.push(e)
        }
    });
        return accumulation
}, []);

console.log(newArray);




