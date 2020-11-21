const xhr = new XMLHttpRequest(),
  method = "GET",
  url = "include/nav-inc.html";//読み込まれるHTMLを指定
const box = document.getElementById("nav-inc");//読み込みたい位置を指定

xhr.open(method, url, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let restxt = xhr.responseText;//String型で取得
    box.innerHTML = restxt;//完了
  }
};
xhr.send();


/**
 * ---------------------------------------
 * ドロップダウンメニュー Vanila js(旧サイト用)
 * ---------------------------------------
 */

//nav-inc.jsで読み込んだ要素に対して処理を行うため
//window.onloadでDOMの構築が済んだ後に処理を開始させる

window.onload = () => {

  document.querySelectorAll('.nav-toggle').forEach((nav) => {
    console.log(nav);
    nav.addEventListener('mouseenter', (e) => {
      console.log(e);
      e.target.classList.add('active');
    });
    nav.addEventListener('mouseleave', (e) => {
      e.target.classList.remove('active');
    });
  });

}


/* Sample-002 */
/*window.onload = () => {

  let dropDown = document.querySelector('.new-nav');
  console.log(dropDown);
  dropDown.addEventListener('mouseover', (e) => {
    console.log(e);
    if (dropDown.classList.contains('.closed')) {
      dropDown.classList.remove('.closed')
    }
  })

}*/

/* Sample-001 */
/*const menu = document.querySelectorAll(".new-nav > li");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('mouseover', function (e) {
    e.target.style.transition = "all ease-in .5s";
    this.nextElementSibling.classList.toggle("active");
  });
}*/
