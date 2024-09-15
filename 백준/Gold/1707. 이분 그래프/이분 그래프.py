# 다른 풀이 방법 => 공부 필요!
from collections import deque
import sys

TC = int(sys.stdin.readline())
for tc in range(1, TC + 1):
    v, e = map(int, sys.stdin.readline().split())
    
    graph = [[] for _ in range(v + 1)]
    checked = [0] * (v + 1)
    
    for _ in range(e):
        a, b = map(int, sys.stdin.readline().split())
        graph[a].append(b)
        graph[b].append(a)
    
    def bfs(start):
        q = deque([start])
        checked[start] = 1  # 1로 그룹 설정
        
        while q:
            now = q.popleft()
            for neighbor in graph[now]:
                if not checked[neighbor]:  # 미방문 상태
                    q.append(neighbor)
                    checked[neighbor] = -checked[now]  # 다른 그룹으로 설정
                elif checked[neighbor] == checked[now]:  # 같은 그룹이면 이분 그래프가 아님
                    return False
        return True

    is_bipartite = True
    for i in range(1, v + 1):
        if not checked[i]:  # 방문하지 않은 노드에 대해서만 BFS 탐색
            if not bfs(i):
                is_bipartite = False
                break

    print("YES" if is_bipartite else "NO")
