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
                    'price': 37,
                    'wholesale_price': 21
                },
                {
                    'title': 'Pilsner fat 0,5l medlem',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 29,
                    'wholesale_price': 21
                },
                {
                    'title': 'Bayer FAT',
                    'image': '',
                    'in_stock': 15,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 42,
                    'wholesale_price': 22
                },
                {
                    'title': 'Bayer FAT Medlem',
                    'image': '',
                    'in_stock': 15,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 32,
                    'wholesale_price': 22
                },
                {
                    'title': 'Classic',
                    'image': '',
                    'in_stock': 19,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39,
                    'wholesale_price': 23
                },
                {
                    'title': 'Classic Medlem',
                    'image': '',
                    'in_stock': 19,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 29,
                    'wholesale_price': 23
                },
                {
                    'title': 'Mugge PILSNER',
                    'image': '',
                    'in_stock': 6,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 99,
                    'wholesale_price': 64
                },
                {
                    'title': 'Mugge BAYER',
                    'image': '',
                    'in_stock': 5,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 109,
                    'wholesale_price': 65
                },
                {
                    'title': 'Mugge CLASSIC',
                    'image': '',
                    'in_stock': 6,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 109,
                    'wholesale_price': 68
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
                    'price': 39,
                    'wholesale_price': 23
                },
                {
                    'title': 'Stella Artios',
                    'image': '',
                    'in_stock': 30,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39,
                    'wholesale_price': 26
                },
                {
                    'title': 'Erdinger',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39,
                    'wholesale_price': 34
                },
                {
                    'title': 'Newcastle',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 39,
                    'wholesale_price': 27
                },
                {
                    'title': 'White Dog',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 39,
                    'wholesale_price': 21
                },
                {
                    'title': 'O\'Mission (Glutenfri)',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 39,
                    'wholesale_price': 25
                },
                {
                    'title': 'MÅNEDENS: Halling',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 39,
                    'wholesale_price': 24
                },
                {
                    'title': 'Aas Pale Ale',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35,
                    'wholesale_price': 19
                },
                {
                    'title': 'Aas Pale Ale Medlem',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25,
                    'wholesale_price': 19
                },
                {
                    'title': 'Aas Weizen',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35,
                    'wholesale_price': 19
                },
                {
                    'title': 'Aas Weizen Medlem',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25,
                    'wholesale_price': 19
                },
                {
                    'title': 'Aas Bayer Flaske',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35,
                    'wholesale_price': 18
                },
                {
                    'title': 'Aas Bayer Flaske Medlem',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25,
                    'wholesale_price': 18
                },
                {
                    'title': 'Aas Bock',
                    'image': '',
                    'in_stock': 32,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35,
                    'wholesale_price': 24
                },
                {
                    'title': 'Aas Bock Medlem',
                    'image': '',
                    'in_stock': 32,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 32,
                    'wholesale_price': 24
                },
                {
                    'title': 'Aas Stout',
                    'image': '',
                    'in_stock': 20,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 35,
                    'wholesale_price': 19
                },
                {
                    'title': 'Aas Stout Medlem',
                    'image': '',
                    'in_stock': 20,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25,
                    'wholesale_price': 19
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
                    'price': 17,
                    'wholesale_price': 11
                },
                {
                    'title': 'Cola Zero',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 17,
                    'wholesale_price': 11
                },
                {
                    'title': 'Popcorn',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 15,
                    'wholesale_price': 11
                },
                {
                    'title': 'Solo',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17,
                    'wholesale_price': 10
                },
                {
                    'title': 'Aass UTEN',
                    'image': '',
                    'in_stock': 1,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17,
                    'wholesale_price': 11
                },
                {
                    'title': 'Chilinøtter',
                    'image': '',
                    'in_stock': 20,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 25,
                    'wholesale_price': 18
                },
                {
                    'title': 'Potetgull SALT',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 13,
                    'wholesale_price': 8
                },
                {
                    'title': 'Potetgull PAPRIKA',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 13,
                    'wholesale_price': 8
                },
                {
                    'title': 'Potetgull Salt og Pepper',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 13,
                    'wholesale_price': 8
                },
                {
                    'title': 'Glitre TYTTEBÆR',
                    'image': '',
                    'in_stock': 4,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17,
                    'wholesale_price': 12
                },
                {
                    'title': 'Glitre NATURELL',
                    'image': '',
                    'in_stock': 6,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17,
                    'wholesale_price': 12
                },
                {
                    'title': 'Ubuntu Cola',
                    'image': '',
                    'in_stock': 0,
                    'total_sales': 0,
                    'in_assortment': false,
                    'price': 17,
                    'wholesale_price': 12
                },
                {
                    'title': 'Sprite',
                    'image': '',
                    'in_stock': 3,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17,
                    'wholesale_price': 11
                },
                {
                    'title': 'Bayer UTEN',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 17,
                    'wholesale_price': 12
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
                    'price': 37,
                    'wholesale_price': 23
                },
                {
                    'title': 'Crabbies',
                    'image': '',
                    'in_stock': 21,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37,
                    'wholesale_price': 25
                },
                {
                    'title': 'Hvitvin',
                    'image': '',
                    'in_stock': 14,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37,
                    'wholesale_price': 19
                },
                {
                    'title': 'Hvitvin MEDLEM',
                    'image': '',
                    'in_stock': 14,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 27,
                    'wholesale_price': 19
                },
                {
                    'title': 'Rødvin',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37,
                    'wholesale_price': 16
                },
                {
                    'title': 'Rødvin MEDLEM',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 27,
                    'wholesale_price': 16
                },
                {
                    'title': 'Rødvin Halvflaske',
                    'image': '',
                    'in_stock': 5,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 95,
                    'wholesale_price': 69
                },
                {
                    'title': 'Cava Flaske',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 140,
                    'wholesale_price': 86
                },
                {
                    'title': 'Hooch',
                    'image': '',
                    'in_stock': 7,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 37,
                    'wholesale_price': 21
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
                    'price': 20,
                    'wholesale_price': 8
                },
                {
                    'title': 'Fiskefjes 4 for 60',
                    'image': '',
                    'in_stock': 1,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60,
                    'wholesale_price': 32
                },
                {
                    'title': 'Små Grønne SHOT',
                    'image': '',
                    'in_stock': 8,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20,
                    'wholesale_price': 8
                },
                {
                    'title': 'Små Grønne 4 for 60',
                    'image': '',
                    'in_stock': 2,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60,
                    'wholesale_price': 32
                },
                {
                    'title': 'Små Grå SHOT',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20,
                    'wholesale_price': 8
                },
                {
                    'title': 'Små Grå 4 for 60',
                    'image': '',
                    'in_stock': 2,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60,
                    'wholesale_price': 32
                },
                {
                    'title': 'Små Kolde SHOT',
                    'image': '',
                    'in_stock': 12,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20,
                    'wholesale_price': 8
                },
                {
                    'title': 'Små Kolde 4 for 60',
                    'image': '',
                    'in_stock': 3,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60,
                    'wholesale_price': 32
                },
                {
                    'title': 'Små Blå SHOT',
                    'image': '',
                    'in_stock': 10,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 20,
                    'wholesale_price': 8
                },
                {
                    'title': 'Små Blå 4 for 60',
                    'image': '',
                    'in_stock': 2,
                    'total_sales': 0,
                    'in_assortment': true,
                    'price': 60,
                    'wholesale_price': 32
                }
            ]
        });
}

if (Sales.find().count() === 0) {

    var days = 100;
    var categories = Assortment.find().fetch();
    console.log(categories);
    for (var i = 0; i < days; i++) {

        var now = moment();
        now.subtract(days - 1 - i, 'days');

        // each day
        for (var j = 0; j < Math.floor((Math.random() * 15) + 10); j++) {

            var selectedCategory = categories[Math.floor(Math.random(categories.length()))];

            for (var k in categories) {
                var selectedItem = selectedCategory.assortment[k];


                Sales.insert({
                    product_name: selectedItem.title,
                    wholesale_price: selectedItem.wholesale_price,
                    price: selectedItem.price,
                    date: now.format('YYYY-MM-DD').substring(0, 10)
                });

            }

        }
    }
}