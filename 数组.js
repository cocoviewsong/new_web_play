const { promises } = require("dns");
const { resolve } = require("path");

// 一个默认的数字数组
    function iarr(){
        var iarr=[1,2,3,4];
        return iarr;
    }
// 一个默认的字符串数字
    function sarr(){
        var sarr=['a', 'b', 'c', 'd', 'e', 'f'];
        return sarr;
    }

// 数组合并
    // concat
    var arr1 =[1,2,3];
    var arr2 =[4,5,6];
    var getarr=iarr().concat(sarr());
    console.log('concat方法：'+getarr);
    // ...
    var arr1 =[1,2,3];
    var arr2=[4,5,6];
    var arr3=[...arr1,...arr2];
    console.log("...方法："+arr3);

// 数组提取
    // slice 该方法不会改变原数组
    var arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
    
    var arrslice = arr1.slice();
    console.log('slice()方法:'+arrslice);

    var arrslice1 = arr1.slice(2);
    console.log('slice(2)方法:'+arrslice1);

    var arrslice2 = arr1.slice(2,4);
    console.log('slice(2,4)方法:'+arrslice2);

    console.log("这里是原数组:"+arr1);

// 固定值填充数组
    // fill 
    var tarr=Array(4).fill("f");
    console.log(tarr);

    // 指定位置填充,fill(要填充的值,开始填充的位置,结束填充的位置)
    var arr = [1,2,3];
    var arrfill = arr.fill(9,0,2);
    console.log(arrfill);

// 反转数组
    // reverse
    var arr =[1,6,6];
    var reversearr = arr.reverse();
    console.log("反转后的arr:"+reversearr);

// 数组排序
    // 无参数的 sort 按Unicode 编码排序
    var arr =['a', 'b', 'c', 'd', 'e', 'f','1'];
    var sortarr = arr.sort();
    console.log("这里是编码排序的结果："+sortarr);

    // 有参数的排序 大于0 交换位置 小于0 不交换 （a，b会冲数组里面选） a-b 大于0 两个值交换位置  b a升序   b-a则降序
    var arr =[1,66,11,55,2];
    var result = arr.sort(function (a,b){
        return a-b;  
    })
    console.log(result);

    // 代码简化
    var result = arr.sort((a,b)=>a-b);
    console.log('这里是简化后的代码:'+result);
    

    // 例子
    let dataList = [
        {
            title: '品牌鞋子，高品质低价入手',
            publishTime: 200,
        },
        {
            title: '不是很贵，但是很暖',
            publishTime: 100,
        },
        {
            title: '无法拒绝的美食，跟我一起吃',
            publishTime: 300,
        },
    ];
    console.log('这里是未排序的结果:'+JSON.stringify(dataList));
    
    
    var youya= dataList.sort((a,b)=>a.publishTime-b.publishTime);
    console.log('这里是排序后的代码:'+JSON.stringify(youya));
    
    // 转化成int类型 parseInt       JSON.stringify 将JS对象转化为字符串
    var youya= dataList.sort((a,b)=>parseInt(a.publishTime)-parseInt(b.publishTime));

// 获取元素索引
    // indexOf(要查询的元素,查找的起始位置)，从左到右，没有找到则返回-1，它是严格等于
    var arr =[1,2,3,2];
    var arr1 =['a','b','c'];
    console.log('元素索引位置:'+arr.indexOf(2,2));
    // 找不到B
    console.log('元素索引位置:'+arr1.indexOf(B));

    // lastIndexOf(要查询的元素,查找的起始位置),从右到左
    var arr =[1,2,3,2];
    var arr1 =['a','b','c'];
    console.log('元素索引位置:'+arr.lastIndexOf(2,0));
    // 找不到B
    console.log('元素索引位置:'+arr1.lastindexOf(B));

// 判断一个数组是否包含某元素
    // includes(想要查找的元素,查询的起始位置)
    var arr =[1,2,3,2];
    console.log('元素是否存在:'+arr.includes(2));

    // find() 找出第一个满足「指定条件返回 true」的元素，并立即停止查找；如果没找到，则返回 undefined。
    var arr =[1,3,5,7];
    var result =arr.find((a)=>{
        return a>4
        })
    console.log('大于4的第一个值:'+result);

    // findIndex() 找出第一个满足「指定条件返回 true」的元素的索引，并立即停止遍历；如果没找到，则返回 -1。
    var arr =[1,3,5,7];
    var result =arr.findIndex((a)=>{
        return a>4
        })
    console.log('第一个大于4的值的下标为:'+result);

// every()：对数组中每一项运行回调函数，如果都返回 true，every 就返回 true；如果有一项返回 false，则停止遍历，此方法返回 false。
    var arr =[1,3,5,7];
    var result=arr.every((a)=>{
        if (a>4){
            return true;
        }
        return false;
    })
    console.log('值是否都大于4:'+result);

// some()：对数组中每一个元素运行回调函数，只要有一个元素返回 true，则停止遍历，此方法返回 true。 
    var arr =[1,3,5,7];
    var result=arr.some((a)=>{
        if (a>4){
            return true;
        }
        return false;
    })
    console.log('是否有一个值大于4:'+result);


// 遍历数组
    // 常规for循环
    var arr =[1,3,5,7];
    var i = 0 ;
    for (i;i<arr.length;i++) {
        console.log('arr[i]的值:'+arr[i]);  // arr[i]代表的是数组中的每一个元素i
    }
    console.log('打印值:'+arr);

    // forEach(函数) 没有返回值    由我们创建但是不由我们调用的，我们称为回调函数 不会改变数组
    // arr.forEach(function (currentItem, currentIndex, currentArray) {
	// console.log(currentValue)});
    let myArr = ['王一', '王二', '王三'];
    myArr.forEach((currentItem, currentIndex, currentArray) => {
        console.log('item:' + currentItem);
        // console.log('index:' + currentIndex);
        // console.log('arr:' + JSON.stringify(currentArray));
        // console.log('----------');
    });

    //  for of
    var arr =[1,3,5,7];
    for (let value of arr){
        console.log('for of遍历的值:'+value);
    }

    // map()
    var arr =[1,3,5,7];
    var arr1 =arr.map(item=>{
        return item+10;
    })
    console.log('arr1的值:'+arr1);

        // 将 A 数组中某个属性的值，存储到 B 数组中
        const arr1 = [
            { name: '奇怪的人', age: '28' },
            { name: 'debug', age: '32' },
        ];
        var arr =[1,3,5,7];
        // 将数组 arr1 中的 name 属性，存储到 数组 arr2 中
        const arr2 = arr1.map(item => item.name);
        var arr = arr.map(item => item);
        // 将数组 arr1 中的 name、age这两个属性，改一下“键”的名字，存储到 arr3中
        const arr3 = arr1.map(item => ({
            myName: item.name,
            myAge: item.age,
        })); // 将数组 arr1 中的 name 属性，存储到 数组 arr2 中
        
        console.log('arr1:' + JSON.stringify(arr1));
        console.log('arr2:' + JSON.stringify(arr2));
        console.log('arr3:' + JSON.stringify(arr3));
    
    // filter（）根据条件过滤数组
    var arr =[1,3,5,7];
    var youyaarr=arr.filter((item)=>{
        if (item>3){
            return true;
        }
    })
    // 简洁写法：
    var youyaarr =arr.filter(item => item>3);
    console.log('大于3的数组:'+youyaarr);

    // 例子
    const arr1 = [
        { name: '许嵩', type: '一线' },
        { name: '周杰伦', type: '退居二线' },
        { name: '邓紫棋', type: '一线' },
    ];
    
    const arr2 = arr1.filter((item) => item.type == '一线'); // 筛选出一线歌手
    
    console.log(JSON.stringify(arr2));

// reduce累加器
    var arr =[1,3,5,7];
    var leijia=arr.reduce((prev,item)=>{
        return prev+item;
    },0)
    console.log('leijia的值:'+leijia);

    // 统计某个元素的出现次数,  最后的0为初始值——可选参数：initialValue
    var arr =[1,3,5,7,3,3];
    var num=arr.reduce((count,item)=>{
        return  count += item==3 ? 1 :0;
    },0)
    console.log('出现次数:'+num);

    // 函数写法
    function count(arr,value){
        if(!arr || arr.length==0)
            return 0;
    
        return arr.reduce((count,item)=>{
            count +=item == value ? 1 :0;
            return count;
    },0);
    }

    console.log('count的值:'+count(arr,3));

    // 求元素的最大值
    var arr =[1,3,5,7];
    var nummax=arr.reduce((count,item)=>{
        return  count>item ? count :item;
    },0)
    console.log('数组最大值为:'+nummax);

// splice 数组去重
    var arr =[1,3,5,7,3,3];
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j);
                //当删除了当前j所在的元素以后，后边的元素会自动补位
                //此时将不会再比较这个元素，我们需要再比较一次j所在位置的元素
                //使j自减
                j--;
            }
        }
    }
    console.log('去重后的数组:'+arr);
    

// join(可以指定分隔符) 将数组转换为字符串，返回结果为转换后的字符串
    var arr =[1,3,5,7,3,3];
    var stringarr = arr.join("|");
    console.log('转换后的值:'+stringarr);

// reverse() 反转数组 会改变原数组
    var arr =[1,3,5,7,3,3];
    var arr1 =arr.reverse();
    console.log('反转前的值:'+JSON.stringify(arr));
    console.log('反转后的值:'+JSON.stringify(arr1));
    

// 类数组对象
    function foo() {
        console.log("arguments的值:"+arguments);
        console.log("arguments的类型:"+typeof arguments);
    }

    foo('a', 'b');

// 递归牵牛花
    function digui(n){
        // if (n == 1) {
        //     return 1;
        // }
        // else if (n >1){
        // return n * factorial(n - 1);}
        
        n==1 ? 1:n*digui(n-1);
        return digui(n);
    }
    for(var i=100;i<=999;i++){
        // 转换成字符串
        var i_str=i.toString();

        var bai = Number(i_str[0]);
        var shi = Number(i_str[1]);
        var ge  = Number(i_str[2]);
    
    if(digui(bai)+digui(shi)+digui(ge)==i){
        console.log('牵牛花:'+i);
        
    }}

    // function xunhuan(n){
    //     if (n==1){
    //         return 1;
    //     }
    //     var a = Number(n[0]);
    //     var b = Number(n[1]);
    //     var c  = Number(n[2]);
    //     for(;(a,b,c)<10;){
    //         if(xunhuan(a)+xunhuan(b)+xunhuan(c)==i){
    //         console.log('牵牛花:'+i);}
    
    //         }
    //     }

// 立即执行函数
    var arr = [];
    for (var i = 0; i < 5; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    console.log('i的值:'+i);
    arr[2](); // 打印5

// this 指向问题
    function fun() {
        console.log(this);
        console.log(this.name);
    }

    var obj1 = {
        name: 'smyh',
        sayName: fun(),
        // fun:console.log('这里是BOJ1:'+this),
    };

    var obj2 = {
        name: 'vae',
        sayName: fun(),
        // fun:console.log('这里是OBJ2:'+this),
    };

    var name = '全局的name属性';

    //以函数形式调用，this是window
    fun(); //可以理解成 window.fun()
    // obj1.sayName;
    // obj2.sayName;


// this 指向
    var duixaing ={
        name:111,
        seg:111,
    };

    function genghuan() {
        console.log(this);
        console.log(this.name);
        // console.log('第二条语句:'+this);
    }
    genghuan.call(duixaing);

// apply()
var duixaing ={
    name:111,
    seg:111,
};

function genghuan(a) {
    console.log(this);
    console.log(this.name);
    console.log('第二条语句:'+a);
}
genghuan.apply(duixaing,[6]);
    
// math
const arr1 = [-3, -7, -10, -8];

// 求数组最值 筛选选循环或递归
// 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
const maxValue = Math.max.apply(Math,arr1); // 求数组 arr1 中元素的最大值
console.log(maxValue);

// bing()
    var duixaing ={
        name:111,
        seg:111,
    };

    function genghuan(a) {
        console.log(this);
        console.log(this.name);
        console.log('第二条语句:'+a);
    }
    genghuan.bind(duixaing,6);


// // 代码简化  形参 standardTemp 为标准线
function createCheckTemp(standardTemp) {
    // 形参 n 表示具体学生的分数
    function checkTemp(n) {
        var end1 = n > standardTemp ? "及格":"不及格";
        console.log('结果为:'+end1);
    }
    return checkTemp;
  }
  
  // 创建一个 checkStandard_A 函数，它以60分为合格线
  var checkStandard_A = createCheckTemp(60);
  // 再创建一个 checkStandard_B 函数，它以70分为合格线
  var checkStandard_B = createCheckTemp(70);
  
  // 调用函数
  checkStandard_A(65); // 成绩合格
  checkStandard_B(65); // 成绩不合格

// // 不用闭包
//     function checkTemp(n,b) {
//         var end1 = n > b ? "及格":"不及格";
//         console.log('结果为:'+end1);
//     }
//     checkTemp(60,70)
        
// 
var     friends=['ad','as','be'];
var     values= friends.push("like");
// console.log('这是增加值:'+friends);
// console.log('aaaaaaaaaa:'+values);
// 这玩意返回了数组长度
if(friends.includes("like")){
    console.log('你不喜欢Java:');
}

const wehavefriends={
    name:"xiaoming",
    friends:["Java","Python","C++"],
    partends:"c",
    callage:function (){
        return this.name+this.partends;
    },
    jiantou:()=>{
        return wehavefriends.name+"  hate java!!!!!!!";
    }
}
var laugh=wehavefriends.friends[0];
// console.log('最讨厌的语言:'+laugh);
console.log(`${wehavefriends.name} \
has ${wehavefriends.friends.length} hate laught \
and him best hate laught is ${wehavefriends.friends[0]}`);
console.log('你看你写的是啥:'+wehavefriends.callage());
console.log('箭头函数:'+wehavefriends.jiantou());
// 对象方法

//  promise
// var hatelaught=["java","python","c++"];

// setouttime
function delay(ms) {
  return new Promise (function (resolve,reject){
    setTimeout(()=> resolve("啥啊"),ms)})
};
delay(3000).then(()=>console.log('用时-3:'+"settime"));

// 
var div =new Promise(function (resolve,reject) {
    console.log('能画:');
    
})

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});

function ready1(a,callback){
    console.log('打印一个值:'+a);
    var a="java";
    ready2(a);
    function ready2(a){
        console.log('这是第二个值'+a);
        var a="c++";
        function read3(a){
            console.log('打印第三个值');
            var a="python";
            function read4(a){
                console.log('打印第四个值');
                function read5(a){
                    console.log('打印第五个值');
                    function read6(a){
                        console.log('打印第六个值');
                        console.log('无条件嵌套函数');
                        
                    }
                }
                
            }
        }
    }
};

ready1("addd",);