var oLi = document.getElementsByTagName('li');
var num = 1,
	flag = false;
function getJsonData() {
	if (!flag){
		flag = true;
		createNewAjax('GET','./getPics.php','cpage=' + num++,function (data) {
			var objJson = JSON.parse(data);
			console.log(objJson);
			objJson.forEach(function (ele) {
				createPicsDom(ele)
			})
		});
	}
}
function createPicsDom(data) {
	var oDiv = document.createElement('div');
	var oImg = new Image();
	var oP = document.createElement('p');
	var index = insertLi(oLi);
	var oLiWidth = oLi[0].offsetWidth;
	var picHeight = oLiWidth*parseInt(data.height)/parseInt(data.width);

	oDiv.className = 'single-block';
	oImg.src = data.preview;
	oP.innerText = data.title;

	oImg.height = picHeight;

	oDiv.appendChild(oP);
	oDiv.insertBefore(oImg,oP);

	oLi[index].appendChild(oDiv);

	flag = false;
}
getJsonData();
function insertLi(dom) {
	var initialLi = dom[0].offsetHeight,
		index = 0;
	for (var i = 1, len = dom.length;i < len;i++){
		var nowLi = dom[i].offsetHeight;
		if (initialLi > nowLi){
			initialLi = nowLi;
			index = i;
		}
	}
	return index;
}
document.onscroll = function (ev) {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var liIndex = insertLi(oLi);
	var liHeight = oLi[liIndex].offsetHeight;
	console.log(document.documentElement.scrollHeight);
	var clientHeight = document.documentElement.clientHeight;
	if ((scrollTop + clientHeight) > liHeight){
		getJsonData();
	}
};
