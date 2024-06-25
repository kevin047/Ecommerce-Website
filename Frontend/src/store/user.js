const userDetails = {
    users: {
        USER001: {
            userId: "USER001",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phone: "+1234567890",
            createdAt: "2024-06-15T08:00:00Z",
            mainShippingAddressId: "ADDRESS001",
            mainBillingAddressId: "ADDRESS002",
            addressIds: ["ADDRESS001", "ADDRESS002", "ADDRESS003"],
        },
        USER002: {
            userId: "USER002",
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phone: "+1987654321",
            createdAt: "2024-06-16T10:00:00Z",
            mainShippingAddressId: "ADDRESS004",
            mainBillingAddressId: "ADDRESS005",
            addressIds: ["ADDRESS004", "ADDRESS005"],
        },
    },
};

const addressDetails = {
    addresses: {
        ADDRESS001: {
            addressId: "ADDRESS001",
            userId: "USER001",
            street: "123 Example St",
            city: "Cityville",
            state: "Stateville",
            zip: "12345",
            country: "Countryville",
        },
        ADDRESS002: {
            addressId: "ADDRESS002",
            userId: "USER001",
            street: "456 Billing St",
            city: "Billcity",
            state: "Billstate",
            zip: "54321",
            country: "Billcountry",
        },
        ADDRESS003: {
            addressId: "ADDRESS003",
            userId: "USER001",
            street: "789 Other St",
            city: "Othercity",
            state: "Otherstate",
            zip: "67890",
            country: "Othercountry",
        },
        ADDRESS004: {
            addressId: "ADDRESS004",
            userId: "USER002",
            street: "456 Shipping St",
            city: "Shipcity",
            state: "Shipstate",
            zip: "45678",
            country: "Shipcountry",
        },
        ADDRESS005: {
            addressId: "ADDRESS005",
            userId: "USER002",
            street: "789 Billing St",
            city: "Billshipcity",
            state: "Billshipstate",
            zip: "98765",
            country: "Billshipcountry",
        },
    },
};


export const users = {
    userDetails: userDetails,
    addressDetails: addressDetails
};