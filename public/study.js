//const sayHello = (name = "hwangbok") => `Hello ${name}`;

//const hwangbok = sayHello();
//console.log(hwangbok);

//const button = document.querySelector("button");
//button.addEventListener("click", (event) => console.log(event));

const human = {
  name: "hwangbok",
  lastName: "Lee",
  nationality: "Korea",
  favFood: {
    breakfast: "gimbap",
    lunch: "gimchi",
    dinner: "samgyeopsal",
  },
};

//const name = human.name;
//const lastName = human.lastName;

const {
  name,
  lastName,
  nationality: Nat,
  favFood: { dinner, breakfast, lunch },
} = human;
console.log(name, lastName, Nat, dinner, breakfast, lunch);

const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = [days + otherDays];
let all_Days = [days, otherDays];
const all_D = [...days, ...otherDays, "Sun"];

console.log(allDays, all_Days, all_D);

const ob = {
  first: "hi",
  second: "hello",
};

const ab = {
  third: "bye, bye",
};

const two = { ...ob, ...ab };
const three = { ob, ab };

console.log(two);
console.log(three);

class person {
  constructor(name, lastName = "Lee") {
    this.name = name;
    this.lastName = lastName;
  }
}

const hblee = new person("hb", "lee");
console.log(hblee);
console.log(hblee.name);
console.log(hblee.lastName);

class son extends person {
  cry() {
    console.log("Ungaeeeeeeeeee");
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const doyoon = new son("doyoon", "kim");
console.log(doyoon);
console.log(doyoon.cry(), doyoon.sayName());

const dayss = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const addSmile = (day) => `${day}`;

//const smilingDays = dayss.map(addSmile);
//const smilingDays = dayss.map((day) => `${day}`);

const smilingDays = dayss.map((day, index) => `#${index + 1} ${day}`);

console.log(smilingDays);

const numbers = [2, 31, 44, 1132, 12, 556, 791, 2, 3152, 6542, 1864, 359];

const testCondition = (number) => number < 1000;
const biggerthan1 = numbers.filter((number) => number > 1000);
const biggerthan2 = numbers.filter(testCondition);
console.log(biggerthan1, biggerthan2);

let posts = ["hi", "hello", "bye bye"];
posts = posts.filter((post) => post !== "hi");
console.log(posts);

let posts2 = ["hi", "hello", "bye bye"];
posts2.forEach((post) => console.log(post));
posts2.push("new");
console.log(posts2);

let greetings = ["hi", "Sup"];
if (!greetings.includes("hello")) {
  greetings.push("hello");
}
console.log(greetings);
console.log(greetings.reverse());
