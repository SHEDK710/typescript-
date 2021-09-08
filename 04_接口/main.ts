//接口时对象的状态(属性)和行为(方法)的抽象(描述)
(()=>{
    //需求:创建人的对象，需要对人的属性进行一定的约束
    //定义一个接口,固定或约束对象中的属性数据
    interface IPerson{
      readonly id:number;
      name:string;
      age:number;
      sex?:string;//sex可有可无
    }
    //定义一个对象
    const person1:IPerson={
      id:1,
      name:'赵伟豪',
      age:20,
      sex:'男'
    }
    console.log(person1);
    console.log('=======================');
    //函数类型
    interface ISearchFunc{
      (source:string,subString:string):boolean
    }
    const searchString:ISearchFunc=function(source:string,subString:string):boolean{
      return source.search(subString) > -1;
    }
    console.log(searchString('赵伟豪','赵'));
    console.log('=======================');
    //类 类型:类的类型
    interface IFly{
      fly()
    }

    interface ISwim{
      swim()
    }

    //接口继承多个接口
    interface ICanFlyAndSwin extends IFly,ISwim{
      fly();
      swim();
    }
    class Person1 implements IFly{
      fly(){
        console.log('飞!');
      }
    }

    //同时实现两个接口
    class Person2 implements IFly,ISwim{
      fly(){
        console.log('飞!');
      }
      swim(){
        console.log('游泳!');
      }
    }

    class Person3 implements ICanFlyAndSwin{
      fly(){
        console.log('飞!');
      }
      swim(){
        console.log('游泳!');
      }
    }

    const person2=new Person1();
    person2.fly();
    const person3=new Person2();
    person3.fly();
    person3.swim();
    const person4=new Person3();
    person4.fly();
    person4.swim();
})()