class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.validateName(firstName, "First Name");
        this.validateName(lastName, "Last Name");
        this.validateAddress(address, "Address");
        this.validateAddress(city, "City");
        this.validateAddress(state, "State");
        this.validateZip(zip);
        this.validatePhone(phone);
        this.validateEmail(email);

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    validateName(name, fieldName) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} must be at least 4 characters long.`);
        }
    }

    validateZip(zip) {
        const zipPattern = /^[0-9]{6}$/;
        if (!zipPattern.test(zip)) {
            throw new Error("Zip Code must be exactly 6 digits.");
        }
    }

    validatePhone(phone) {
        const phonePattern = /^[6-9][0-9]{9}$/;
        if (!phonePattern.test(phone)) {
            throw new Error("Phone Number must be a valid 10-digit number.");
        }
    }

    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid Email format.");
        }
    }

    // Overriding toString method using displayContact()
    displayContact() {
        return `Contact Details:
        Name: ${this.firstName} ${this.lastName}
        Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}
        Phone: ${this.phone}
        Email: ${this.email}`;
    }
}

module.exports = Contact;
