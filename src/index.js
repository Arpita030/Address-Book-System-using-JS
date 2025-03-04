const AddressBookService = require("./Service/AddressBookService");

const addressBookService = new AddressBookService();

addressBookService.addContact("Arpita", "Doe", "123 Main St", "Katni", "MadhyaPradesh", "100001", "9876543210", "john.doe@example.com");
addressBookService.addContact("Anshu", "Smith", "456 Elm St", "Satna", "Chattisgarh", "900042", "8765432109", "alice.smith@example.com");
addressBookService.addContact("Deepshika", "Brown", "789 Oak St", "Cheenaii", "AndraPradesh", "604003", "7654321098", "bob.brown@example.com");

console.log("\nAttempting to add duplicate contact: Arpita Doe...");
addressBookService.addContact("Arpita", "Doe", "999 Some St", "Bhopal", "MadhyaPradesh", "100002", "9998887776", "duplicate@example.com");

addressBookService.displayAllContacts();
addressBookService.getContactCount();
