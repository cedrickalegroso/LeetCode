

n = 4421
pod = 1
sod = 0
r = 0

counter = 0
while (counter != n.toString().length ) {
   pod *=  parseInt(n.toString().charAt(counter))
   sod +=  parseInt(n.toString().charAt(counter))
   r = pod - sod
    counter++
}
console.log(r)