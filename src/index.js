const AddressBookService = require("./Service/AddressBookService");

const addressBookService = new AddressBookService();

addressBookService.addContact("Arpita", "Doe", "123 Main St", "Katni", "MadhyaPradesh", "100001", "9876543210", "john.doe@example.com");
addressBookService.addContact("Anshu", "Smith", "456 Elm St", "Satna", "Chattisgarh", "900042", "8765432109", "alice.smith@example.com");
addressBookService.addContact("Deepshika", "Brown", "789 Oak St", "Cheenaii", "AndraPradesh", "604003", "7654321098", "bob.brown@example.com");
addressBookService.addContact("Rahul", "Sharma", "111 Pine St", "Katni", "MadhyaPradesh", "100045", "9876543221", "rahul.sharma@example.com");

console.log("\nSearching contacts by City...");
addressBookService.findContactsByCity("Katni");
addressBookService.countPeopleInCity("Katni");

console.log("\nSearching contacts by State...");
addressBookService.findContactsByState("MadhyaPradesh");
addressBookService.countPeopleInState("MadhyaPradesh");
