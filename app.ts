// const person: {
//     name: string;
//     age: number;
// } = {
const person:{
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string],
} = {
    name: 'geumdam',
    age: 35,
    hobbies:['Sports', 'Cocking'],
    role: [2, 'author'],
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}