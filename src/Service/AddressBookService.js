const Contact = require("../Model/Contact");

class AddressBookService {
    constructor() {
        this.addressBook = [];
    }

    addContact(firstName, lastName, address, city, state, zip, phone, email) {
        try {
            const newContact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
            this.addressBook.push(newContact);
            console.log(` Contact added successfully: ${firstName} ${lastName}`);
        } catch (error) {
            console.error(`Error adding contact: ${error.message}`);
        }
    }

    findContact(firstName, lastName) {
        return this.addressBook.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    editContact(firstName, lastName, newDetails) {
        const contact = this.findContact(firstName, lastName);
        if (!contact) {
            console.log(` Contact ${firstName} ${lastName} not found.`);
            return;
        }

        Object.keys(newDetails).forEach(key => {
            if (contact.hasOwnProperty(key)) {
                contact[key] = newDetails[key];
            }
        });

        console.log(` Contact ${firstName} ${lastName} updated successfully.`);
    }

    displayAllContacts() {
        if (this.addressBook.length === 0) {
            console.log(" Address Book is empty.");
        } else {
            console.log("\n Address Book:");
            this.addressBook.forEach(contact => console.log(contact.displayContact()));
        }
    }
}

module.exports = AddressBookService;
