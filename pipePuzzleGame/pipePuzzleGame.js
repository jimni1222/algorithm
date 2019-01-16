
/*
<문제>
파이프 퍼즐 게임은 NxN 크기의 게임 보드에 여러 가지 파이프들을 연결하여 액체가 흘러갈 수 있도록 길을 만드는 게임입니다.

게임 보드는 왼쪽 위가 (0,0), 오른쪽 아래가 (N-1, N-1)의 좌표를 가집니다. 참고하실 그림(pipePuzzleGame_1.png)은 N=8인 경우 파이프가 연결된 게임 보드에서 액체가 흘러가는 상태를 나타낸 그림입니다.
해당 그림(pipePuzzleGame_1.png)에서 시작 지점은 (1,1) 위치에 있습니다. 시작 지점에서 흘러나온 액체는 파이프(점선 경로)를 따라서 이동하게 됩니다.
파이프를 따라 흐르던 액체는 파이프가 끊겨있거나, 벽 혹은 다른 파이프에 막혀 더 이상 이동하지 못하는 등 파이프의 끝에 도달하면 더 이상 이동하지 못하고, 게임이 끝나게 됩니다.
해당 그림(pipePuzzleGame_1.png)에서 만약 파이프를 추가로 연결하지 않는다면 (4,6) 위치까지 액체가 흐른 후 게임이 끝나게 됩니다.

이 게임에서는 7가지 종류의 파이프가 사용됩니다. 파이프의 종류와 번호는 (pipePuzzleGame_2.png)를 확인해 주세요.

파이프의 한쪽 구멍을 통해 흘러들어간 액체는 파이프 반대쪽 구멍을 통해 빠져나가게 되며, 십자 모양의(7번) 파이프의 경우 흘러들어온 액체는 항상 직선 방향에 있는 반대쪽 구멍으로 빠져나가게 됩니다.

또 시작점은 참고 사진(pipePuzzleGame_3.png)과 같이 4가지 모양이 있을 수 있습니다.

이 게임에서는 파이프의 시작지점부터 끝 지점까지 액체가 흘러간 거리 만큼 점수를 획득하게 됩니다. 예를 들어 그림(pipePuzzleGame_1.png)에서 액체는 시작지점부터 33칸을 흘러간 후 더 이상 이동하지 못하므로, 액체의 이동 거리는 33이 됩니다.

현재 게임 보드의 상태를 board와 액체가 출발하는 위치 x,y가 매개변수로 주어질 때, 시작 지점에서 출발한 액체가 파이프의 끝까지 흘러간 이동 거리를 return 하도록 solution 함수를 완성해 주세요.

<제한사항>
2차원 배열 board의 크기 N x N : 5 <= N <= 20
시작 지점의 취기 x,y : 0 <= x, y < N, x는 세로축 좌표, y는 가로축 좌표입니다.
2차원 배열 board의 각 원소에는 시작지점 (x,y) 위치에 8이상 11 이하의 정수가, 나머지 위치에 0 이상 7 이하의 정수가 들어있습니다.
board의 각 원소의 값 중 0은 빈칸을, 1~7은 각각 파이프의 모양을, 8~11은 시작지점의 모양을 나타냅니다. 각각의 번호에 대응되는 파이프 모양은 문제의 파이프 모양 밑에 적혀 있는 번호와 일치합니다.

<입출력 예>
입력 : [[4,7,6,1,0], [5,5,0,5,0], [3,7,6,2,0], [0,5,0,4,1], [3,9,0,3,2]], 4, 1
출력 : 5

입력 : [[4,0,4,7,1], [8,6,7,6,2], [0,0,5,0,0], [4,1,6,6,2], [3,2,0,0,0]], 1, 0
출력 : 10
*/


var Direction = {
    "East": 1,
    "West": 2,
    "South": 3,
    "North": 4,
}

function solution(board, x, y) {
    const visitedArray = makeTwoDimensionalArray(board.length)
    return calculatePath(board, visitedArray, x, y, 0)
}

function calculatePath(board, visitedArray, x, y, distance, enterDirection) {
    if (x < 0 || y < 0 || x > board.length - 1 || y > board.length - 1) {
        return distance
    }
    if (visitedArray[x][y] >= 1) {
        if (board[x][y] !== 7) {
            return distance
        } else if (visitedArray[x][y] >= 2) {
            return distance
        }
    }
    visitedArray[x][y]++
    // The first starting point does not have a flow direction.
    if (enterDirection !== undefined) {
        // The direction in which the water flows depends on the direction in which the water enters.
        switch (board[x][y]) {
            case 0:
                return distance
            case 1:
                if (enterDirection == Direction.West) {
                    enterDirection = Direction.North; x++
                } else if (enterDirection == Direction.South) {
                    enterDirection = Direction.East; y--
                } else {
                    return distance
                }
                break
            case 2:
                if (enterDirection == Direction.West) {
                    enterDirection = Direction.South; x--
                } else if (enterDirection == Direction.North) {
                    enterDirection = Direction.East; y--
                } else {
                    return distance
                }
                break
            case 3:
                if (enterDirection == Direction.North) {
                    enterDirection = Direction.West; y++
                } else if (enterDirection == Direction.East) {
                    enterDirection = Direction.South; x--
                } else {
                    return distance
                }
                break
            case 4:
                if (enterDirection == Direction.South) {
                    enterDirection = Direction.West; y++
                } else if (enterDirection == Direction.East) {
                    enterDirection = Direction.North; x++
                } else {
                    return distance
                }
                break
            case 5:
                if (enterDirection == Direction.North) {
                    enterDirection = Direction.North; x++
                } else if (enterDirection == Direction.South) {
                    enterDirection = Direction.South; x--
                } else {
                    return distance
                }
                break
            case 6:
                if (enterDirection == Direction.East) {
                    enterDirection = Direction.East; y--
                } else if (enterDirection == Direction.West) {
                    enterDirection = Direction.West; y++
                } else {
                    return distance
                }
                break
            case 7:
                if (enterDirection == Direction.East) {
                    enterDirection = Direction.East; y--
                } else if (enterDirection == Direction.West) {
                    enterDirection = Direction.West; y++
                } else if (enterDirection == Direction.South) {
                    enterDirection = Direction.South; x--
                } else if (enterDirection == Direction.North) {
                    enterDirection = Direction.North; x++
                }
                break
        }
    } else {
        switch (board[x][y]) {
            case 8:
                // next direction will be from 'West'
                enterDirection = Direction.West; y++
                break
            case 9:
                // next direction will be from 'South'
                enterDirection = Direction.South; x--
                break
            case 10:
                // next direction will be from 'East'
                enterDirection = Direction.East; y--
                break
            case 11:
                // next direction will be from 'North'
                enterDirection = Direction.North; x++
                break
        }
    }

    distance++
    return calculatePath(board, visitedArray, x, y, distance, enterDirection)
}

function makeTwoDimensionalArray(size) {
    const array = []
    for (let i = 0; i < size; i++) {
        array.push(new Array(size).fill(0))
    }
    return array
}