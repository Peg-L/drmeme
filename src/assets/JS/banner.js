// 透過 arr 陣列儲存要變化的文字內容
const arr = [
  '一位醫生',
  '水肺潛水教練',
  '楓之谷楓樹種子',
  '經營 IG 迷因帳號',
  '有錄 Podcast',
];

// 用 count 計算次數，後面會用來計算目前要顯示的文字內容是哪一個
let count = 5;

// 用 setInterval 做每一次的切換變化
setInterval(typewriteAnimation, 3000);

function typewriteAnimation() {
  // 設定動畫名稱並取得元素
  const typewriteAni = document.getElementById('typewrite-animated');
  const typewriteText = document.getElementById('typewrite-text');

  count += 1;
  typewriteText.style.animation = `typing 1s steps(${
    arr[count % 5].length
  }, end), blink-caret 0.5s step-end infinite`;

  // 判斷 #typewrite-animated 的 class 中是否含有 'typewriter' 這個 class
  if (typewriteAni.classList.contains('typewriter')) {
    // 有的話就移除
    typewriteAni.classList.remove('typewriter');
  } else {
    // 沒有的話就加上
    typewriteAni.classList.add('typewriter');
    // 監聽元素 animationend 事件，動畫執行完 800 毫秒後清掉文字與 'typewriter' 這個 class
    typewriteAni.addEventListener('animationend', function () {
      setTimeout(function () {
        typewriteText.textContent = '';
        typewriteAni.classList.remove('typewriter');
        typewriteText.style.animation = 'none';
      }, 1200);
    });
  }
  // 用 count%3 來計算目前要取得的 arr 位置是第幾個（arr 中有 3 筆就用 %3，五筆就 %5）
  typewriteText.textContent = arr[count % 5];
}
