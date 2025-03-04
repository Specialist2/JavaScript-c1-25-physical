let car = {
  brand: "Toyota",
  model: "Probox",
  yom: 2018,
  isKenyanUsed: false,
  mileage: 25477,
  colors: ["white", "green", "orange"],
};

// accessing data in an object
//e.g. log the year of make for this car

console.log(car.yom); //using the dot notation

//log the second color of the car -- green
console.log(car.colors[1]);

const people = [
  {
    name: "Albert",
    age: 50,
    isKenyan: true,
    schools: ["Meteitei", "JKUAT", "MKU"],
    work: {
      company: "Eldohub",
      role: "Instructor",
      since: 2022,
    },
    siblings: [
      { name: "Alex", age: 31 },
      { name: "Alfred", age: 25 },
      { name: "Allan", age: 29 },
    ],
    height: 5.9,
  },
  {
    name: "Beatrice",
    age: 35,
    isKenyan: false,
    schools: ["Hillcrest", "Moi University"],
    work: {
      company: "Technovation",
      role: "Software Engineer",
      since: 2018,
    },
    siblings: [],
    height: 5.5,
  },
  {
    name: "Charles",
    age: 42,
    isKenyan: true,
    schools: ["Maranda", "University of Nairobi"],
    work: {
      company: "Acme Corporation",
      role: "Manager",
      since: 2015,
    },
    siblings: [
      { name: "Christine", age: 38 },
      { name: "Caleb", age: 35 },
    ],
    height: 6.1,
  },
  {
    name: "Diana",
    age: 28,
    isKenyan: false,
    schools: ["St. Mary's", "Strathmore University"],
    work: {
      company: "FinTech Ltd",
      role: "Data Analyst",
      since: 2020,
    },
    siblings: [{ name: "David", age: 30 }],
    height: 5.7,
  },
  {
    name: "Edith",
    age: 65,
    isKenyan: true,
    schools: ["Ki̅rei", "Egerton University"],
    work: {
      company: "Retired",
      role: "Teacher",
      since: 1980,
    },
    siblings: [],
    height: 5.4,
  },
  {
    name: "Felix",
    age: 19,
    isKenyan: true,
    schools: ["Butere", "Maseno University"],
    work: {
      company: "Freelancer",
      role: "Web Developer",
      since: 2023,
    },
    siblings: [{ name: "Fiona", age: 17 }],
    height: 5.1,
  },
  {
    name: "Gladys",
    age: 48,
    isKenyan: false,
    schools: ["Loreto", "Kenyatta University"],
    work: {
      company: "Hospital",
      role: "Doctor",
      since: 2000,
    },
    siblings: [
      { name: "George", age: 52 },
      { name: "Gloria", age: 45 },
    ],
    height: 5.8,
  },
  {
    name: "Henry",
    age: 32,
    isKenyan: true,
    schools: ["Nyandarua", "University of Eldoret"],
    work: {
      company: "Government",
      role: "Lawyer",
      since: 2019,
    },
    siblings: [],
    height: 6.2,
  },
];

//   print/log the work place for the thrid person

// log the name of Felix's sibling
// log the second school that Diana went to
// the age of the youngest person
// log the number of Glady's siblings

// 1.print/log the work place for the third person
console.log(people[2].work.company);
// 2.log the name of Felix's sibling

console.log(people[5].siblings[0].name);
// 3. Log the second school that Diana went to
const diana = people.find((person) => person.name === "Diana");
console.log(diana.schools[1]);
// 4.the age of the youngest person
function finYoungestPerson(peopleList) {
  let youngestAge = peopleList[0].age; // an assumption - first person in the list is the youngest
  for (let index = 1; index < peopleList.length; index++) {
    if (peopleList[index].age < youngAge) {
      // if current person in the loop is younger -- update the youngestAge
      youngAge = peopleList[index].age;
    }
  }
  console.log(youngestAge);
  // const youngestPerson = peopleList.find(
  //   (person) => person.age === youngestAge
  // ).name;
  // console.log(youngestPerson);
}
// findYoungestPerson(people);
// const youngestPerson = people.reduce((youngest, person) =>
//   person.age < youngest.age ? person : youngest
// );
// console.log(youngestPerson.age);
// log the number of Glady's siblings
console.log(people[6].siblings.length);

// Number
//  JS global objects --- strings, Number, Array, Objects, Math, Date ..... provide properties and methods
//  (fuction) help manipulate data

const colors = ["red", "green"];
console.log(colors.push("yellow"));
console.log(colors);
console.log(colors.reverse());

