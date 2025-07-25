const data = {
    name: "saad",
    age: 20,
    languages: ["React-Native", "python", "react JS", "PHP"]
}

const Data = () => data;


const {name, languages} = Data();
const Age = data.age >= 20 ? "You are an Adult" : "You are a minor";

const greetings = `Welcome ${name},  ${Age}. and you know  ${languages}.`;
console.log(greetings)

const [firstLanguage, secondLanguage] = languages;
console.log(firstLanguage);


