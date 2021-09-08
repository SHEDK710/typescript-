(()=>{
  //函数:封装了一些重复使用的代码，在需要的时候直接调用
  console.log("----------函数------------");
  //js书写方式(ts也可用)
  //函数声明，命名函数
  // function add(x,y){ //求和函数
  //   return x+y;
  // }
  // //函数表达式，匿名函数
  // const add2 = function (x,y){
  //   return x+y;
  // }
  //ts书写方式
  function add1(x:string,y:string):string{ //求和函数
    return x+y;
  }
  const result1:string = add1('111','222');
  console.log(result1);
  //函数表达式，匿名函数
  const add2 = function (x:number,y:number):number{
    return x+y;
  }
  console.log(add2(1,2));
  //函数完整写法
  //add3---->变量名---->函数add3
  //(x:number,y:number) => number 当前函数的类型
  const add3:(x:number,y:number) => number = function (x:number,y:number):number{
    return x+y;
  }
  console.log(add3(2,3));



  //可选参数:函数在声明的时候，内部的参数使用了?进行修饰，表示该参数可传可不传
  console.log("-----------可选参数------------");
  //定义一个函数:传入姓氏和名字
  //需求:如果不传入任何内容，就返回默认的姓氏
  //需求:如果只传入姓氏，就返回姓氏
  //需求：如果传入姓氏和名字，就返回姓名
  const getFullName=function(firstName:string='东方',lastName?:string):string{
    //判断名字是否传入
    if(lastName){
      return firstName+lastName;
    }else{
      return firstName;
    }
  }
  //函数调用
  console.log(getFullName());
  console.log(getFullName('诸葛'));
  console.log(getFullName('赵','伟豪'));



  //默认参数:函数在声明的时候，内部的参数有自己的默认值
  //剩余参数(rest参数)
  console.log("-----------剩余参数--------------");
  function showMsg(str1:string,str2:string,...args:string[]){
    console.log(str1);
    console.log(str2);
    console.log(args);
  }
  showMsg('a','b','c','d','e');



  //函数重载:函数名相同，参数及个数不同
  console.log("-----------函数重载---------------");
  //需求:定义一个add函数，可以接收2个string类型参数拼接，也可接受2个number类型参数进行相加
  //函数重载声明
  function add(x:string,y:string):string
  function add(x:number,y:number):number
  //函数声明
  function add(x:string|number,y:string|number):string|number{
    if(typeof x === 'string' && typeof y=== 'string'){
      return x+y;
    }else if(typeof x === 'number' && typeof y === 'number'){
      return x+y;
    }
  }
  console.log(add('诸葛','孔明'));
  console.log(add(1,2));
  //如果传入非法数据,ts应给我报错
  //console.log(add('真香',10));
})()