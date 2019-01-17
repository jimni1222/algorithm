
/*
<문제>
자연수 n이 주어질 때 n을 서로 다른 두 소수의 곱으로 나타낼 수 있는지 알아보려 합니다. 

예를 들어, n = 6이면 서로 다른 두 소수 2와 3의 곱으로 나타낼 수 있습니다. 그러나 n = 12라면 서로 다른 두 소수의 곱으로 나타낼 수 없습니다.
자연수 n이 매개변수로 주어질 때, 곱해서 n이 되는 서로 다른 두 소수를 찾아 return하도록 solution 함수를 완성해 주세요.

<제한사항>
n 은 2 이상 10의 12승 이하의 자연수 입니다.
n을 서로 다른 두 소수의 곱으로 나타낼 수 있다면 해당하는 두 소수를 오름차순으로 정렬해서 배열 형태로 return 해주세요.
만약 n을 서로 다른 두 소수의 곱으로 나타낼 수 없다면 [-1, -1]을 return 해주세요.

<입출력 예>
입력 : 6
출력 : [2,3]

입력 : 12
출력 : [-1, -1]
*/

function solution(n) {
    const primePair = [-1, -1]
    for (let i = 2; i < n; i++) {
        if (n % i !== 0) { continue }

        const pair = n / i
        if (i > pair) { break }

        if (isPrime(i) && isPrime(pair)) {
            primePair[0] = i
            primePair[1] = pair
            break
        }
    }
    return primePair
}

function isPrime(n) {
    if (n <= 1) { return false }
    if (n % 2 === 0) {
        return (n === 2)
    }
    for (let i = 3; Math.pow(i, 2) < n; i += 2) {
        if (n % i === 0) { return false }
    }
    return true
}