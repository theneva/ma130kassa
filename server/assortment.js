if (Assortment.find().count() === 0) {
    console.log(Assortment.find().count());

    Assortment.insert(
        {
            'title': 'Øl (tapp)',
            'button_color': 'red',
            'tag': 'active',
            'assortment': [
                {
                    'title': 'Pilsner fat 0,5l',
                    'image': ''
                },
                {
                    'title': 'Pilsner fat 0,5l medlem',
                    'image': ''
                },
                {
                    'title': 'Bayer FAT',
                    'image': 'Bayer FAT Medlem'
                },
                {
                    'title': 'Classic',
                    'image': ''
                },
                {
                    'title': 'Classic Medlem',
                    'image': ''
                },
                {
                    'title': 'Mugge PILSNER',
                    'image': ''
                },
                {
                    'title': 'Mugge BAYER',
                    'image': ''
                },
                {
                    'title': 'Mugge CLASSIC',
                    'image': ''
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
                    'image': ''
                },
                {
                    'title': 'Stella Artios',
                    'image': ''
                },
                {
                    'title': 'Erdinger',
                    'image': ''
                },
                {
                    'title': 'Newcastle',
                    'image': ''
                },
                {
                    'title': 'White Dog',
                    'image': ''
                },
                {
                    'title': 'O\'Mission (Glutenfri)',
                    'image': ''
                },
                {
                    'title': 'MÅNEDENS: Halling',
                    'image': ''
                },
                {
                    'title': 'Aas Pale Ale',
                    'image': ''
                },
                {
                    'title': 'Aas Pale Ale Medlem',
                    'image': ''
                },
                {
                    'title': 'Aas Weizen',
                    'image': ''
                },
                {
                    'title': 'Aas Weizen Medlem',
                    'image': ''
                },
                {
                    'title': 'Aas Bayer Flaske',
                    'image': ''
                },
                {
                    'title': 'Aas Bayer Flaske Medlem',
                    'image': ''
                },
                {
                    'title': 'Aas Bock Medlem',
                    'image': ''
                },
                {
                    'title': 'Aas Stout',
                    'image': ''
                },
                {
                    'title': 'Aas Stout Medlem',
                    'image': ''
                },
                {
                    'title': 'Aas UTEN',
                    'image': ''
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
                    'image': ''
                },
                {
                    'title': 'Cola Zero',
                    'image': ''
                },
                {
                    'title': 'Popcorn',
                    'image': ''
                },
                {
                    'title': 'Solo',
                    'image': ''
                },
                {
                    'title': 'Aass UTEN',
                    'image': ''
                },
                {
                    'title': 'Chilinøtter',
                    'image': ''
                },
                {
                    'title': 'Potetgull SALT',
                    'image': ''
                },
                {
                    'title': 'Potetgull PAPRIKA',
                    'image': ''
                },
                {
                    'title': 'Potetgull Salt og Pepper',
                    'image': ''
                },
                {
                    'title': 'Glitre TYTTEBÆR',
                    'image': ''
                },
                {
                    'title': 'Glitre NATURELL',
                    'image': ''
                },
                {
                    'title': 'Ubuntu Cola',
                    'image': ''
                },
                {
                    'title': 'Sprite',
                    'image': ''
                },
                {
                    'title': 'Bayer UTEN',
                    'image': ''
                }
            ]
        });

    Assortment.insert(
        {
            'title': 'Vin, Cider, Crabbies',
            'button_color': 'green',
            'tag': '',
            'assortment': [
                {
                    'title': 'Liefmans Fruitesse',
                    'image': ''
                },
                {
                    'title': 'Crabbies',
                    'image': ''
                },
                {
                    'title': 'Hvitvin',
                    'image': ''
                },
                {
                    'title': 'Hvitvin MEDLEM',
                    'image': ''
                },
                {
                    'title': 'Rødvin',
                    'image': ''
                },
                {
                    'title': 'Rødvin MEDLEM',
                    'image': ''
                },
                {
                    'title': 'Rødvin Halvflaske',
                    'image': ''
                },
                {
                    'title': 'Cava Flaske',
                    'image': ''
                },
                {
                    'title': 'Hooch',
                    'image': ''
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
                    'image': ''
                },
                {
                    'title': 'Fiskefjes 4 for 100',
                    'image': ''
                },
                {
                    'title': 'Små Grønne SHOT',
                    'image': ''
                },
                {
                    'title': 'Små Grønne 4 for 100',
                    'image': ''
                },
                {
                    'title': 'Små Grå SHOT',
                    'image': ''
                },
                {
                    'title': 'Små Grå 4 for 100',
                    'image': ''
                },
                {
                    'title': 'Små Kolde SHOT',
                    'image': ''
                },
                {
                    'title': 'Små Kolde 4 for 100',
                    'image': ''
                },
                {
                    'title': 'Små Blå SHOT',
                    'image': ''
                },
                {
                    'title': 'Små Blå 4 for 100',
                    'image': ''
                }
            ]
        });
}