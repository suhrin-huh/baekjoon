from collections import deque
import sys

TC = int(sys.stdin.readline())
for tc in range(1,TC+1):
    # 노드의 수와 간선의 수를 입력받는다.
    v, e = map(int, sys.stdin.readline().split())

    # checked : 간선의 방문여부 및 그룹 번호(0, -1, 1)
    # graph : 노드별 간선의 정보
    graph = [[] for _ in range(v+1)]
    checked = [0] * (v+1)
    # 모든 간선의 정보를 받는다.
    for _ in range(e):
        a,b = map(int, sys.stdin.readline().split())
        graph[a].append(b)
        graph[b].append(a)

    answer = "YES"

    # 1번부터 n번의 노드를 탐색하고 정보를 비교, 수정한다.
    for i in range(1,v+1):
        # 하나라도 조건에 만족하지 못하면 중단
        if answer == "NO": break
        # 이전에 이미 방문했던 노드라면 분석 X
        if checked[i] : continue

        # 방문할 노드 번호를 담을 q 생성
        q = deque()
        q.append(i)
        checked[i] = 1

        while q:
            if answer == "NO": break
            now = q.popleft()
            for neighbor in graph[now]:
                # neightbor node가 now노드와 같으면 바로 중단
                if not checked[neighbor]:
                    q.append(neighbor)
                    checked[neighbor] = -checked[now]
                else:
                    if checked[neighbor] == checked[now]:
                        answer = "NO"
                        break
    print(answer)


# 다른 풀이 => 공부 필요!
# from collections import deque
# import sys
#
# TC = int(sys.stdin.readline())
# for tc in range(1, TC + 1):
#     v, e = map(int, sys.stdin.readline().split())
#
#     graph = [[] for _ in range(v + 1)]
#     checked = [0] * (v + 1)
#
#     for _ in range(e):
#         a, b = map(int, sys.stdin.readline().split())
#         graph[a].append(b)
#         graph[b].append(a)
#
#
#     def bfs(start):
#         q = deque([start])
#         checked[start] = 1  # 1로 그룹 설정
#
#         while q:
#             now = q.popleft()
#             for neighbor in graph[now]:
#                 if not checked[neighbor]:  # 미방문 상태
#                     q.append(neighbor)
#                     checked[neighbor] = -checked[now]  # 다른 그룹으로 설정
#                 elif checked[neighbor] == checked[now]:  # 같은 그룹이면 이분 그래프가 아님
#                     return False
#         return True
#
#
#     is_bipartite = True
#     for i in range(1, v + 1):
#         if not checked[i]:  # 방문하지 않은 노드에 대해서만 BFS 탐색
#             if not bfs(i):
#                 is_bipartite = False
#                 break
#
#     print("YES" if is_bipartite else "NO")