

function reveser(x) {
    let length = x.toString().length
    let answer = ""
    
    while (length != 0 - 1) {
        x.toString().charAt(length) === "0" ? x.toString().charAt(length) == 0 ? answer += x.toString().charAt(length) : answer
        : answer += x.toString().charAt(length), x.toString().charAt(length) == 0 ? x < 0 ?   answer = -Math.abs(answer)  : answer  : answer
        length--
    }

    Math.abs(parseInt(answer)) > Math.pow(2, 31) && Math.abs(parseInt(answer)) > (Math.pow(2, 31) - 1) ? answer = "0"   : answer
    x < 0 ? answer = -Math.abs(parseInt(answer)) : answer

    console.log((parseInt(answer)))
}


console.log(reveser(1534236469))
