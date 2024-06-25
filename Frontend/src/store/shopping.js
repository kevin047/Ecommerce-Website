const cart = {
    cartId: "CART001",
    items: [
        {
            productId: "P002",
            name: "Men's T-Shirt - Black Cotton Comfort Fit",
            image: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
            quantity: 2,
            unitPrice: 49.99,
            subtotal: 99.98,
        },
        {
            productId: "P001",
            name: "Men's T-Shirt - Black Cotton Comfort Fit",
            image: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
            quantity: 1,
            unitPrice: 39.99,
            subtotal: 39.99,
        },
    ],
    totalQuantity: 3,
    totalAmount: 139.97,
};

const orderSession = {
    orderSessions: {
        SESSION001: {
            sessionId: "SESSION001",
            userId: "USER001",
            cartId: "CART001",
            createdAt: "2024-06-18T10:00:00Z",
            expiresAt: "2024-06-18T12:00:00Z",
        },
        SESSION002: {
            sessionId: "SESSION002",
            userId: "USER002",
            cartId: "CART003",
            createdAt: "2024-06-18T11:00:00Z",
            expiresAt: "2024-06-18T13:00:00Z",
        },
    },
};

const orderDetails = {
    orders: {
        ORDER001: {
            orderId: "ORDER001",
            name: "John Doe",
            userId: "USER001",
            orderItems: [
                {
                    productId: "P001",
                    quantity: 2,
                    unitPrice: 49.99,
                    subtotal: 99.98,
                },
                {
                    productId: "P004",
                    quantity: 1,
                    unitPrice: 39.99,
                    subtotal: 39.99,
                },
            ],
            totalQuantity: 3,
            totalAmount: 139.97,
            address: {
                shipping: {
                    street: "123 Example St",
                    city: "Cityville",
                    state: "Stateville",
                    zip: "12345",
                    country: "Countryville",
                },
                billing: {
                    street: "456 Billing St",
                    city: "Billcity",
                    state: "Billstate",
                    zip: "54321",
                    country: "Billcountry",
                },
            },
            createdAt: "2024-06-18T11:30:00Z",
            status: "Pending",
            paymentDetails: {
                paymentId: "PAYMENT001",
                amountPaid: 139.97,
                paymentMethod: "Credit Card",
                transactionId: "TRANS001",
                status: "Completed",
                paidAt: "2024-06-18T11:45:00Z",
            },
        },
        ORDER002: {
            orderId: "ORDER002",
            name: "Jane Smith",
            userId: "USER002",
            orderItems: [
                {
                    productId: "P002",
                    quantity: 1,
                    unitPrice: 29.99,
                    subtotal: 29.99,
                },
            ],
            totalQuantity: 1,
            totalAmount: 29.99,
            address: {
                shipping: {
                    street: "789 Shipping St",
                    city: "Shipcity",
                    state: "Shipstate",
                    zip: "67890",
                    country: "Shipcountry",
                },
                billing: {
                    street: "789 Billing St",
                    city: "Billshipcity",
                    state: "Billshipstate",
                    zip: "98765",
                    country: "Billshipcountry",
                },
            },
            createdAt: "2024-06-18T12:00:00Z",
            status: "Shipped",
            paymentDetails: {
                paymentId: "PAYMENT002",
                amountPaid: 29.99,
                paymentMethod: "PayPal",
                transactionId: "TRANS002",
                status: "Completed",
                paidAt: "2024-06-18T12:15:00Z",
            },
        },
    },
};

const paymentDetails = {
    payments: {
        PAYMENT001: {
            paymentId: "PAYMENT001",
            orderId: "ORDER001",
            userId: "USER001",
            amountPaid: 139.97,
            paymentMethod: "Credit Card",
            transactionId: "TRANS001",
            status: "Completed",
            paidAt: "2024-06-18T11:45:00Z",
        },
        PAYMENT002: {
            paymentId: "PAYMENT002",
            orderId: "ORDER002",
            userId: "USER002",
            amountPaid: 29.99,
            paymentMethod: "PayPal",
            transactionId: "TRANS002",
            status: "Completed",
            paidAt: "2024-06-18T12:15:00Z",
        },
    },
};

export const shopping = {
    cart: cart,
    orderSession: orderSession,
    orderDetails: orderDetails,
    paymentDetails: paymentDetails,
};
