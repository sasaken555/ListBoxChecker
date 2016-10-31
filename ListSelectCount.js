function check(obj) {

  // arr<int>: 選択行
  var arr = [];
  // count<int>: 選択数
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
      arr.push(i+1);
    }
    // 選択行を格納

    // console.log(opt[i]);
    // console.log(i + ": " + arr[i]);
  }
  console.log("選択数: " + count);
  console.log("選択行" + arr);

  regulate(count, opt);
}

function regulate(num, optj) {
  // 選択数を制限し、制限を超えたら警告を返す
  if(num > 5) {
    // 選択状態を解除
    for(var j = 0; j < optj.length; j++) {
      optj[j].selected = false;
    }
    alert("ERROR!!\n５件を超えて選択することはできません。");
  }
  else {
    // 何もしない
    return;
  }
}
