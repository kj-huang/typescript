var demo;
(function (demo) {
    var person;
    person = 'Kevin Huang';
    console.log(person.substring(1, 4));
    person = {
        name: 'Huang',
        age: 25
    };
    console.log(person.substring(1, 4));
})(demo || (demo = {}));
