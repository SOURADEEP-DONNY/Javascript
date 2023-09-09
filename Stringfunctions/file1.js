//trim()
//toUpperCase
//toLowerCase
//slice()
//typeof()

//-------------------TRIM----------------------------

let country ="            INDIA         "
console.log(country.length)
country.trim()
console.log(country.length) //STRINGS ARE IMMUTABLE. THIS WILL PROVIDE A NEW STRING.
let ns=country.trim()
console.log(ns)
console.log(ns.length)

//--------------SLICE METHOD--------------------------
ns1=ns.slice(0,3)
console.log(ns1)
console.log("souradeep".slice(0,5)) //SLICE DO NOT CONSIDER LAST INDEX
console.log(ns.slice(1))

//--------------------toUpperCase--------------------
console.log("souradeep".toLocaleUpperCase())

//--------------------toLowerCase--------------------
console.log(ns.toLocaleLowerCase())

//------------------------typeof()---------------------------
let t=67888
let h=9.9
let tt=false
console.log(typeof t)
console.log(typeof h)
console.log(typeof tt)