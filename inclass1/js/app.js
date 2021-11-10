var strings = ["bongo drums"];
string = strings.map(x=>x.replace( /[aeiou]/g, '' ));
console.log(string);
