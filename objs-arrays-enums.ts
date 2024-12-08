// const person: {
//     name: string;
//     age: number;
// } = {

enum Role { ADMIN = 'ADMIN', READ_ONLY = '100', AUTHOR = 'AUTHOR' }

const person = {
    name: 'geumdam',
    age: 35,
    hobbies:['Sports', 'Cocking'],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}