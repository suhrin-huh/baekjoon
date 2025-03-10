
n, k = map(int, input().split())

coins = [int(input()) for _ in range(n)]

dp = [0] * (k + 1)
dp[0] = 1

# 동전별로 DP 배열 업데이트
for coin in coins:
    for j in range(coin, k + 1):
        dp[j] += dp[j - coin]

# 정답 출력
print(dp[k])
