$(document).ready(function() {
    const $appendToMe = $('#appendToMe');
    const $html = $('html'); 
    const $body = $('body'); 

    storeItems.forEach(function(item) {
        if (item.inStock) {
            const $paragraph = $('<p class="storeItems"></p>');
            const $columnLeft = $('<span class="column-left"></span>').text(`$${item.price}`);
            const $columnCenter = $('<span class="column-center"></span>').text(item.name);
            const $columnRight = $('<span class="column-right"></span>').text(item.details);

            $paragraph.append($columnLeft, $columnCenter, $columnRight);
            $appendToMe.append($paragraph);
        }
    });

    const $clickMe = $('#clickMe');
    $clickMe.click(function() {
        $html.toggleClass('darkMode'); 
        $body.toggleClass('darkMode'); 
    });
});

const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
