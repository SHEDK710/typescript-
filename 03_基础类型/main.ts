(()=>{
  //布尔类型  ---->boolean
  console.log("--------布尔类型-------");
  let flag:boolean =true;
  console.log(flag);



  //数字型类型   ---->number
  console.log("--------数字类型-------");
  let a1:number = 10; //十进制
  let a2:number = 0b1010; //二进制
  let a3:number = 0o12; //八进制
  let a4:number = 0xa;  //十六进制
  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);



  //字符串类型  ---->string
  console.log("--------字符串类型-------");
  let str1:string = '床前明月光';
  let str2:string = '疑是地上霜';
  console.log(`${str1},${str2}`);
  //字符串和数字之间能否拼接
  let str:string ='我的年龄：'
  let age:number =20;
  console.log(str+age);
  //总结：ts中变量一开始什么类型，后面赋值不能更改类型


  console.log("--------undefined类型和null类型-------");
  console.log('======================');
  let und:undefined =undefined;
  let nll:null=null;
  console.log(und);
  console.log(nll);
  //undefined 和 null 都可以作为其他类型的子变量
  let num:number = undefined;
  console.log(num) //严格模式false
 


  //数组类型
  console.log("--------数组类型-------");
  //数组定义方式1
  //语法:let 变量名: 数据类型[] = [值1,值2,值3]
  let arr1: number[] = [10,20,30,40,50];
  console.log(arr1);
  //数组定义方式2(泛型)
  //y=语法:let 变量名: Array<数据类型> = [值1,值2,值3]
  let arr2: Array<number> = [10,20,30,40,50];
  console.log(arr2);



  //元组类型(定义时限定元素个数和类型)
  console.log("--------元组类型-------");
  let arr3:[string,number,boolean]=['Zhao',20,true];
  console.log(arr3);
  console.log(arr3[0].split(''));
  console.log('======================');



  //枚举类型
  console.log("--------枚举类型-------");
  enum Color{
    red=1,
    green,
    blue
  }
  //定义一个枚举类型的变量接收枚举的值
  let color:Color=Color.red;
  console.log(color);
  console.log(Color.red,Color.green,Color.blue);
  console.log(Color[3]);



  //any类型
  console.log("--------any类型-------");
  let x1:any=100;
  x1='床前明月光';
  console.log(x1);



  //void类型
  console.log("--------void类型-------");
  function showMsg():void{
    console.log('疑是地上霜');
  }
  showMsg();
  console.log(showMsg());



  //object类型
  console.log("--------object类型-------");
  function getObj(obj:object):object{
    console.log(obj)
    return {
      name: 'Zhao',
      age: 20
    }
  }
  // console.log(getObj({name:'Wei Hao',age:20}))
  // console.log(getObj(new String('123')))
  console.log(getObj(String));
  console.log('======================');

  //联合类型(取值可为多个类型中的一种)
  //需求1:定义一个函数得到一个数字或字符串的字符串形式
  // function getString(str:number|string){
  //   return str.toString()
  // }
  // console.log(getString(123))

  //类型断言
  //语法1:<类型>变量名
  //语法2:值 as 类型
  //需求2:定义一个函数得到一个数字或字符串的长度
  console.log("--------联合类型and类型断言-------");
  function getString(str:number|string){
    // return str.toString().length
    if((<string>str).length){
      return (str as string).length
    }else{
      return str.toString().length
    }
  }
  console.log(getString('12345'))
  console.log(getString(123456))  

  //类型推断
  console.log("--------类型推断-------");
  let txt=100
  // txt='Zhao' 错误
  console.log(txt) //number类型
  let txt2
  console.log(txt2) //any类型
})()