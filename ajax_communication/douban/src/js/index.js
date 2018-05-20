(function () {
    var $submit = $('.submit'),
        $input = $('.input'),
        $searchList = $('.search_list');
    $input.on('input',function (e) {
        e.preventDefault();
        var value = $(this).val();
        console.log(value);
        ajaxData(value);

    })

    
    function ajaxData(value) {
        $.ajax({
            type: 'GET',
            url: 'https://api.douban.com/v2/music/search',
            data: 'q='+value+'&count=7',
            dataType: 'jsonp',
            success: addItem
        })
        // $.ajax({
        //     type: 'GET',
        //     url: 'http://localhost/web/ajax/douban/src/js/data.txt',
        //     data: 'q='+value+'&count=7',
        //     success: addItem
        // })
    }
    function addItem(data) {
        // var data = JSON.parse(data);
        var dataList = data.musics;
        var str = '';
        if(dataList.length > 0) {
            dataList.forEach(function (ele, index) {
                str += '<li>\
                            <a href="http://localhost/web/ajax/douban/itemPage.html?id='+ele.id+'">\
                                <img src="'+ele.image+'" alt="">\
                                <div>\
                                    <em>'+ele.title+'</em>\
                                    <p>'+ele.author[0].name+'</p>\
                                </div>\
                            </a>\
                        </li>'
            })
            $searchList.html($(str));
        }

    }
})()