/// <reference path="./typings/knockout-2.2.d.ts" />
declare var ko: KnockoutStatic;

module ambient{
    var name = ko.observable('Kevin HUang');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    }

    var value: string = guy.fullName();
    console.log(value);
}