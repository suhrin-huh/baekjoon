import sys
from collections import deque

TC = int(sys.stdin.readline())
for _ in range(TC):
    m, n, k = map(int, sys.stdin.readline().split())
    arr = [[0] * m for _ in range(n)]
    answer = 0

    for _ in range(k):
        a, b = map(int, sys.stdin.readline().split())
        arr[b][a] = 1

    def check(st):
        q = deque([st])
        delta = [(1, 0), (-1, 0), (0, -1), (0, 1)]
        while q:
            i, j = q.popleft()
            for di, dj in delta:
                ni, nj = i + di, j + dj
                if 0 <= ni < n and 0 <= nj < m and arr[ni][nj] == 1:
                    arr[ni][nj] = 0
                    q.append((ni, nj))

    for y in range(n):
        for x in range(m):
            if arr[y][x] == 1:
                arr[y][x] = 0
                check((y, x))
                answer += 1

    print(answer)
