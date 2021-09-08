//ts中书写js中的类
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + '-' + person.lastName;
    }
    var person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
