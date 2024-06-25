const productDetails = [
    {
        productId: "P001",
        name: "Smartphone S21 Ultra 5G 128GB - Unlocked International",
        description:
            "High-end smartphone with advanced features, including a vibrant 6.5-inch AMOLED display, 1080 x 2400 pixel resolution, Corning Gorilla Glass 5 protection. Features triple main camera with LED flash, HDR, panorama, and 4K@30fps video. Single selfie camera with HDR and 1080p@30fps video.",
        price: 699.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Samsung",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W001",
        discountId: "D001",
        sku: "SMXYZ-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId: "P002",
        name: "Men's T-Shirt - Black Cotton Comfort Fit",
        description:
            "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
        price: 19.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Generic",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W002",
        discountId: "D002",
        sku: "MTSHIRT-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId: "P003",
        name: "Gaming Laptop - Intel Core i7 10th Gen, NVIDIA RTX 3060 6GB",
        description:
            "High performance gaming laptop with the latest Intel Core i7 10th Gen processor and NVIDIA RTX 3060 graphics card. Features a 15.6-inch IPS display with 1920 x 1080 pixel resolution and 144 Hz refresh rate.",
        price: 1299.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Dell",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W003",
        discountId: "D003",
        sku: "GLPTOP-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId: "P004",
        name: "Women's Jeans - Blue Denim Slim Fit",
        description:
            "Stylish slim fit jeans for women in blue denim. Available in sizes 26, 28, 30, 32.",
        price: 49.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Levi's",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W004",
        discountId: "D004",
        sku: "WJEANS-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId: "P005",
        name: "Bluetooth Headphones - Noise Cancelling Over-Ear",
        description:
            "Noise cancelling over-ear headphones with high quality sound, Bluetooth 5.0 connectivity, and up to 30 hours of battery life. Features include built-in microphone and touch controls.",
        price: 199.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Sony",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W001",
        discountId: "D005",
        sku: "BTHP-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId:'P006',
        name: "Smartwatch Pro - OLED Display, Fitness Tracking",
        description:
            "Feature-packed smartwatch with OLED display, 1.78 inches size, and 448 x 368 pixel resolution. Includes fitness tracking with heart rate monitoring, GPS, and Bluetooth connectivity.",
        price: 299.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Apple",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W001",
        discountId: "D001",
        sku: "SWPRO-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId:'P007',
        name: "Wireless Mouse - Ergonomic Design, Wireless 2.4 GHz",
        description:
            "Ergonomic wireless mouse for comfortable computing. Features include wireless 2.4 GHz connectivity, compatibility with Windows, macOS, Linux, and powered by AAA batteries.",
        price: 29.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Logitech",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W002",
        discountId: "D006",
        sku: "WMOUSE-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId:'P008',
        name: "Portable External SSD - 500 GB, USB 3.2 Gen 2",
        description:
            "High-speed portable external SSD with 500 GB capacity. Features USB 3.2 Gen 2 interface for fast data transfer speeds up to 1000 MB/s.",
        price: 149.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Samsung",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W003",
        discountId: "D007",
        sku: "ESSD-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId:'P009',
        name: "Fitness Tracker - AMOLED Display, Heart Rate Monitoring",
        description:
            "Advanced fitness tracker with AMOLED display, 1.3 inches size, and 360 x 360 pixel resolution. Features include heart rate monitoring, accelerometer, GPS, and up to 7 days of battery life.",
        price: 79.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Fitbit",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W001",
        discountId: "D008",
        sku: "FITTRK-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
    {
        productId:'P010',
        name: "Desk Lamp - Adjustable LED, Touch Control",
        description:
            "Adjustable LED desk lamp for study and work. Features include adjustable brightness levels, warm to cool white color temperature, and USB charging port.",
        price: 39.99,
        discountedPrice: 10.99,
        discountPercentage: 45,
        brand: "Generic",
        category: {
            mainCategory: "Phone & Mobile",
            subCategory: ["Tablets & Ipad Pro"],
        },
        warehouseId: "W002",
        discountId: "D009",
        sku: "DLAMP-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [],
        },
        moreInformation: {
            display: {
                type: "AMOLED",
                size: "6.5 inches",
                resolution: "1080 x 2400 pixels",
                protection: "Corning Gorilla Glass 5",
            },
            camera: {
                mainCameraFeatures: "LED flash, HDR, panorama",
                mainCameraSetup: "Triple",
                mainCameraVideo: "4K@30fps, 1080p@60fps",
                secondaryCameraFeatures: "HDR",
                secondaryCameraSetup: "Single",
                secondaryCameraVideo: "1080p@30fps",
            },
        },
        reviewCount: 10,
        stock: {
            count:89,
            availibility: "In stock"
        },
        estimatedDelivery : "10 - 20 Jun, 2024"
    },
];

const productCategory = {
    categories: {
        C001: {
            categoryId: "C001",
            categoryName: "Electronics",
            subcategories: {
                "C001-01": {
                    subcategoryId: "C001-01",
                    subcategoryName: "Phones & Mobile",
                },
                "C001-02": {
                    subcategoryId: "C001-02",
                    subcategoryName: "Tablets & iPad",
                },
                "C001-03": {
                    subcategoryId: "C001-03",
                    subcategoryName: "Computer Accessories",
                },
                "C001-04": {
                    subcategoryId: "C001-04",
                    subcategoryName: "Laptops",
                },
                "C001-05": {
                    subcategoryId: "C001-05",
                    subcategoryName: "Storage & Drives",
                },
                "C001-06": {
                    subcategoryId: "C001-06",
                    subcategoryName: "Headphones",
                },
            },
        },
        C002: {
            categoryId: "C002",
            categoryName: "Clothing",
            subcategories: {
                "C002-01": {
                    subcategoryId: "C002-01",
                    subcategoryName: "Men's Clothing",
                },
                "C002-02": {
                    subcategoryId: "C002-02",
                    subcategoryName: "Women's Clothing",
                },
            },
        },
        C003: {
            categoryId: "C003",
            categoryName: "Home & Office",
            subcategories: {
                "C003-01": {
                    subcategoryId: "C003-01",
                    subcategoryName: "Desk Accessories",
                },
            },
        },
    },
};

const productWarehouse = {
    warehouses: {
        W001: {
            warehouseId: "W001",
            warehouseName: "Main Warehouse A",
            products: {
                P001: {
                    productId: "P001",
                    quantity: 150,
                },
                P005: {
                    productId: "P005",
                    quantity: 100,
                },
                P009: {
                    productId: "P009",
                    quantity: 75,
                },
                P010: {
                    productId: "P010",
                    quantity: 120,
                },
            },
        },
        W002: {
            warehouseId: "W002",
            warehouseName: "Secondary Warehouse B",
            products: {
                P002: {
                    productId: "P002",
                    quantity: 80,
                },
                P004: {
                    productId: "P004",
                    quantity: 60,
                },
                P007: {
                    productId: "P007",
                    quantity: 50,
                },
            },
        },
        W003: {
            warehouseId: "W003",
            warehouseName: "Tertiary Warehouse C",
            products: {
                P003: {
                    productId: "P003",
                    quantity: 90,
                },
                P006: {
                    productId: "P006",
                    quantity: 110,
                },
                P008: {
                    productId: "P008",
                    quantity: 30,
                },
            },
        },
    },
};

const productDiscount = {
    discounts: {
        D001: {
            discountId: "D001",
            discountPercentage: 10,
            validUntil: "2024-12-31",
        },
        D002: {
            discountId: "D002",
            discountPercentage: 15,
            validUntil: "2024-09-30",
        },
        D003: {
            discountId: "D003",
            discountPercentage: 5,
            validUntil: "2024-08-15",
        },
        D004: {
            discountId: "D004",
            discountPercentage: 20,
            validUntil: "2024-11-30",
        },
        D005: {
            discountId: "D005",
            discountPercentage: 12,
            validUntil: "2024-10-31",
        },
        D006: {
            discountId: "D006",
            discountPercentage: 8,
            validUntil: "2024-12-31",
        },
        D007: {
            discountId: "D007",
            discountPercentage: 18,
            validUntil: "2024-09-15",
        },
        D008: {
            discountId: "D008",
            discountPercentage: 25,
            validUntil: "2024-11-30",
        },
        D009: {
            discountId: "D009",
            discountPercentage: 15,
            validUntil: "2024-10-15",
        },
    },
};

const productReview = [
    {
        reviewId: "REVIEW001",
        userName: "USER001",
        rating: 4,
        reviewText:
        "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.",
        postedAt: "2024-06-18T10:30:00Z",
    },
    {
        reviewId: "REVIEW003",
        userName: "USER003",
        rating: 3,
        reviewText:
            "Good product, but could be better in terms of durability.",
        postedAt: "2024-06-17T15:45:00Z",
    },
    {
        reviewId: "REVIEW002",
        userName: "USER002",
        rating: 5,
        reviewText:
            "Excellent service and delivery. The product exceeded my expectations.",
        postedAt: "2024-06-18T09:00:00Z",
    },
];

const deals = {
    topDeals: [
        {
            productId: "P002",
            name: "Men's T-Shirt - Black Cotton Comfort Fit",
            description:
                "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
            price: 19.99,
            brand: "Generic",
            discountedPrice: 10.99,
            discountPercentage: 45, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "MTSHIRT-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.5,
        },
        {
            productId: "P002",
            name: "Men's T-Shirt - Black Cotton Comfort Fit",
            description:
                "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
            price: 19.99,
            brand: "Generic",
            discountedPrice: 10.99,
            discountPercentage: 45, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "MTSHIRT-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.5,
        },
        {
            productId: "P004",
            name: "Women's Jeans - Blue Denim Slim Fit",
            description:
                "Stylish slim fit jeans for women in blue denim. Available in sizes 26, 28, 30, 32.",
            price: 49.99,
            brand: "Levi's",
            discountedPrice: 39.99,
            discountPercentage: 20, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "WJEANS-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.2,
        },
        {
            productId: "P005",
            name: "Bluetooth Headphones - Noise Cancelling Over-Ear",
            description:
                "Noise cancelling over-ear headphones with high quality sound, Bluetooth 5.0 connectivity, and up to 30 hours of battery life.",
            price: 199.99,
            brand: "Sony",
            discountedPrice: 159.99,
            discountPercentage: 20, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "BTHP-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.8,
        },
        {
            productId: "P006",
            name: "Smartwatch Pro - OLED Display, Fitness Tracking",
            description:
                "Feature-packed smartwatch with OLED display, 1.78 inches size, and 448 x 368 pixel resolution. Includes fitness tracking with heart rate monitoring, GPS, and Bluetooth connectivity.",
            price: 299.99,
            brand: "Apple",
            discountedPrice: 249.99,
            discountPercentage: 16.67, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "SWPRO-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.6,
        },
    ],

    recommendedProducts: [
        {
            productId: "P002",
            name: "Men's T-Shirt - Black Cotton Comfort Fit",
            description:
                "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
            price: 19.99,
            brand: "Generic",
            discountedPrice: 10.99,
            discountPercentage: 45, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "MTSHIRT-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.5,
        },
        {
            productId: "P002",
            name: "Men's T-Shirt - Black Cotton Comfort Fit",
            description:
                "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
            price: 19.99,
            brand: "Generic",
            discountedPrice: 10.99,
            discountPercentage: 45, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "MTSHIRT-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.5,
        },
        {
            productId: "P004",
            name: "Women's Jeans - Blue Denim Slim Fit",
            description:
                "Stylish slim fit jeans for women in blue denim. Available in sizes 26, 28, 30, 32.",
            price: 49.99,
            brand: "Levi's",
            discountedPrice: 39.99,
            discountPercentage: 20, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "WJEANS-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.2,
        },
        {
            productId: "P005",
            name: "Bluetooth Headphones - Noise Cancelling Over-Ear",
            description:
                "Noise cancelling over-ear headphones with high quality sound, Bluetooth 5.0 connectivity, and up to 30 hours of battery life.",
            price: 199.99,
            brand: "Sony",
            discountedPrice: 159.99,
            discountPercentage: 20, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "BTHP-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.8,
        },
        {
            productId: "P006",
            name: "Smartwatch Pro - OLED Display, Fitness Tracking",
            description:
                "Feature-packed smartwatch with OLED display, 1.78 inches size, and 448 x 368 pixel resolution. Includes fitness tracking with heart rate monitoring, GPS, and Bluetooth connectivity.",
            price: 299.99,
            brand: "Apple",
            discountedPrice: 249.99,
            discountPercentage: 16.67, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "SWPRO-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.6,
        },
    ],
    topSellingProducts: [
        {
            productId: "P002",
            name: "Men's T-Shirt - Black Cotton Comfort Fit",
            description:
                "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
            price: 19.99,
            brand: "Generic",
            discountedPrice: 10.99,
            discountPercentage: 45, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "MTSHIRT-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.5,
        },
        {
            productId: "P002",
            name: "Men's T-Shirt - Black Cotton Comfort Fit",
            description:
                "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
            price: 19.99,
            brand: "Generic",
            discountedPrice: 10.99,
            discountPercentage: 45, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "MTSHIRT-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.5,
        },
        {
            productId: "P004",
            name: "Women's Jeans - Blue Denim Slim Fit",
            description:
                "Stylish slim fit jeans for women in blue denim. Available in sizes 26, 28, 30, 32.",
            price: 49.99,
            brand: "Levi's",
            discountedPrice: 39.99,
            discountPercentage: 20, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "WJEANS-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.2,
        },
        {
            productId: "P005",
            name: "Bluetooth Headphones - Noise Cancelling Over-Ear",
            description:
                "Noise cancelling over-ear headphones with high quality sound, Bluetooth 5.0 connectivity, and up to 30 hours of battery life.",
            price: 199.99,
            brand: "Sony",
            discountedPrice: 159.99,
            discountPercentage: 20, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "BTHP-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.8,
        },
        {
            productId: "P006",
            name: "Smartwatch Pro - OLED Display, Fitness Tracking",
            description:
                "Feature-packed smartwatch with OLED display, 1.78 inches size, and 448 x 368 pixel resolution. Includes fitness tracking with heart rate monitoring, GPS, and Bluetooth connectivity.",
            price: 299.99,
            brand: "Apple",
            discountedPrice: 249.99,
            discountPercentage: 16.67, // Calculated as (1 - (discountedPrice / price)) * 100
            sku: "SWPRO-001",
            images: {
                main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                others: [
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                    "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                ],
            },
            rating: 4.6,
        },
    ],
};

const productCards = [
    {
        productId: "P002",
        name: "Men's T-Shirt - Black Cotton Comfort Fit",
        description:
            "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
        price: 19.99,
        brand: "Generic",
        discountedPrice: 10.99,
        discountPercentage: 45, // Calculated as (1 - (discountedPrice / price)) * 100
        sku: "MTSHIRT-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        rating: 4.5,
    },
    {
        productId: "P002",
        name: "Men's T-Shirt - Black Cotton Comfort Fit",
        description:
            "Comfortable 100% cotton t-shirt in black color. Available in sizes S, M, L, XL.",
        price: 19.99,
        brand: "Generic",
        discountedPrice: 10.99,
        discountPercentage: 45, // Calculated as (1 - (discountedPrice / price)) * 100
        sku: "MTSHIRT-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        rating: 4.5,
    },
    {
        productId: "P004",
        name: "Women's Jeans - Blue Denim Slim Fit",
        description:
            "Stylish slim fit jeans for women in blue denim. Available in sizes 26, 28, 30, 32.",
        price: 49.99,
        brand: "Levi's",
        discountedPrice: 39.99,
        discountPercentage: 20, // Calculated as (1 - (discountedPrice / price)) * 100
        sku: "WJEANS-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        rating: 4.2,
    },
    {
        productId: "P005",
        name: "Bluetooth Headphones - Noise Cancelling Over-Ear",
        description:
            "Noise cancelling over-ear headphones with high quality sound, Bluetooth 5.0 connectivity, and up to 30 hours of battery life.",
        price: 199.99,
        brand: "Sony",
        discountedPrice: 159.99,
        discountPercentage: 20, // Calculated as (1 - (discountedPrice / price)) * 100
        sku: "BTHP-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        rating: 4.8,
    },
    {
        productId: "P006",
        name: "Smartwatch Pro - OLED Display, Fitness Tracking",
        description:
            "Feature-packed smartwatch with OLED display, 1.78 inches size, and 448 x 368 pixel resolution. Includes fitness tracking with heart rate monitoring, GPS, and Bluetooth connectivity.",
        price: 299.99,
        brand: "Apple",
        discountedPrice: 249.99,
        discountPercentage: 16.67, // Calculated as (1 - (discountedPrice / price)) * 100
        sku: "SWPRO-001",
        images: {
            main: "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            others: [
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
                "https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg",
            ],
        },
        rating: 4.6,
    },
]

export const products = {
    details: productDetails,
    category: productCategory,
    warehouse: productWarehouse,
    discount: productDiscount,
    review: productReview,
    deals: deals,
    productCards:productCards,
};
