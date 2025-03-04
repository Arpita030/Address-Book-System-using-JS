class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    displayContact() {
        return `Contact Details:
        Name: ${this.firstName} ${this.lastName}
        Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}
        Phone: ${this.phone}
        Email: ${this.email}`;
    }
}

// Export the Contact class for use in index.js
module.exports = Contact;
