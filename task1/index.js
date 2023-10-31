let xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let parse = new DOMParser();
let xmlObject = parse.parseFromString(xmlString, "application/xml");

let myObj = {};
myObj.list = [];

let students = xmlObject.querySelectorAll("student");
for (let student of students) {
    let name = student.querySelector("name");
    let lang = name.getAttribute("lang");
    let first = name.querySelector("first").textContent;
    let second = name.querySelector("second").textContent;
    let age = student.querySelector("age").textContent;
    let prof = student.querySelector("prof").textContent;

    let person = {};
    person.name = first, second;
    person.age = Number(age);
    person.prof = prof;
    person.lang = lang
    myObj.list.push(person);
}

console.log(myObj);
