(function () {
    //泛型:在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
    console.log("--------泛型-------");
    //需求:定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用是根据数量产生对应个数的数据并存储于数组
    // function getArr1(value:number,count:number):number[]{
    //   //根据数据和数量产生一个数组
    //   const arr :number[]=[];
    //   for(let i=0;i<count;i++){
    //     arr.push(value);
    //   }
    //   return arr;
    // }
    // const arr1= getArr1(100.123,3);
    // console.log(arr1);
    // //需求:定义一个函数，同上，只不过传入的是字符串类型
    // function getArr2(value:string,count:number):string[]{
    //   //根据数据和数量产生一个数组
    //   const arr :string[]=[];
    //   for(let i=0;i<count;i++){
    //     arr.push(value);
    //   }
    //   return arr;
    // }
    // const arr2=getArr2('abc',3);
    // console.log(arr2);
    //需求:可以传入任意类型的数据
    // function getArr3(value:any,count:number):any[]{
    //   //根据数据和数量产生一个数组
    //   const arr :any[]=[];
    //   for(let i=0;i<count;i++){
    //     arr.push(value);
    //   }
    //   return arr;
    // }
    // const arr1 = getArr3(100.123,3);
    // const arr2 = getArr3('abc',3);
    // console.log(arr1);
    // console.log(arr2);
    // //arr1中存储的是数字类型
    // //arr2中存储的是字符串类型
    // console.log(arr1[0].toFixed(2));//无任何智能提示信息
    // console.log(arr2[0].split(''));//无任何智能提示信息
    function getArr4(value, count) {
        //根据数据和数量产生一个数组
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    var arr1 = getArr4(200.12345, 5);
    var arr2 = getArr4('abcdefg', 5);
    console.log(arr1);
    console.log(arr2);
    // //arr1中存储的是数字类型
    // //arr2中存储的是字符串类型
    console.log(arr1[0].toFixed(3));
    console.log(arr2[0].split(''));
    //多个泛型参数的函数:函数中有多个泛型的参数
    console.log("--------多个泛型参数的函数-------");
    function getMsg(value1, value2) {
        return [value1, value2];
    }
    var arr = getMsg('jack', 100.2345);
    console.log(arr[0].split(''));
    console.log(arr[1].toFixed(3));
    //泛型接口:在定义接口时，为接口的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型
    console.log("--------泛型接口-------");
    //定义一个用户信息类
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        return User;
    }());
    //定义一个类，可以针对用户的信息对象进行增加及查询操作
    //CRUD---->Create,Read,Update,Delete
    var UserCRUD = /** @class */ (function () {
        function UserCRUD() {
            //用来保存多个User类型的用户信息对象
            this.data = [];
        }
        //方法用来存储用户信息对象
        UserCRUD.prototype.add = function (user) {
            //产生id
            user.id = Date.now() + Math.random();
            //把用户信息对象添加到data数组中
            this.data.push(user);
            return user;
        };
        ;
        //方法根据id查询指定的用户对象
        UserCRUD.prototype.getUserId = function (id) {
            return this.data.find(function (user) { return user.id === id; });
        };
        ;
        return UserCRUD;
    }());
    //实例化
    var userCRUD = new UserCRUD();
    //调用添加数据的方法
    userCRUD.add(new User('jack', 20));
    userCRUD.add(new User('tom', 25));
    userCRUD.add(new User('lucy', 23));
    var id = userCRUD.add(new User('rosi', 18)).id;
    console.log(userCRUD.data);
    //根据id查询用户信息数据
    var user = userCRUD.getUserId(id);
    console.log(user);
    //泛型类:定义一个类，类中的属性值时不确定的，方法中的参数及返回值的类型也是不确定的
    console.log("--------泛型类-------");
    //定义一个泛型类
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    //在实例化类的对象的时候，再确定泛型的类型
    var g1 = new GenericNumber();
    //设置属性值
    g1.defaultVlaue = 100;
    //相加的方法
    g1.add = function (x, y) {
        return x + y;
    };
    console.log(g1.add(10, 20));
    var g2 = new GenericNumber();
    //设置属性值
    g2.defaultVlaue = "哈哈";
    //相加的方法
    g2.add = function (x, y) {
        return x + y;
    };
    console.log(g2.add("赵", "伟豪"));
    //泛型约束
    console.log("--------泛型约束-------");
    function getLength(x) {
        return x.length;
    }
    console.log(getLength("what are you say?"));
    // console.log(getLength<number>(123)); number类型中没有length属性
})();
