const Contact = require("../Model/Contact");

class AddressBookService {
    constructor() {
        this.addressBook = [];
    }

    addContact(firstName, lastName, address, city, state, zip, phone, email) {
        let duplicateCheck = this.addressBook.filter(contact => contact.firstName === firstName && contact.lastName === lastName);

        if (duplicateCheck.length > 0) {
            console.log("Duplicate Contact: " + firstName + " " + lastName + " already exists in the Address Book.");
            return;
        }

        try {
            const newContact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
            this.addressBook.push(newContact);
            console.log("Contact added successfully: " + firstName + " " + lastName);
        } catch (error) {
            console.error("Error adding contact: " + error.message);
        }
    }

    findContact(firstName, lastName) {
        return this.addressBook.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    editContact(firstName, lastName, newDetails) {
        const contact = this.findContact(firstName, lastName);
        if (!contact) {
            console.log("Contact " + firstName + " " + lastName + " not found.");
            return;
        }

        Object.keys(newDetails).forEach(key => {
            if (contact.hasOwnProperty(key)) {
                contact[key] = newDetails[key];
            }
        });

        console.log("Contact " + firstName + " " + lastName + " updated successfully.");
    }

    deleteContact(firstName, lastName) {
        const index = this.addressBook.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        
        if (index !== -1) {
            this.addressBook.splice(index, 1);
            console.log("Contact " + firstName + " " + lastName + " deleted successfully.");
        } else {
            console.log("Contact " + firstName + " " + lastName + " not found.");
        }
    }

    displayAllContacts() {
        if (this.addressBook.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("\nAddress Book:");
            this.addressBook.forEach(contact => console.log(contact.displayContact()));
        }
    }

    getContactCount() {
        console.log("Total number of contacts: " + this.addressBook.length);
        return this.addressBook.length;
    }
}

module.exports = AddressBookService;
