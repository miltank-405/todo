// ボタンクリックしたら〜の動き付けたい
button.addEventListener('click', () => {
	// 追加button押したら#enterで文字を表示
	const input = document.getElementById('enter');
	// 追加ボタン押したらリスト表示できるように...
	// リストのタグないから追加（新要素はcreateElementか？）
	const li = document.createElement('li');
	// テキスト入力でli内に表示（input -> nodeがやりやすそうな感じ。知らんけど）
	li.innerText = input.nodeValue;
	// 各リストの項目に完了ボタンを追加したい
	// appendChildがいいのか？

	// 完了したらcssで打ち消し線の表示をしたい

	// 
});
