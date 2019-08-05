function balikString(string) {

    var defaultString = [''];

    for (var i=string.length-1; i>=0; i--) {

        defaultString = defaultString + string[i]
    }
        return defaultString;

}
console.log(balikString('hello world!'));