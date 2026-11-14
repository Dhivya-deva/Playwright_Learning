let x = ("mom")
let rev = ""
let char = x.split("")
for (let index  = char.length-1; index >=0; index--) {
    rev=rev+char[index]
}
console.log(rev)
