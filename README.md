# jstoolsfunc
cocos creator v3.5.2: js 工具函数

# 一、  js 闭包
## 1、闭包的概念
闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包就是让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 代码环境中，闭包会随着函数的创建而被同时创建。
## 2、闭包的定义
当函数可以记住并访问所在的词法作用域时，闭包就产生了，即使函数是在当前词法作用域之外被执行。根据上面的理解，让我们实际操作一下，先看以下代码：
function globalFun () {

   let a = 0;

   return function localFun () {

       console.log(a);

   };

};

const resolve = globalFun();

resolve(); // 控制台打印 0

这是一段非常经典的闭包知识相关的代码，通过以上代码我们可以理解到闭包的产生会有三个条件：
### 2.1：globalFun函数内返回localFun函数。
### 2.2: localFun函数调用 (使用) 了globalFun函数的局部变量。
### 2.3：localFun 函数被调用。
## 3、小结
我们在外部环境访问了内部环境的变量，并且正常执行了globalFun的作用域会被销毁掉，垃圾回收机制也会释放掉内存空间。显然闭包阻止了这件事情的发生。
## 4、闭包产生的条件
由于localFun声明的位置，使其拥有涵盖了globalFun的内部作用域，当localFun被调用后，会保持对globalFun作用域的引用，访问a变量。保持对外部作用域变量的引用，就会产生闭包，而不是非要返回函数。

function waiting(msg) {

   setTimeout(function () {

      console.log(msg)

   }, 1000)

}

waiting('js')

不管做了什么操作，只要你将内部函数传递到所在的词法作用域之外，他都会保持对内部作用域的引用，无论在哪里执行内部函数，都会创建对应的闭包。例如这个例子中setTimeout保持对waiting的引用，在执行时也会创建闭包。
## 5、闭包的用途
当我们重复使用一个变量名时，会考虑到命名污染的问题，这时候就可以使用闭包。这种变量被叫做私有变量或者局部变量。
for(var i = 0; i <= 10; i++){

   setTimeout(function (){

      console.log(i)

   },i)

}

每次循环，我们都会挑出一份i用来输出，但因为setTimeout会在循环完成后执行，每次的i都在同一全局作用域下，于是后来居上，覆盖了前面的i，再由setTimeout执行时，就全是11了。
怎么使得每次循环输出正确呢？
我们只需要将每次的i变成一个私有变量，有独立的作用域，让其不再篡改就OK了。
这个时候我们就需要使用到IIFE（ 立即调用函数表达式），如下是来自MDN 官网对IIFE的解释：
(function () {

   statements

})();

这是一个被称为 自执行匿名函数 的设计模式，主要包含两部分。第一部分是包围在 圆括号运算符 () 里的一个匿名函数，这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。
第二部分再一次使用 () 创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数。
for(var i = 1; i <= 5; i++) {

   (function (j) {

      setTimeout(function () {

         console.log(j)

      }, j* 1000)

   })(i);

}

这里利用IIFE拥有独立的词法作用域的特性，将变量私有化，这样在setTimeout执行时就会得到正确输出。没错，好像就是利用闭包将每次的变量缓存起来，放在独立的内存中。
## 6、总结
闭包就是一个函数引用另外一个函数的变量，因为变量被引用着所以不会被回收，因此可以用来封装一个私有变量。这是优点也是缺点，不必要的闭包只会徒增内存消耗！另外使用闭包也要注意变量的值是否符合你的要求，因为他就像一个静态私有变量一样。闭包通常会跟很多东西混搭起来，接触多了才能加深理解。
## 7、例子
    /**
     * @description: 
     * @param {*} e
     * @param {*} t
     * @return {*}
     */
    public static wait(n, callback) {
        if (n === 0) {
            callback();
            return;
        }

        let total = 0;
        return function () {
            total++;
            if (total === n) {
                callback();
            }
        };
    };
    
    
    let nextStep = () => {
        this.itemsViews.forEach((comp: hcwgToolbarItemView, index: number) => {
             this.bg.addChild(comp.node);
             count++;
             if (count >= this.toolbar.getSceneItems().length) {
                 this.initData();
             }
        });
     }

     let wait = hcwgCleverapps.wait(this.toolbar.getSceneItems().length, nextStep);

     this.toolbar.getSceneItems().forEach((item, index) => {
          hcwgToolbarItemView.ins(item, (comp: hcwgToolbarItemView) => {
               this.itemsViews[index] = comp;
                wait();
          });
     });

