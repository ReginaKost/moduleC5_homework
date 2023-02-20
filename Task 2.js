const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);

const list = data.list;
const result = [];

list.forEach(function(item) {
  const name = item.name;
  const age = item.age;
  const prof = item.prof;
  
result.push({
   name: name,
   age: Number(age),
   prof: prof,
});
});

console.log(result);