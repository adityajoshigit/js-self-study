function createAddress(street, city, state) {
    return {
        street,
        city,
        state
    };
}

function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}

let fort = createAddress(
    'du Fort',
    'Montreal',
    'QC'
);

let guy = new Address(
    'Guy',
    'Montreal',
    'QC'
);