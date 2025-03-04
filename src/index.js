const AddressBookService = require("./service/AddressBookService");

const addressBookService = new AddressBookService();

addressBookService.addContact("Arpita", "Doe", "123 Main St", "Katni", "MadhyaPradesh", "100001", "9876543210", "john.doe@example.com");
addressBookService.addContact("Anshu", "Smith", "456 Elm St", "Satna", "Chattisgarh", "900042", "8765432109", "alice.smith@example.com");
addressBookService.addContact("Deepshika", "Brown", "789 Oak St", "Cheenaii", "AndraPradesh", "604003", "7654321098", "bob.brown@example.com");

addressBookService.displayAllContacts();

addressBookService.getContactCount();

console.log("\nDeleting Contact: Anshu Smith...");
addressBookService.deleteContact("Anshu", "Smith");

addressBookService.getContactCount();
