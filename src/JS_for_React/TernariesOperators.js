const data = {
    name: "Ali",
    age: 20,
    favTech: ["javascript", "react", "nodejs", "rust", "python", "php", "laravell", "symphony"]
};
data;

const [primaryLang, secondaryLang] = data.favTech;
const updateAge = data.age > 18 ? "adult" : data.age < 18 ? "minor" : "exactly 18";

const newData = `hello my name is ${data.name} and i am ${data.age} years old an i am an ${updateAge} and my language is ${primaryLang} and ${secondaryLang}. `;

console.log(newData);
