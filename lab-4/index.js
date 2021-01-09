var url = 'https://www.mocky.io/v2/5cbc3d51320000d90c80d836';

var listGroup = $('.list-group');

$('.scroll-top').on('click', function (evt) {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
});

$('.scroll-down').on('click', function (evt) {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 300);
});

$.ajax({
    type: 'GET',
    url: url,
    success: function (response) {
        var html = response.map(renderItem);
        listGroup.html(html);
    },
    error: function (error) {
        console.error('Error: ' + error.statusText + '. Status code ' + error.status);
    }
});

function renderItem(quote) {
    var li = $('<li>', {
        class: 'list-group-item'
    }).append(
        $('<h3>', { text: quote.quoteText })
    ).append(
        $('<p>', { text: quote.quoteAuthor })
    ).append(
        $('<button>', {
            click: function (evt) {
                li.remove();
            },
            text: 'X'
        })
    );
    return li;
}