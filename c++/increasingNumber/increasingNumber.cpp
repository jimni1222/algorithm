
/*
<문제>
증가하는 수란 숫자의 가장 왼쪽부터 오른쪽으로 읽을 때, 작거나 같은 경우가 없이 항상 증가하는 수를 의미합니다. 
즉 0, 05, 47, 123, 1789 등은 증가하는 수이지만 455, 790 등은 증가하는 수가 아닙니다.
단 숫자는 0에서 시자갛ㄹ 수 있고 증가하는 기준은 길이 기준과 숫자 기준이 있습니다.
예를 들어 길이가 4인 6789보다 길이가 5인 01234가 더 큰 수 입니다. 또한 길이가 같을 때는 05보다 12가 더 큰 수 입니다.
숫자 K가 주어졌을 때, K번째 증가하는 수를 반환하는 함수를 완성해 주세요.
이 때, K번째로 증가하는 수가 존재하지 않는다면 "-1"을 반환하세요. (반환형은 문자열입니다.)

<제한사항>
K: 1,000,000,000 이하인 자연수

<입출력 예>
입력 : 1
출력 : "0"

입력 : 10
출력 : "9"

입력 : 11
출력 : "01"

입력 : 999999999
출력 : "-1"
*/
#include <vector>
#include <map>
#include <string>
#include <iostream>

using namespace std;


string NextNumber(string input, int max_num) {
   if (input == "") return "0";
   if (input.back() < '0' + max_num) {
       input.back()++;
       return input;
   } else {
       if (max_num == 0){
           for(auto& c: input){c++;};
           return "0" + input;
       } else {
           string first_part = NextNumber(input.substr(0, input.length() - 1), max_num - 1);
           char last_char = first_part.back();
           last_char++;
           return  first_part + last_char;
       }
   }
}

string solution(int k) {
   if (k == 0) return "0";
   string ret_val = "0";
   for (int i = 1; i < k; i++) {
       ret_val = NextNumber(ret_val, 9);
       if(i < k - 1 && ret_val == "0123456789") {
           return "-1";
       }
   }
   return ret_val;
}