

function findAllHobbyists(hobby, hobbies) {
    let array = [];
    for (let key in hobbies) {
        if((hobbies[key]).includes(hobby)){
            array.push(key)
        }
    }
    return array;
}

var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
};

console.log(findAllHobbyists('Yoga', hobbies));