


from collections import deque
import sys

n = int(sys.stdin.readline())
arr = [list(map(int, list(sys.stdin.readline().strip()))) for _ in range(n)]

def check_home (st) :
    home = 0
    q = deque()
    q.append(st)
    delta = [(0,1),(0,-1),(1,0),(-1,0)]
    while q:
        home += 1
        i,j = q.popleft()
        for di, dj in delta:
            ni = i + di
            nj = j + dj
            if 0 <= ni < n and 0 <= nj < n:
                if arr[ni][nj]:
                    # 체크 완료한 구역은 다시 계산 안하도록
                    arr[ni][nj] = 0
                    q.append((ni,nj))
    return home

answer = []

for i in range(n):
    for j in range(n):
        if arr[i][j]:
            arr[i][j] = 0
            home = check_home((i,j))
            answer.append(home)
answer.sort()
print(len(answer))
print(*answer, sep="\n")





