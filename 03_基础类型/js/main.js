(function() {
    //布尔类型  ---->boolean
    var flag = true;
    console.log(flag);
    //数字型类型   ---->number
    var a1 = 10; //十进制
    var a2 = 10; //二进制
    var a3 = 10; //八进制
    var a4 = 0xa; //十六进制
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    //字符串类型  ---->string
    var str1 = '床前明月光';
    var str2 = '疑是地上霜';
    console.log(str1 + "," + str2);
    //最负川和数字之间能否拼接
    var str = '我的年龄：';
    var age = 20;
    console.log(str + age);
    //总结：ts中变量一开始什么类型，后面赋值不能更改类型
    console.log('======================');
    var und = undefined;
    var nll = null;
    console.log(und);
    console.log(nll);
    //undefined 和 null 都可以作为其他类型的子变量
    var num = undefined;
    console.log(num); //严格模式false
    console.log('======================');
    //数组类型
    //数组定义方式1
    //语法:let 变量名: 数据类型[] = [值1,值2,值3]
    var arr1 = [10, 20, 30, 40, 50];
    console.log(arr1);
    //数组定义方式2(泛型)
    //y=语法:let 变量名: Array<数据类型> = [值1,值2,值3]
    var arr2 = [10, 20, 30, 40, 50];
    console.log(arr2);
    //元组类型(定义时限定元素个数和类型)
    var arr3 = ['Zhao', 20, true];
    console.log(arr3);
    console.log(arr3[0].split(''));
    console.log('======================');
    //枚举类型
    var Color;
    (function(Color) {
        Color[Color["red"] = 1] = "red";
        Color[Color["green"] = 2] = "green";
        Color[Color["blue"] = 3] = "blue";
    })(Color || (Color = {}));
    //定义一个枚举类型的变量接收枚举的值
    var color = Color.red;
    console.log(color);
    console.log(Color.red, Color.green, Color.blue);
    console.log(Color[3]);
    console.log('======================');
    //any类型
    var x1 = 100;
    x1 = '床前明月光';
    console.log(x1);
    //void类型
    function showMsg() {
        console.log('疑是地上霜');
    }
    showMsg();
    console.log(showMsg());
    console.log('======================');
    //object类型
    function getObj(obj) {
        console.log(obj);
        return {
            name: 'Zhao',
            age: 20
        };
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
    function getString(str) {
        // return str.toString().length
        if (str.length) {
            return str.length;
        } else {
            return str.toString().length;
        }
    }
    console.log(getString('12345'));
    console.log(getString(123456));
    //类型推断
    var txt = 100;
    // txt='Zhao' 错误
    console.log(txt); //number类型
    var txt2;
    console.log(txt2); //any类型
})();