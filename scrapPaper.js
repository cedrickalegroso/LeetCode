x.toString().charAt(length) === "0"
?  x.toString().charAt(length) == 0
?  answer += x.toString().charAt(length)
:  answer = answer
:answer += x.toString().charAt(length)
if (x >= 0) {
} else {
    if (x.toString().charAt(length) == 0) {

        answer += "-"
    }
}
    


length--



while (length != 0 - 1) {
    if (x.toString().charAt(length) === "0") {
        if (x.toString().charAt(length) == 0) {
            answer += x.toString().charAt(length)
        }
    } else {
        answer += x.toString().charAt(length)
        if (x >= 0) {
        } else {
            if (x.toString().charAt(length) == 0) {

                answer += "-"
            }
        }
    }

    length--
}

parseInt(answer) > Math.pow(2, 31) || parseInt(answer) > (Math.pow(2, 31) - 1) ? answer = "0" : answer = answer


 /*

     x < 0 
     
      
     , x < 0  ? x.toString().charAt(length) == 0  ? answer += "-"   : answer  : answer
    

    if (x.toString().charAt(length) === "0") {
        if (x.toString().charAt(length) == 0) {
            answer += x.toString().charAt(length)
        }
    } else {
        answer += x.toString().charAt(length)
        if (x < 0) {
            if (x.toString().charAt(length) == 0) {

                answer += "-"
            }
        } 
    }  */

    length--