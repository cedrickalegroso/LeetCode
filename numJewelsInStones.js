
J = "aA"
S = "aAAbbbb"

counter = 0
counter1 = 0
answerCount = 0

while (counter <= S.length) {
    counter1 = 0
    while (counter1 != J.length ) {
       S.charAt(counter) == J.charAt(counter1) ? answerCount++ : answerCount
        counter1++
    }     
     counter++
}
console.log(answerCount)



