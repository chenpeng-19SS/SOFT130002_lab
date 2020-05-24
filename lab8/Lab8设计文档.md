# Lab8设计文档

19302010028  陈鹏

## github地址

https://github.com/chenpeng-19SS/SOFT130002_lab

## 实现过程

1.类似样例的布局，对css文件进行修改以达到。

2.鼠标点击轮播，进行图片移动即可。需求代码如下：

```js
function altGoRight() {
    for (let i = 0 ; i < images.length ; i++){
        let next = parseInt(images[i].alt,10) + 1;
        images[i].alt = next % 6 + Math.floor(next / 6) + "";
    }
}
function altGoLeft() {
    for (let i = 0 ; i < images.length ; i++){
        let previous = parseInt(images[i].alt,10) + 5;
        images[i].alt = previous % 6 + 5 * Math.floor(6 / previous) + "";
    }
}
```

```javascript
function goRight() {
    altGoRight();
    for (let i = 0 ; i < images.length ; i++){
        images[i].src = images[i].alt + "\.jpg";
    }
    reHighlight();
}
function goLeft() {
    altGoLeft();
    for (let i = 0 ; i < images.length ; i++){
        images[i].src = images[i].alt + "\.jpg";
    }
    reHighlight();
}
function reHighlight() {
    for (let i = 0 ; i < footers.length ; i++){
        footers[i].className = "";
    }
    footers[parseInt(images[1].alt) - 1].className = "on";
}
```

2.自动轮播：

使用timer = setInterval()`与`clearInterval(timer)`两个语句即可。

```javascript 
function AutoStart() {
    auto = window.setInterval(goRight,2000);
}
function AutoStop() {
    window.clearInterval(auto);
```

3.跳转：遍历后进行筛选即可



4.编辑：用户点击后将`td`替换为`input`进行修改即可。

