import sys

# 수열의 크기를 입력받는다.
n = int(sys.stdin.readline())

# 수열을 입력받는다.
arr = list(map(int,sys.stdin.readline().split()))

# 정답을 담을 변수
answer = 1

# 각 숫자별 최대 길이를 작성할 리스트 생성 / 수열의 크기와 리스트의 크기 동일
dp = [1] * n

# 각 위치별로 이전에 나왔던 최대 길이를 비교하면서 LDS 구한다.

for i in range(1,n):
    for j in range(i):
        # 해당 숫자가 비교하려는 숫자보다 작고, [해당 숫자까지의 부분수열의 길이보다 길어질 때]
        if arr[i] < arr[j] and dp[i] < dp[j] + 1:
            # 비교하려는 숫자까지의 가장 긴 감소하는 부분 수열의 길이 + 1
            dp[i] = dp[j] + 1
            # 해당 숫자 기준으로 길이가 answer보다 클 때, 정답 갱신
            if answer < dp[i]:
                answer = dp[i]

print(answer)
