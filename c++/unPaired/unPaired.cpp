/*
    A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

    For example, in array A such that:

    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
    the elements at indexes 0 and 2 have value 9,
    the elements at indexes 1 and 3 have value 3,
    the elements at indexes 4 and 6 have value 9,
    the element at index 5 has value 7 and is unpaired.
    Write a function:

    int solution(vector<int> &A);

    that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

    For example, given array A such that:

    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
    the function should return 7, as explained in the example above.

    Write an efficient algorithm for the following assumptions:

    N is an odd integer within the range [1..1,000,000];
    each element of array A is an integer within the range [1..1,000,000,000];
    all but one of the values in A occur an even number of times.
    Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

#include <map>
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> &A) {
    map<int, int> map;
    
    if(A.size() == 1){return A[0];}
    
    sort(A.begin(), A.end());

    int current_number = 0;
    int count = 0;
    
    for(auto const& num: A){
        if(current_number == 0){
            current_number = num;
        }else if(current_number != num){
            if(current_number != 0 && count%2 != 0){
                return current_number;
            }
            current_number = num;
            count = 0;
        }
        count++;
    }
    return current_number;
}