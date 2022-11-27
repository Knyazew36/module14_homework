const strXml = `
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
</list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(strXml, "text/xml");
const studentNodes = xmlDOM.querySelectorAll("student");
const studentResult = {
  list: [],
};

studentNodes.forEach((e) => {
  let student = new Object();
  const nameNode = e.querySelector("first");
  const familyNode = e.querySelector("second");
  const ageNode = e.querySelector("age");
  const profNode = e.querySelector("prof");
  (student.name = nameNode.textContent + " " + familyNode.textContent),
    (student.age = Number(ageNode.textContent)),
    (student.prof = profNode.textContent);
  studentResult.list.push(student);
});
console.log(studentResult);
