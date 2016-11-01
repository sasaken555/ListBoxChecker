function check(obj) {

  // arr: 選択行
  var arr = [];
  // count: 選択数
  var count = 0;

  // obj: select以下のHTML要素全て
  // opt: option要素個々を格納した配列
  //    -> HTMLOptionCollectionインターフェイスの実装
  var opt = obj.options;

  // 選択数を格納
  for(var i = 0; i < opt.length; i++) {
    // selected: 要素が選択されているかをboolean型で返却
    if (opt[i].selected) {
      count++
      // 選択行を格納
      arr.push(i+1);
    }

    // console.log(opt[i]);
    // console.log(i + ": " + arr[i]);
  }
  console.log("選択数: " + count);
  console.log("選択行" + arr);

  regulate(count, opt);
  btnOnOff(count);

}

// 選択数を制限し、制限を超えたら警告を返す
function regulate(num, optj) {
  if(num > 5) {
    // ５件以上なので選択状態を解除
    for(var j = 0; j < optj.length; j++) {
      optj[j].selected = false;
    }
    alert("ERROR!!\n５件を超えて選択することはできません。");
  }
  else {
    // 制限ないなので何もしない
    return;
  }
}

// リストから項目選択済みかつ選択数が５件以内なら有効化
function btnOnOff(num) {
  if (num > 0 && num <= 5) {
    // リストから選択されており、制限以内
    document.getElementById("btn").disabled = false;
  }
  else {
    // 未選択または選択制限数を超えた場合
    document.getElementById("btn").disabled = true;
  }
}
