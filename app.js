if('serviceWorker' in navigator) {
	navigator.serviceWorker.register("js/sw.js")
		.then(() => console.log("����������������"))
		.catch(() => console.log("���������� ������"));
}