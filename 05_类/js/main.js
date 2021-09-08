var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] }
                instanceof Array && function(d, b) { d.__proto__ = b; }) ||
            function(d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类:可以理解为模板，通过模板实例化对象
(function() {
    var Person = /** @class */ (function() {
        //定义构造函数
        function Person(name, age, gender) {
            if (name === void 0) { name = "赵伟豪"; }
            if (age === void 0) { age = 20; }
            if (gender === void 0) { gender = "男"; }
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        //定义实例方法
        Person.prototype.sayHi = function(str) {
            console.log(str, "\u6211\u662F" + this.name + ",\u4ECA\u5E74" + this.age + "\u5C81,\u662F\u4E2A" + this.gender + "\u5B69\u5B50");
        };
        return Person;
    }());
    var person = new Person();
    person.sayHi("你叫什么名字?");
    //继承:类与类之间的关系
    //A类继承了B类，A类为子类,B类为基类
    //子类--->派生类
    //基类--->超类（父类）
    var Student = /** @class */ (function(_super) {
        __extends(Student, _super);

        function Student(name, age, gender) {
            return _super.call(this, name, age, gender) || this;
        }
        Student.prototype.sayHi = function() {
            console.log("我是学生类中的方法");
            _super.prototype.sayHi.call(this, "我是谁?");
        };
        return Student;
    }(Person));
    var stu = new Student('小明', 18, '男');
    stu.sayHi();
    //总结
    //类和类之间要有继承关系,需要使用extends关键词
    //子类可以使用父类中的构造函数，需要super方法
    //子类可以重写父类的方法
    //多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生不同的行为
    var Animal = /** @class */ (function() {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.run = function(distance) {
            if (distance === void 0) { distance = 1; }
            console.log(this.name + "\u8DD1\u4E86" + distance + "\u7C73");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function(_super) {
        __extends(Dog, _super);

        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.run = function(distance) {
            if (distance === void 0) { distance = 10; }
            console.log(this.name + "\u8DD1\u4E86" + distance + "\u7C73");
        };
        return Dog;
    }(Animal));
    var Cat = /** @class */ (function(_super) {
        __extends(Cat, _super);

        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.run = function(distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.name + "\u8DD1\u4E86" + distance + "\u7C73");
        };
        return Cat;
    }(Animal));
    var ani = new Animal('动物');
    ani.run();
    var dog = new Dog('旺财');
    dog.run();
    var cat = new Cat('kity');
    cat.run();
    console.log('================');
    //父类和子类的关系，父类类型创建子类对象
    var dog1 = new Dog('小黄');
    dog1.run();
    var cat1 = new Cat('六月');
    cat1.run();
    console.log('================');

    function showRun(ani) {
        ani.run();
    }
    showRun(dog1);
    showRun(cat1);
    console.log('================');
    //修饰符:主要时描述类中的成员的可访问性
    //类中的成员都有默认的修饰符public
    //private修饰符,外部无法访问私有，子类也无法访问
    //protected修饰符,外部无法访问，子类可以访问
    var Teacher = /** @class */ (function() {
        // private name:string
        // protected name:string
        function Teacher(name) {
            this.name = name;
        }
        Teacher.prototype.teach = function() {
            console.log(this.name + "\u6B63\u5728\u6559\u5B66");
        };
        return Teacher;
    }());
    var Stu = /** @class */ (function(_super) {
        __extends(Stu, _super);

        function Stu(name) {
            return _super.call(this, name) || this;
        }
        Stu.prototype.study = function() {
            console.log(this.name + "\u6B63\u5728\u5B66\u4E60");
        };
        return Stu;
    }(Teacher));
    var teacher = new Teacher('Mr.Yang');
    //类的外部可以访问类中的属性成员
    console.log(teacher.name);
    teacher.teach();
    var stu1 = new Stu('Mr.Zhao');
    console.log(stu1.name);
    stu1.study();
    //readonly修饰符:关键词，修饰属性成员，使该属性成员不能在外部被随意修改
    //构造函数中可以对只读的数据进行修改
    //readnly修饰类中的构造函数中的参数
    var Car = /** @class */ (function() {
        // readonly name:string='幻影'
        //readonly、pbulic、private、protected修饰的构造函数中的参数，该类中就有该修饰符修饰的属性成员
        function Car(name) {
            if (name === void 0) { name = '零号'; }
            this.name = name;
            // this.name=name;
        }
        return Car;
    }());
    var car = new Car('劳斯莱斯');
    console.log(car);
    console.log(car.name);
    // car.name='幻影';
    // console.log(car.name);
    //存取器:让我们可以有效的控制对象中成员的访问，通过getters和setters进行操作
    var Gas = /** @class */ (function() {
        function Gas(name, price) {
            this.name = name;
            this.price = price;
        }
        Object.defineProperty(Gas.prototype, "gasType", {
            //读取器
            get: function() {
                console.log('get');
                return this.name + " " + this.price;
            },
            //设置器
            set: function(val) {
                console.log('set');
                var gas = val.split(' ');
                this.name = gas[0];
                this.price = gas[1];
            },
            enumerable: false,
            configurable: true
        });
        return Gas;
    }());
    var gas = new Gas('97号', '7.5');
    console.log(gas);
    //获取该属性成员数据
    console.log(gas.gasType);
    //设置该属性的数据
    gas.gasType = '96号 6.4';
    console.log(gas.gasType);
    //静态属性:在类中通过static修饰
    //静态成员在使用的时候使通过类名.的这种语法调用
    var Pen = /** @class */ (function() {
        //static不能修饰构造函数
        function Pen() {
            //this使实例对象，name1是静态成员，不能通过实例对象直接调用静态成员
            // this.name1=name;
        }
        Pen.write = function() {
            console.log(this.name1 + "\u5199");
        };
        //类中默认有一个内置的name属性
        Pen.name1 = '晨光';
        return Pen;
    }());
    // const pen=new Pen('晨光');
    // console.log(pen.name1);
    // pen.write();
    //通过类名.静态属性的方式访问设置成员属性和方法
    console.log(Pen.name1);
    Pen.name1 = '小米';
    console.log(Pen.name1);
    Pen.write();
    console.log('==================');
    //抽象类:包含抽象方法(一般没有任何具体内容的实现)，也可以包含实例方法，抽象类是不能被实例化的，为了让子类进行实例化及实现内部的抽象方法
    //抽象类作用为派生类服务
    var Plant = /** @class */ (function() {
        function Plant() {}
        //抽象属性
        // abstract name:string='小黄'
        //抽象方法不能有具体的实现
        // abstract sun(){
        // }
        Plant.prototype.sun = function() {
            console.log('光合作用');
        };
        return Plant;
    }());
    var Flower = /** @class */ (function(_super) {
        __extends(Flower, _super);

        function Flower() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //name:string='小红'
        Flower.prototype.smell = function() {
            console.log('真香!');
        };
        return Flower;
    }(Plant));
    var flower = new Flower();
    flower.smell();
    flower.sun();
    //不能实例化抽象类的对象
    // const plant:Plant=new Plant();
})();