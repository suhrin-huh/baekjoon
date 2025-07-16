import sys
import heapq
 
input = sys.stdin.readline
n = int(input())
 
pq = []
 
for _ in range(n):
    st, ed = map(int, input().split())
    heapq.heappush(pq, (ed, st))  # 종료시간 우선 정렬
 
count = 1
limit = heapq.heappop(pq)[0]  # 첫 회의 종료 시간 기준
 
while pq:
    ed, st = heapq.heappop(pq)
    if limit > st:
        continue
    limit = ed
    count += 1
print(count)