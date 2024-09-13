from collections import deque
import copy
n,m = map(int,input().split())
arr = [list(map(int,list(input()))) for _ in range(n)]

q=deque()
q.append([0,0,1,1])
visit=[[[0]*m for i in range(n)] for j in range(2)]
visit[0][0][0] = 0
visit[1][0][0] = 1
delta = [(1, 0), (0, 1), (-1, 0), (0, -1)]
answer = 21e8
while q:
    i,j,time,chance=q.popleft()
    if (i,j) == (n-1,m-1):
        if answer > time:
            answer = time
        continue
    for di,dj in delta:
        ni=i+di
        nj=j+dj
        if 0 <= ni < n and 0 <= nj < m:
            if arr[ni][nj] == 0 or arr[ni][nj]*chance == 1:
                test = visit[chance][ni][nj]
                if not test or test > time+1:
                    visit[chance][ni][nj] = time + 1
                    q.append([ni,nj,time+1,chance-arr[ni][nj]])

if answer == 21e8:
    print(-1)
else:
    print(answer)



