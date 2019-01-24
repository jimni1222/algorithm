
/*
<문제>
팰린드롬이란 뒤에서부터 읽어도 원래와 똑같은 문자열을 의미합니다.

예를 들어, 'abab'는 팰린드롬 문자열이 아닙니다. 하지만 뒤에 'a'를 추가한다면 'ababa'가 되어 앞에서부터 읽을 때와 뒤에서부터 읽을 때가 똑같은 팰린드롬 문자열이 되고, 이 때 문자열의 길이는 5가 됩니다.
이처럼 문자열이 주어질 때, 문자열의 뒤에 적절한 문자를 추가한다면 팰린드롬인 문자열로 만들 수 있습니다.

문자열이 주어질 때, 문자열의 뒤에 최소한의 문자를 추가해 팰린드롬 문자열로 만든 후, 만들어진 팰린드롬 문자열의 전체 길이를 return 하도록 solution 함수를 완성해주세요.

<제한사항>
문자열의 길이는 1,000 이하의 자연수 입니다.
문자열은 모두 소문자로만 이루어져 있습니다.

<입출력 예>
입력 : "abab"
출력 : 5

입력 : "abcde"
출력 : 9
*/

function solution(plain) {
    const stringArray = plain.split("")
    let palindromeIndex = -1

    for (let i = 0; i < stringArray.length; i++) {
        if (isPalindrome(stringArray.slice(i))) {
            palindromeIndex = i
            break
        }
    }
    return stringArray.length + palindromeIndex
}

function isPalindrome(stringArray) {
    const length = stringArray.length
    const middle = Math.floor(length / 2)
    for (let i = 0; i < middle; i++) {
        const endPoint = length - 1 - i
        if (stringArray[i] !== stringArray[endPoint]) {
            return false
        }
    }
    return true
}