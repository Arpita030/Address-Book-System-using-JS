const Contact = require("./Model/Contact");


try {
    // Valid Contact
    const contact1 = new Contact(
        "Arpita", "Doe", "123 Main St", "Katni", "Madhya Pradesh", "100001", "9876543210", "john.doe@example.com"
    );
    console.log(contact1.displayContact());
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    // Invalid Contact (First Name is too short)
    const contact2 = new Contact(
        "Jonbhgvf", "Smith", "456 Elm St", "Los Angeles", "CAjuhy", "900001", "9876543210", "jane.smith@example.com"
    );
    console.log(contact2.displayContact());
} catch (error) {
    console.error(`Error: ${error.message}`);
}
