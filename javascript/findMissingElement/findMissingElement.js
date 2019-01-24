
/*
<문제>
모든 알파벳을 사용하는 문자열을 완벽한 문자열이라고 합니다.

예를 들어서 "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam."라는 문장이 주어진다면
이 문장에는 b, j, k, q, v, w, y, z를 사용하지 않기 때문에 완벽한 문자열이 아닙니다.

반면에 "Jackdaws love my big sphinx of quartz"라는 문자열은 모든 알파벳을 사용하고 있으므로 완벽한 문자열 입니다.

문자열 sentence가 매개변수로 주어질 때, 완벽한 문자열을 만드는 데 필요한 문자들을 return 하도록 solution 함수를 완성해 주세요.

<제한사항>
sentence의 길이는 5,000 이하입니다.
sentence는 알파벳, 공백 그리고 특수문자(아스키코드)로 이루어져 있습니다.
sentence가 완벽한 문자열이 되기 위해 필요한 알파벳 소문자들을 오름차순으로 정렬 후 문자열로 합쳐서 return 해주세요.
sentence가 완벽한 문자열인 겨우 "perfect"를 return 해주세요.

<입출력 예>
입력 : "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam."
출력 : "bjkqvwyz"

입력 : "Jackdaws love my big sphinx of quartz"
출력 : "perfect"
*/

function solution(sentence) {
    var answer = ""
    var unusedChar = []
    sentence = sentence.toLowerCase().split(" ").join("").split("")
    sentence.sort((a, b) => { return a.charCodeAt() - b.charCodeAt() })

    const set = new Set(sentence)
    const indexArray = new Array(26).fill(0)
    let lastIndex = -1
    for (const ch of set) {
        let index = getIndex(ch)
        if (index === undefined) { continue }
        indexArray[index] = 1
        for (let i = lastIndex + 1; i < index; i++) {
            unusedChar.push(String.fromCharCode('a'.charCodeAt() + i))
        }
        lastIndex = index
    }
    answer = unusedChar.join("")
    if (answer.length === 0) {
        answer = "perfect"
    }
    return answer
}

function getIndex(ch) {
    const code = ch.charCodeAt()
    if (code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) {
        return code - 'a'.charCodeAt()
    }
    return undefined
}
