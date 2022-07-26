// .slice
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice(3); // [4, 5]

let colors = ["red", "green", "blue", "yellow", "purple"];
let rgb = colors.slice(0, 3); // red, green, blue
console.log(rgb);

// .concat
let otherColors = ["Blue", " ", "Green", " ", "Teal"];
let result = [].concat(...otherColors); // [ 'Blue', ' ', 'Green', ' ', 'Teal' ]
let result2 = "".concat(...otherColors); // Blue, Green, Teal

// exericios

// remova o primeiro elemento da array e retorne
const foods = ["Pizza", "Frango", "Carne", "Macarrão"];
const firstElement = foods.shift(); // 'Pizza'

// remova o último elemento da array e retorne
const lastElement = foods.pop(); // 'Macarrão'

// adicione 'Arroz' ao final da array
const newElementEndArray = foods.push("Arroz");
console.log(foods); // ['Frango', 'Carne', 'Arroz']

// adicione 'Peixe' e 'Batata ao começo da array
const newElementStartArray = foods.unshift("Peixe", "Batata");
console.log(foods); // [ 'Peixe', 'Batata', 'Frango', 'Carne', 'Arroz' ]

// ordene os estudantes por ordem alfabética
const students = ["´Márcio", "Brenda", "Joana", "Kleber", "Júlia"];
const studentsOrdered = students.sort(); // [ 'Brenda', 'Joana', 'Júlia', 'Kleber', '´Márcio' ]

// inverta os estudantes
const studentsInverted = students.reverse(); // [ '´Márcio', 'Kleber', 'Júlia', 'Joana', 'Brenda' ]

// verifique se Joana faz parte dos estudantes
const isInclued = students.includes("Joana"); // true
const isInclued2 = students.includes("Juliana"); // false


// substituir section por ul e div por li
let html =
  " <section> <div>Sobre</div> <div>Produtos</div> <div>Contatos</div> </section> ";

  html = html.split('section').join('ul').split('div').join('li')

  // remover o ultimo elemento, mas antes de remover, salvar o array original
  const carros = ['ford', 'fiat', 'honda']
  const carrosCopied = carros.slice()
  const removedCars = carros.pop()
  console.log(carrosCopied)
  console.log(removedCars)