/*Ajax封装函数，并兼容IE，采用回调函数的形式返回数据，参数data为传入的data*/
function createNewAjax(method,url,data,callback) {
	var xhr;
	if (XMLHttpRequest){
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject('Microsoft.XMLHttp');
	}
	if(method === 'GET') {
		xhr.open(method, url + '?' + data, true);
		xhr.send();
	} else if(method === 'POST') {
		xhr.open(method,url,true);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	xhr.onreadystatechange = function (ev) {
		if (xhr.readyState === 4){
			if (xhr.status === 200){
				// oRes = JSON.parse(xhr.responseText);/*还没有转换为json对象的形式*/
				callback(xhr.responseText);
			} else {
				console.log('error');
			}
		}
	}
}