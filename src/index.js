const AddressBookService = require("./Service/AddressBookService");

const addressBookService = new AddressBookService();

addressBookService.addContact("Arpita", "Doe", "123 Main St", "Katni", "MadhyaPradesh", "100001", "9876543210", "john.doe@example.com");
addressBookService.addContact("Anshu", "Smith", "456 Elm St", "Satna", "Chattisgarh", "900042", "8765432109", "alice.smith@example.com");
addressBookService.addContact("Deepshika", "Brown", "789 Oak St", "Cheenaii", "AndraPradesh", "604003", "7654321098", "bob.brown@example.com");

addressBookService.displayAllContacts();

console.log("\n Editing Contact: Arpita Doe...");
addressBookService.editContact("Arpita", "Doe", { phone: "9998887776", email: "arpita.doe@example.com" });

addressBookService.displayAllContacts();
