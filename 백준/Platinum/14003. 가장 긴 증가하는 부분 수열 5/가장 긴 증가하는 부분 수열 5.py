import sys
import bisect

n = int(sys.stdin.readline())

arr = list(map(int, sys.stdin.readline().split()))


# LIS를 저장하기 위한 배열
LIS = []

# 각 위치에 들어간 원소의 lis 배열에서의 위치를 기록
pos = [0] * n


for i in range(n):
    num = arr[i]

    idx = bisect.bisect_left(LIS, num)
    # lis에서 num이 들어갈 위치를 이분 탐색으로 찾는다.
    if idx < len(LIS):
        LIS[idx] = num
    else:
        LIS.append(num)


    # 각 원소가 LIS의 어느 위치에 있는지 기록
    # 원소마다 자신이 존재할 수 있는 위치를 할당받는다.
    pos[i] = idx

result = []
current_pos = len(LIS)-1

# 가장 긴 길이를 가지고 있는 = 마지막에 잇는 원소부터 담게 된다.
# 위에서 pos 배열의 값을 변경하면서 여러 가능한 수열중에서 가장 나중의 버전으로 구할 수 있다.

# 뒤에서부터 찾아가면서 숫자 구하기
for i in range(n-1,-1,-1):
    if pos[i] == current_pos:
        result.append(arr[i])
        current_pos -= 1

result.reverse()

print(len(result))
print(*result)