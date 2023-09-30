var img0, img1, img2, img3, img4, count;
home = "img/alexandra-zelena-uia0osRgNn0-unsplash.jpg";
img0 = "img/pawel-czerwinski-suLgJZ1edT4-unsplash.jpg";
img1 = "img/pawel-czerwinski-m30wSnGoXb0-unsplash.jpg";
img2 = "img/louis-droege-bsb3QTm3HiE-unsplash.jpg";
img3 = "img/mitchell-luo-mAThYuM_v7s-unsplash.jpg"
count = 0;
$("#name").click(function () {
    if (count == 0) {
        $("body").css("background-image", "url(" + img0 + ")");
        count++;
    }
    else if (count == 1) {
        $("body").css("background-image", "url(" + img1 + ")");
        count++;
    }
    else if (count == 2) {
        $("body").css("background-image", "url(" + img2 + ")");
        count++;
    }
    else if (count == 3) {
        $("body").css("background-image", "url(" + img3 + ")");
        count++;
    }
    else if (count == 4) {
        $("body").css("background-image", "url(" + home + ")");
        count = 0;
    }
});

$("#time").click(function () {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();
    $("#current-time h1").html(time);
});
$("#query").click(function () {
    $("#query").attr("value", "");
})

function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'b9f68bf2905143ddb5587649fa00ec92'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
};
