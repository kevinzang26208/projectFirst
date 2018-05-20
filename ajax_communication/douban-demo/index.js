$('input:first-child','.search-box').on('input',function () {
	var iptVal = $(this).val();
	$.ajax({
		method:'GET',
		url:'https://api.douban.com/v2/music/search',
		data:'q=' + iptVal + '&count=7',
		dataType:'jsonP',
		success:dispose
	})
});
function dispose(data) {
	console.log(data);
	// var oUl = document.querySelectorAll('.search-input ul')[0];
	if (data.count > 0) {
		var innerStrDom = '';
		data.musics.forEach(function (ele) {
			console.log(ele.author);
			var author = ele.author === undefined?'': ele.author[0].name;
			innerStrDom += '<li>\
								<<a href="' + ele.alt + '">\
								<div>\
								<img src="' + ele.image + ' " alt="">\
							</div>\
							<div>\
								<span>' + ele.title + '</span></br>\
								\<span>表演者：' + author + '</span>\
							</div>\
								</a>\
						</li>'
		});
		$('.search-input ul').html(innerStrDom);
		$('.display-box').show();
	}

}
