//接口时对象的状态(属性)和行为(方法)的抽象(描述)
(function () {
    //定义一个对象
    var person1 = {
        id: 1,
        name: '赵伟豪',
        age: 20,
        sex: '男'
    };
    console.log(person1);
    console.log('=======================');
    var searchString = function (source, subString) {
        return source.search(subString) > -1;
    };
    console.log(searchString('赵伟豪', '赵'));
    console.log('=======================');
    var Person1 = /** @class */ (function () {
        function Person1() {
        }
        Person1.prototype.fly = function () {
            console.log('飞!');
        };
        return Person1;
    }());
    //同时实现两个接口
    var Person2 = /** @class */ (function () {
        function Person2() {
        }
        Person2.prototype.fly = function () {
            console.log('飞!');
        };
        Person2.prototype.swim = function () {
            console.log('游泳!');
        };
        return Person2;
    }());
    var Person3 = /** @class */ (function () {
        function Person3() {
        }
        Person3.prototype.fly = function () {
            console.log('飞!');
        };
        Person3.prototype.swim = function () {
            console.log('游泳!');
        };
        return Person3;
    }());
    var person2 = new Person1();
    person2.fly();
    var person3 = new Person2();
    person3.fly();
    person3.swim();
    var person4 = new Person3();
    person4.fly();
    person4.swim();
})();
