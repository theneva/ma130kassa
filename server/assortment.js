if (Assortment.find().count() === 0) {
    Assortment.insert(
        {
            'title': 'Øl (tapp)',
            'button_color': 'red',
            'tag': 'active',
            'assortment': [
                {
                    'title': 'Pilsner fat 0,5l',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37
                },
                {
                    'title': 'Pilsner fat 0,5l medlem',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 29
                },
                {
                    'title': 'Bayer FAT',
                    'image': '',
                    'in_stock': 15,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 42
                },
                {
                    'title': 'Bayer FAT Medlem',
                    'image': '',
                    'in_stock': 15,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 32
                },
                {
                    'title': 'Classic',
                    'image': '',
                    'in_stock': 19,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39
                },
                {
                    'title': 'Classic Medlem',
                    'image': '',
                    'in_stock': 19,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 29
                },
                {
                    'title': 'Mugge PILSNER',
                    'image': '',
                    'in_stock': 6,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 99
                },
                {
                    'title': 'Mugge BAYER',
                    'image': '',
                    'in_stock': 5,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 109
                },
                {
                    'title': 'Mugge CLASSIC',
                    'image': '',
                    'in_stock': 6,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 109
                }
            ]
        });

    Assortment.insert(
        {
            'title': 'Øl (flaske)',
            'button_color': 'purple',
            'tag': '',
            'assortment': [
                {
                    'title': 'Kirin Ichiban',
                    'image': '',
                    'in_stock': 31,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39
                },
                {
                    'title': 'Stella Artios',
                    'image': '',
                    'in_stock': 30,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39
                },
                {
                    'title': 'Erdinger',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39
                },
                {
                    'title': 'Newcastle',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39
                },
                {
                    'title': 'White Dog',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 39
                },
                {
                    'title': 'O\'Mission (Glutenfri)',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 39
                },
                {
                    'title': 'MÅNEDENS: Halling',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 39
                },
                {
                    'title': 'Aas Pale Ale',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35
                },
                {
                    'title': 'Aas Pale Ale Medlem',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25
                },
                {
                    'title': 'Aas Weizen',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35
                },
                {
                    'title': 'Aas Weizen Medlem',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25
                },
                {
                    'title': 'Aas Bayer Flaske',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35
                },
                {
                    'title': 'Aas Bayer Flaske Medlem',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25
                },
                {
                    'title': 'Aas Bock',
                    'image': '',
                    'in_stock': 32,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35
                },
                {
                    'title': 'Aas Bock Medlem',
                    'image': '',
                    'in_stock': 32,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 32
                },
                {
                    'title': 'Aas Stout',
                    'image': '',
                    'in_stock': 20,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35
                },
                {
                    'title': 'Aas Stout Medlem',
                    'image': '',
                    'in_stock': 20,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25
                }
            ]
        });

    Assortment.insert(
        {
            'title': 'Alkoholfritt + snacks',
            'button_color': 'blue',
            'tag': '',
            'assortment': [
                {
                    'title': 'Coca-Cola',
                    'image': '',
                    'in_stock': 5,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17
                },
                {
                    'title': 'Cola Zero',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 17
                },
                {
                    'title': 'Popcorn',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 15
                },
                {
                    'title': 'Solo',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17
                },
                {
                    'title': 'Aass UTEN',
                    'image': '',
                    'in_stock': 1,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17
                },
                {
                    'title': 'Chilinøtter',
                    'image': '',
                    'in_stock': 20,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25
                },
                {
                    'title': 'Potetgull SALT',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 13
                },
                {
                    'title': 'Potetgull PAPRIKA',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 13
                },
                {
                    'title': 'Potetgull Salt og Pepper',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 13
                },
                {
                    'title': 'Glitre TYTTEBÆR',
                    'image': '',
                    'in_stock': 4,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17
                },
                {
                    'title': 'Glitre NATURELL',
                    'image': '',
                    'in_stock': 6,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17
                },
                {
                    'title': 'Ubuntu Cola',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 17
                },
                {
                    'title': 'Sprite',
                    'image': '',
                    'in_stock': 3,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17
                },
                {
                    'title': 'Bayer UTEN',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17
                }
            ]
        });

    Assortment.insert(
        {
            'title': 'Vin, Cider, Crabbies',
            'button_color': 'pink',
            'tag': '',
            'assortment': [
                {
                    'title': 'Liefmans Fruitesse',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 37
                },
                {
                    'title': 'Crabbies',
                    'image': '',
                    'in_stock': 21,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37
                },
                {
                    'title': 'Hvitvin',
                    'image': '',
                    'in_stock': 14,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37
                },
                {
                    'title': 'Hvitvin MEDLEM',
                    'image': '',
                    'in_stock': 14,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 27
                },
                {
                    'title': 'Rødvin',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37
                },
                {
                    'title': 'Rødvin MEDLEM',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 27
                },
                {
                    'title': 'Rødvin Halvflaske',
                    'image': '',
                    'in_stock': 5,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 95
                },
                {
                    'title': 'Cava Flaske',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 140
                },
                {
                    'title': 'Hooch',
                    'image': '',
                    'in_stock': 7,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37
                }
            ]
        });

    Assortment.insert(
        {
            'title': 'Shots',
            'button_color': 'teal',
            'tag': '',
            'assortment': [
                {
                    'title': 'Fiskefjes SHOT',
                    'image': '',
                    'in_stock': 4,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20
                },
                {
                    'title': 'Fiskefjes 4 for 60',
                    'image': '',
                    'in_stock': 1,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60
                },
                {
                    'title': 'Små Grønne SHOT',
                    'image': '',
                    'in_stock': 8,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20
                },
                {
                    'title': 'Små Grønne 4 for 60',
                    'image': '',
                    'in_stock': 2,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60
                },
                {
                    'title': 'Små Grå SHOT',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20
                },
                {
                    'title': 'Små Grå 4 for 60',
                    'image': '',
                    'in_stock': 2,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60
                },
                {
                    'title': 'Små Kolde SHOT',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20
                },
                {
                    'title': 'Små Kolde 4 for 60',
                    'image': '',
                    'in_stock': 3,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60
                },
                {
                    'title': 'Små Blå SHOT',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20
                },
                {
                    'title': 'Små Blå 4 for 60',
                    'image': '',
                    'in_stock': 2,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60
                }
            ]
        });
}