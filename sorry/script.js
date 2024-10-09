document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener('mousemove', event => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

document.addEventListener('DOMContentLoaded', (event) => {
  // 定义要切换的文本数组
  const messages = [
      "非常抱歉",
      "管理员实习工作",
      "暂停资源下载服务"
  ];

  // 获取 <h1> 元素
  const h1Element = document.getElementById('sorry-message');

  // 当前显示的消息索引
  let currentIndex = 0;

  // 每2.5秒切换一次消息
  setInterval(() => {
      // 更新 <h1> 元素的文本
      h1Element.textContent = `Sorry ${messages[currentIndex]}`;

      // 更新当前索引，如果到达数组末尾则重置为0
      currentIndex = (currentIndex + 1) % messages.length;
  }, 2500);  // 2500毫秒 = 2.5秒
});