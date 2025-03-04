const AddressBookService = require("./Service/AddressBookService");

const addressBookService = new AddressBookService();

addressBookService.addContact("Arpita", "Doe", "123 Main St", "Katni", "MadhyaPradesh", "100001", "9876543210", "arpita.doe@example.com");
addressBookService.addContact("Anshu", "Smith", "456 Elm St", "Satna", "Chattisgarh", "900042", "8765432109", "anshu.smith@example.com");
addressBookService.addContact("Deepshika", "Brown", "789 Oak St", "Chennai", "AndhraPradesh", "604003", "7654321098", "deepshika.brown@example.com");
addressBookService.addContact("Rahul", "Sharma", "111 Pine St", "Katni", "MadhyaPradesh", "100045", "9876543221", "rahul.sharma@example.com");

console.log("\nViewing Persons by City...");
addressBookService.viewPersonsByCity();

console.log("\nViewing Persons by State...");
addressBookService.viewPersonsByState();
