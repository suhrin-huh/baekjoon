import sys
sys.setrecursionlimit(10000) #python이 정한 최대 깊이를 더 깊게 변경해줌
 
n, m = map(int, sys.stdin.readline().split(' '))
graph = [[0] * (n+1) for _ in range(n+1)]
visited = [False] * (n+1)
 
for _ in range(m):
    a, b = map(int, sys.stdin.readline().split(' '))
    graph[a][b] = graph[b][a] = 1
 
 
def DFS(start):
    visited[start] = True
    for i in range(1, n+1):
        if not visited[i] and graph[start][i] == 1:
            DFS(i)
 
 
count = 0
for i in range(1, n+1):
    if not visited[i]:
        DFS(i)
        count += 1
print(count)