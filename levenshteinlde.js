function levenshteinDistance(s, t) {
    if (s == '') {
        return t.length
    }
    if (t == '') {
        return s.length
    }
    
    const a = s[0]
    const b = t[0]
    const sp = s.slice(1)
    const tp = t.slice(1)

    if (a == b) {
        return levenshteinDistance(sp, tp)
    } else {
        return 1 + Math.min(
            levenshteinDistance(s, tp),
            levenshteinDistance(sp, t),
            levenshteinDistance(sp, tp)
        )
    }
}

const word = wordlist[Math.floor(Math.random()*10000)]
let userGuess = document.getElementById('userGuess')
let userDistance = document.getElementById('userDistance')

userGuess.addEventListener('input', (event) => {
    userDistance.innerText = levenshteinDistance(userGuess.value, word)
})