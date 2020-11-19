const xhr = new XMLHttpRequest(),
  method = "GET",
  url = "include/nav-inc.html";//読み込まれるHTMLを指定
const box = document.getElementById("nav-inc");//読み込みたい位置を指定

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let restxt = xhr.responseText;//String型で取得
    box.innerHTML = restxt;//完了
  }
};
xhr.send();
