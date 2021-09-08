//类:可以理解为模板，通过模板实例化对象
(()=>{
  class Person{
    //定义属性
    name:string
    age:number
    gender:string
    //定义构造函数
    constructor(name:string="赵伟豪",age:number=20,gender:string="男"){
      this.name=name;
      this.age=age;
      this.gender=gender;
    }
    //定义实例方法
    sayHi(str:string){
      console.log(str,`我是${this.name},今年${this.age}岁,是个${this.gender}孩子`);
    }
  }
  const person=new Person();
  person.sayHi("你叫什么名字?");


  
  //继承:类与类之间的关系
  console.log("--------继承-------");
  //A类继承了B类，A类为子类,B类为基类
  //子类--->派生类
  //基类--->超类（父类）
  class Student extends Person{
    constructor(name:string,age:number,gender:string){
      super(name,age,gender)
    }
    sayHi(){
      console.log("我是学生类中的方法")
      super.sayHi("我是谁?");
    }
  }
  const stu=new Student('小明',18,'男');
  stu.sayHi();
  //总结
  //类和类之间要有继承关系,需要使用extends关键词
  //子类可以使用父类中的构造函数，需要super方法
  //子类可以重写父类的方法



  //多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生不同的行为
  console.log("--------多态-------");
  class Animal{
    name:string
    constructor(name:string){
      this.name=name;
    }
    run(distance:number=1){
        console.log(`${this.name}跑了${distance}米`);
    }
  }
  class Dog extends Animal{
    constructor(name:string){
      super(name);
    }
    run(distance:number=10){
      console.log(`${this.name}跑了${distance}米`);
    }
  }
  class Cat extends Animal{
    constructor(name:string){
      super(name);
    }
    run(distance:number=5){
      console.log(`${this.name}跑了${distance}米`);
    }
  }
  const ani:Animal=new Animal('动物');
  ani.run();
  const dog:Dog=new Dog('旺财');
  dog.run();
  const cat:Cat=new Cat('kity');
  cat.run();
  console.log('================');
  //父类和子类的关系，父类类型创建子类对象
  const dog1:Animal=new Dog('小黄');
  dog1.run();
  const cat1:Animal=new Cat('六月');
  cat1.run();
  console.log('================');
  function showRun(ani:Animal){
    ani.run();
  }
  showRun(dog1);
  showRun(cat1);
  console.log('================');



  //修饰符:主要时描述类中的成员的可访问性
  console.log("--------修饰符-------");
  //类中的成员都有默认的修饰符public
  //private修饰符,外部无法访问私有，子类也无法访问
  //protected修饰符,外部无法访问，子类可以访问
  class Teacher{
    public name:string
    // private name:string
    // protected name:string
    public constructor(name:string){
      this.name=name;
    }
    public teach(){
      console.log(`${this.name}正在教学`);
    }
  }
  class Stu extends Teacher{
    constructor(name:string) {
      super(name);
    }
    study(){
      console.log(`${this.name}正在学习`);
    }
  }
  const teacher=new Teacher('Mr.Yang');
  //类的外部可以访问类中的属性成员
  console.log(teacher.name);
  teacher.teach();
  const stu1=new Stu('Mr.Zhao');
  console.log(stu1.name);
  stu1.study();
  


  //readonly修饰符:关键词，修饰属性成员，使该属性成员不能在外部被随意修改
  console.log("--------readonly-------");
  //构造函数中可以对只读的数据进行修改
  //readnly修饰类中的构造函数中的参数
  class Car{
    // readonly name:string='幻影'
    //readonly、pbulic、private、protected修饰的构造函数中的参数，该类中就有该修饰符修饰的属性成员
    constructor(readonly name:string='零号'){
      // this.name=name;
    }
    //类中的普通方法不能修改readonly修饰的成员属性值
  }
  const car:Car=new Car('劳斯莱斯');
  console.log(car);
  console.log(car.name);
  // car.name='幻影';
  // console.log(car.name);



  //存取器:让我们可以有效的控制对象中成员的访问，通过getters和setters进行操作
  console.log("--------存取器-------");
  class Gas{
    name:string
    price:string
    constructor(name:string,price:string){
      this.name=name;
      this.price=price;
    }
    //设置器
    set gasType(val){
      console.log('set')
      let gas=val.split(' ');
      this.name=gas[0];
      this.price=gas[1];
    }
    //读取器
    get gasType(){
      console.log('get')
      return this.name+" "+this.price;
    }
  }
  const gas=new Gas('97号','7.5');
  console.log(gas);
  //获取该属性成员数据
  console.log(gas.gasType);
  //设置该属性的数据
  gas.gasType='96号 6.4';
  console.log(gas.gasType);



  //静态属性:在类中通过static修饰
  console.log("--------静态属性-------");
  //静态成员在使用的时候使通过类名.的这种语法调用
  class Pen{
    //类中默认有一个内置的name属性
    static name1:string='晨光'
    //static不能修饰构造函数
    constructor() {
      //this使实例对象，name1是静态成员，不能通过实例对象直接调用静态成员
      // this.name1=name;
    }
    static write(){
      console.log(`${this.name1}写`);
    }
  } 
  // const pen=new Pen('晨光');
  // console.log(pen.name1);
  // pen.write();
  //通过类名.静态属性的方式访问设置成员属性和方法
  console.log(Pen.name1);
  Pen.name1='小米';
  console.log(Pen.name1);
  Pen.write();



  //抽象类:包含抽象方法(一般没有任何具体内容的实现)，也可以包含实例方法，抽象类是不能被实例化的，为了让子类进行实例化及实现内部的抽象方法
  console.log("--------抽象类-------");
  //抽象类作用为派生类服务
  abstract class Plant{
    //抽象属性
    // abstract name:string='小黄'
    //抽象方法不能有具体的实现
    // abstract sun(){
    // }
    sun(){
      console.log('光合作用');
    }
  }
  class  Flower extends Plant{
    //name:string='小红'
    smell(){
      console.log('真香!');
    }
  }
  const flower:Flower=new Flower();
  flower.smell();
  flower.sun();
  //不能实例化抽象类的对象
  // const plant:Plant=new Plant();
})()