const Contact = require("./Model/Contact");

let addressBook = [];

function addContact(firstName, lastName, address, city, state, zip, phone, email) {
    try {
        const newContact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
        addressBook.push(newContact);
        console.log(` Contact added successfully: ${firstName} ${lastName}`);
    } catch (error) {
        console.error(` Error adding contact: ${error.message}`);
    }
}

addContact("Arpita", "Doe", "123 Main St", "Katni", "MadhyaPradesh", "100001", "9876543210", "john.doe@example.com");
addContact("Anshu", "Smith", "456 Elm St", "Satna", "Chattisgarh", "900042", "8765432109", "alice.smith@example.com");
addContact("Deepshika", "Brown", "789 Oak St", "cheenaii", "AndraPradesh", "604003", "7654321098", "bob.brown@example.com");

// Display all contacts in the Address Book
console.log("\n Address Book Contacts:");
addressBook.forEach(contact => console.log(contact.displayContact(1)));
