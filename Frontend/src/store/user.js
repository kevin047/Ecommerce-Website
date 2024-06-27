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

const faqData= [
    {
      "mainHeading": "Shopping Information",
      "faqList": [
        {
          "id": 1,
          "question": "Pellentesque habitant morbi tristique senectus et netus?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 2,
          "question": "How much is shipping and how long will it take?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 3,
          "question": "How long will it take to get my package?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 4,
          "question": "Branding is simply a more efficient way to sell things?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ]
    },
    {
      "mainHeading": "Payment Information",
      "faqList": [
        {
          "id": 5,
          "question": "Pellentesque habitant morbi tristique senectus et netus?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 6,
          "question": "How much is shipping and how long will it take?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 7,
          "question": "How long will it take to get my package?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 8,
          "question": "Branding is simply a more efficient way to sell things?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ]
    },
    {
      "mainHeading": "Order & Returns",
      "faqList": [
        {
          "id": 9,
          "question": "Pellentesque habitant morbi tristique senectus et netus?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 10,
          "question": "How much is shipping and how long will it take?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 11,
          "question": "How long will it take to get my package?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "id": 12,
          "question": "Branding is simply a more efficient way to sell things?",
          "answerText": "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ]
    },
]

export const users = {
    userDetails: userDetails,
    addressDetails: addressDetails,
    faqData: faqData,
};