// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'geumdam',
    age: 35,
    hobbies:['Sports', 'Cocking'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}