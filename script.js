let snowContainer = document.querySelector(".snow-container");

const createSnow = () => {
    /* 雪の要素を生成 */
    let snow = document.createElement("span");
    snow.className = "snow";

    minSize = 5;
    maxSize = 10;

    /* 雪の大きさをランダムに決める */
    let snowSize = Math.random() * (maxSize - minSize) + minSize;
    
    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    /* 雪の降り始めの位置を決定する */
    snow.style.left = Math.random() * 100 + "%";
    
    snowContainer.appendChild(snow);

    /* 10秒後に雪を消す */
    setTimeout(() => {
        snow.remove();
    }, 10000);
};

setInterval(createSnow, 100);
