import sys
import heapq

# input 전처리
input = sys.stdin.readline
V, E = map(int,input().split(" "))
st = int(input())
INF = 21e8
# 간선 정보를 저장할 행렬
arr = [[] for _ in range(V+1)]

# 간선 저장
for _ in range(E):
    u,v,w = map(int,input().split(" "))
    arr[u].append([w,v]) # 가중치가 적은 것부터 나올 수 있도록 (가중치, 정점)

# 경로값을 저장할 행렬
dist = [INF] * (V+1)
# 경로 계산
def dijkstra():
    pq = []
    dist[st] = 0
    heapq.heappush(pq, (0, st))

    while (pq):
        total, now = heapq.heappop(pq)
        for cost, next in arr[now]:
            nextWeight = cost + total
            if nextWeight >= dist[next]: continue
            dist[next] = nextWeight
            heapq.heappush(pq, (nextWeight, next))
dijkstra()

dist = dist[1:]
for w in dist:
    print(w if w != INF else "INF")