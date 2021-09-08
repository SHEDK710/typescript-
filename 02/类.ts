//ts中书写js中的类
(()=>{
  interface IPerson{
    firstName:string
    lastName:string
  }

  class Person{
    firstName:string
    lastName:string
    fullName:string
    constructor(firstName:string,lastName:string){
        this.firstName=firstName
        this.lastName=lastName
        this.fullName=this.firstName+'_'+this.lastName
    }
  }

  function showFullName(person: IPerson){
    return person.firstName + '-' + person.lastName
  }

  const person=new Person('诸葛','孔明')
  console.log(showFullName(person))
})()