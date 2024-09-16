import sys

# 수열의 크기 n을 입력받는다.
n = int(sys.stdin.readline())

# 숫자를 입력받는다.
lst = list(map(int,sys.stdin.readline().split()))

# 각 숫가별로 취대 길이를 체크할 수 있도록 행력을 생성한다.
# 자기자신도 포함이므로 시작은 1로 설정
dp = [1] * n

answer = 1

# 두번째부터 분석을 시작한다.
for i in range(1,n):
    for j in range(i):
        # 해당 원소가 비교하는 원소보다 클 때 && 해당 원소의 최대 길이보다 비교원소 + 1이 더 크면 갱신
        if lst[i] > lst[j] and dp[i] < dp[j] + 1:
                dp[i] = dp[j] + 1
                # 현재 최대 길이보다 더 크다면 정답 갱신
                if answer < dp[i]: answer = dp[i]

print(answer)