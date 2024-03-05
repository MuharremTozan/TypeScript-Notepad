// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   //duz bir array
//   role: [number, string];
//   //tupple tipinde bir array 2 tane veri alabiliyor ve verilerin tipleri garantilenmis durumda
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [1, 'Developer']
// };

// person.role.push('admin');
// Hata vermez
// person.role[1] = 10;
// Hata verir

enum Role { AUTHOR = 'AUTHOR', ADMIN = 0, DEVELOPER = 1, };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
};


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('Author');
}
