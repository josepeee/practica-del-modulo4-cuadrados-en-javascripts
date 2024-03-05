
function translate(lang) {
    return lang === "en" ? "Hello" : "Hola";
}

function greeting(name, lang) {
    const hello = translate(lang);
    const message = `${hello} ${name}`;
    return message;
}

const aName = "John";
const result = greeting(aName, "es");
console.log(result);