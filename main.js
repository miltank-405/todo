/* 
	- やりたいこと
		・フォームにタスクの内容を入力
		・enterを押すと下に表示される
		・左にチェックボタン
		・チェックしたら消える仕組み
		・イメージはiPhoneのリマインダー

	- やりたい手順
		1. フォームに入力して下に表示
		2. チェックボタンの実装
		3. チェックしたらバイバイ
 */


// 箱の中にタスク入力してエンター押すと下に表示される
// 	- input要素から内容を取得
// 	- enterを押して送信されたのを理解させる
// 	- つまり？formの送信を監視できればいいのでは？
// 	- #js-listに入力したタスクを追加して表示
// formに入力 --(submit)送信(addEventListener)--> 内容を取得して表示

/* とりあえずフォームに入力してコンソールに表示させる */
// #js-formの要素をGETだぜ！
const formElement = document.querySelector("#js-form");


// submitのイベントが発生した時に内容をGET
const inputElement = document.querySelector("#js-text-input");


// listをコンテナに
const containerElement = document.querySelector("#js-list");


// DOM要素を追加
const elem = document.createElement('li');

// formからきたsubmitをGETだぜ！
formElement.addEventListener("submit", (event) => {
	// ▼submitの元々の動きをstopさせる (いちいちリロードしてウザいから)
	event.preventDefault();
	console.log(inputElement.value);
	// ▲consoleに入力した文字を表示させたい 'じゃなくて`でできたw

	// 下に表示
	// elemについて調べよう。むしろDOM
	elem.innerHTML = inputElement.value;
	containerElement.appendChild(elem);

	// <li>に入力した内容を反映させたい

	// const value = Object.keys( elem );
	// value.length +1;





	// なんか思いついた！けど違った
	// for (var i=0; i < inputElement.length; i++) {
	// 	elem.innerHTML = inputElement.value;
	// 	containerElement.appendChild(elem);
	// 	elem.textContent = inputElement[i]
	// 	document.getElementById('js-list').appendChild(elem);
	// }

});






