// .sort
let approved = ["Maria", "Matheus", "Victor", "Kamylla"];
console.log(approved);

let approvedOrdaineds = approved.sort();
console.log(approvedOrdaineds);
console.log("array original modificado", approved);

let ages = [32, 21, 33, 43, 1, 12, 8];
let agesOrdaineds = ages.sort((a, b) => a - b);

console.log(agesOrdaineds);

// .unshift
const cars = ["Ford", "Fiat", "Vw"];
console.log(cars.unshift("Honda", "Kia"));
console.log(cars);

// .push
console.log(cars.push("Ferrari"));
console.log(cars);

// .splice
let scores = [1, 2, 3, 4, 5, 6, 7, 8];
let deletedScores = scores.splice(0, 2); // [1, 2]
console.log(scores); // [3, 4, 5, 6, 7, 8]
let deletedScores2 = scores.splice(0, 3); // [3, 4, 5]
console.log(scores); // [6, 7, 8]

let colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple"); // adiciona apos a cor green
console.log(colors);

colors.splice(2, 0, "grey", "blue", "yellow"); // adiciona apos a cor green
console.log(colors);

let languages = ["c", "c++", "java", "javascript"];
languages.splice(1, 1, "python", 'php', 'ruby');
console.log(languages)


