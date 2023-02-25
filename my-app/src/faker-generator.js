const Chance = require('chance');
const fs = require('fs');

const chance = new Chance();

// Generowanie danych
const generateData = (num) => {
    let data = [];
    for (let i = 1; i <= num; i++) {
        const name = chance.first();
        const surname = chance.last();
        const age = chance.age();
        const company = chance.company();
        const email = chance.email();
        const url = chance.url();

        data.push({id: i, name, surname, age, email, company, url});
    }
    return { data };
}

// Konwersja obiektu na format JSON
const jsonData = JSON.stringify(generateData(20));

// Zapisywanie danych do pliku
fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Dane zostały zapisane do pliku data.json!');
});