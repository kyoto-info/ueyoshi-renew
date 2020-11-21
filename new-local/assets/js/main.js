/**
 * -------------
 * ページ移遷時FI
 * -------------
 */
$(function () {
  $('body').fadeIn(2000);
});

//btn .active +
$('.filter-nav li').click(function () {
  $('.filter-nav li').removeClass('active');
  $(this).addClass('active');
});

/**
 * -------------
 * ローディングアニメーション
 * -------------
 */

window.onload = () => {
  const progress = document.getElementById('loading');
  progress.classList.add('loaded');
};

/**
 * -------------
 * ドロップダウンメニュー
 * -------------
 */
$(function () {
  const nav = ('.nav-child');

  $(nav)
    .mouseover(function (e) {
      console.log(e);
      $('ul', this).stop().slideDown('500ms');
      console.log(this);
    })
    .mouseout(function (e) {
      $('ul', this).stop().slideUp('500ms');
    });
});




/**
 * -------------
 * Back to top ボタン
 * -------------
 */
//ボタンの要素に変数を設定
const bttBtn = document.getElementById('btt-btn');

//初期ウィンドウの高さを超えてスクロールした場合
//ボタンを表示する
const scrollFunc = () => {
  //現在のスクロール値を取得
  let y = window.scrollY;
  /*console.log(y);*/
  //スクロールによるボタンの表示/非表示
  if (y > 500) {
    bttBtn.classList.replace('hyde', 'show');
  } else {
    bttBtn.classList.replace('show', 'hyde');
  }
};

//スクロールによるボタンの表示/非表示 イベントハンドラ
window.addEventListener("scroll", scrollFunc);

const stTop = () => {
  //トップからのスクロール位置を取得して変数'c'に代入
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  console.log(c);
  if (c > 0) {
    window.requestAnimationFrame(stTop);
    //scrollToはXとYの座標を取得
    window.scrollTo(0, c - c / 25);
  }
};

//Back to top イベントハンドラ
bttBtn.onclick = function (e) {
  e.preventDefault();
  stTop();
}


/**
 * -------------
 * animate.css関連
 * -------------
 */



/**
 * -------------
 * パララックス関連
 * -------------
 */

// 背景画像のスクロール速度。数字が小さいほど速い。
const firstXSpeed = 300;
const firstYSpeed = 5;
const secondXSpeed = 0;
const secondYSpeed = 0;
const thredXSpeed = 0;
const thredYSpeed = 0;
const fourthXSpeed = 0;
const fourthYSpeed = 0;
const fifthXSpeed = 0;
const fifthYSpeed = 0;

// パララックスを適用する関数
const showParallax = () => {
  const scrollTop = $(window).scrollTop();
  /*console.log(scrollTop);*/

  // 背景画像の位置をスクロールに合わせて変える
  const offsetFirstX = Math.round(scrollTop / firstXSpeed);
  const offsetFirstY = Math.round(scrollTop / firstYSpeed);
  const offsetSecondX = Math.round(scrollTop / secondXSpeed);
  const offsetSecondY = Math.round(scrollTop / secondYSpeed);
  const offsetThredX = Math.round(scrollTop / thredXSpeed);
  const offsetThredY = Math.round(scrollTop / thredYSpeed);
  const offsetFourthX = Math.round(scrollTop / fourthXSpeed);
  const offsetFourthY = Math.round(scrollTop / fourthYSpeed);
  const offsetFifthX = Math.round(scrollTop / fifthXSpeed);
  const offsetFifthY = Math.round(scrollTop / fifthYSpeed);

  $('.gallery-bg').css({
    'background-position':
      // 一番上
      `${-offsetFirstX}px ${offsetFirstY}px,
       ${offsetSecondX}px ${-offsetSecondY}px,
       ${offsetThredX}px ${-offsetThredY}px,
       ${offsetFourthX}px ${-offsetFourthY}px,
       ${offsetFifthX}px ${-offsetFifthY}px,`
      // 一番下
      + '0% 0%',
  });

};

// パララックスを初期化する関数
const initParallax = () => {
  $(window).off('scroll', showParallax);

  // スクロールのたびにshowParallax関数を呼ぶ
  $(window).on('scroll', showParallax);
};


/**
 * -------------
 * 背景画像拡大
 * -------------
 */


/**
 * -------------
 * イベントハンドラ
 * -------------
 */

$(window).on('scroll', () => {
  // ウインドウをスクロールするとここが実行される
  initParallax();
});
