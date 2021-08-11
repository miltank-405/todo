// 箱の中にタスク入力してエンター押すと下に表示される
// 	- input要素から内容を取得
// 	- enterを押して送信されたのを理解させる
// 	- つまり？formの送信を監視できればいいのでは？
// 	- #js-listに入力したタスクを追加して表示
// formに入力 --(submit)送信(addEventListener)--> 内容を取得して表示

// #js-formの要素をGETだぜ！
const formElement = document.querySelector("#js-form");
// submitのイベントが発生した時に内容をGET
const inputElement = document.querySelector("#js-text-input");

// formからきたsubmitをGETだぜ！
formElement.addEventListener("submit", (event) => {
	// ▼submitの元々の動きをstopさせる (いちいちリロードしてウザいから)
	event.preventDefault();
	console.log(`入力欄の値: ${inputElement.value}`);
	// ▲consoleに入力した文字を表示させたい 'じゃなくて`でできたw
});






