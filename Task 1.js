const parser = new DOMParser();

const xmlString = `
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

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const students = xmlDOM.querySelectorAll("student");

const result = [];

students.forEach((item) => {

  const name = item.querySelector('name');
  const age = item.querySelector('age');
  const prof = item.querySelector('prof');
  const lang = name.getAttribute('lang');


result.push({
   name: name.textContent,
   age: age.textContent,
   prof: prof.textContent,
   lang: lang,
});
});


console.log(result);


