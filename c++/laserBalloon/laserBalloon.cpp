/*

<문제>
2차원 좌표 평면에 풍선이 놓여있습니다. 당신은 원점 (0, 0)에서 레이저를 발사해 풍선을 터뜨리려 합니다. 레이저는 발사한 방향으로 직진해서 무한히 나아가며, 만약 진행 방향에 풍선이 있다면 풍선을 터뜨리고 계속해서 나아갑니다. 따라서, 레이저를 한 번 발사해서 풍선 여러 개를 터뜨릴 수도 있습니다.

다음은 좌표 평면에 풍선이 놓여있는 예시입니다.


그림(laserBalloon1.png)에서 풍선은 (2, 2), (4, 4), (1, 4), (-1, -4) 위치에 놓여있습니다. 이때, 레이저를 최소 3번 발사하면 모든 풍선을 터뜨릴 수 있습니다.

풍선이 놓여있는 좌표가 담긴 2차원 배열 balloons가 매개변수로 주어질 때, 모든 풍선을 터뜨리려면 레이저를 최소 몇 번 발사해야 하는지 return 하도록 solution 함수를 완성해주세요.
단, 풍선은 부피가 없고, 레이저가 나아가는 직선과 풍선 좌표가 정확히 만나는 경우에만 풍선이 터진다고 가정합니다.


<제한사항>
balloons는 풍선들의 좌표가 담긴 2차원 배열입니다.
balloons에는 풍선 좌표가 [x축, y축] 순서로 들어있습니다.
balloons의 길이(풍선 개수)는 1 이상 100,000 이하입니다.
balloons의 x축, y축 좌표는 -1,000,000,000 이상 1,000,000,000 이하인 정수입니다.
단, 풍선의 좌표가 [0, 0]인 경우는 없습니다.
서로 다른 두 풍선의 좌표가 같은 경우는 없습니다.

<입출력 예>
입력 : [[2, 2], [4, 4], [1, 4], [-1, -4]]
출력 : 3
*/

#include <string>
#include <vector>
#include <map>
#include <iostream>

using namespace std;

int solution(vector<vector<int>> balloons) {
    int answer = 0;
    
    // there is four quadrant, so vector assign with size 4.
    vector<map<double, bool>> vector_quadrant(4);
    
    for(auto const& balloon: balloons){
        int x = balloon[0], y = balloon[1];
        double slope = (double)y / (double)x;
        
        int quadrant = 0;
        if(x > 0){
            if(y > 0) { quadrant = 1; }
            quadrant = 4;
        }else{
            if(y > 0) { quadrant = 2; }
            quadrant = 3;
        }
        
        // if there is already slope information in map, continue for not counting.
        if(vector_quadrant[quadrant-1].find(slope) != vector_quadrant[quadrant-1].end()){
            continue;
        }
        vector_quadrant[quadrant-1].insert(std::pair<double, bool>(slope, true));
        answer ++;
    }
    
    return answer;
}