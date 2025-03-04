const Contact = require("./Model/Contact");

const contact1 = new Contact(
    "Arpita", "Goutam", "Civil Line ", "Katni", "India", "10001", "123-456-7890", "Arpita.doe@example.com"
);

console.log(contact1.displayContact());