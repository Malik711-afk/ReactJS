const data = {
    name: "saad",
    age: 20,
    languages: ["React-Native", "python", "react JS", "PHP"]
}

// const Data = () => {
//     return data;
// };

// Instead of the traditional function, i used arrow function

const Data = () => data;

console.log(data.languages);
console.log(data.name);
