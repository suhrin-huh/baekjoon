from collections import deque
st,ed = map(int,input().split())
q = deque()
q.append((0,st))
answer = 100000
cnt = 0
used = [100000]*100001
while q:
    time, pos = q.popleft()
    if time > answer:
        continue
    if pos == ed:
        if cnt == 0: answer = time
        cnt += 1
        continue
    for di in [1,-1,pos]:
        if 0 <= pos + di and pos+di <= 100000:
            if used[pos+di] >= time+1:
                used[pos+di] = time+1
                q.append((time+1,pos+di))

print(answer)
print(cnt)