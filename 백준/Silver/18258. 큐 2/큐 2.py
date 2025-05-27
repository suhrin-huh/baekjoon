from collections import deque
import sys

# n 개의 명령어를 입력받는다.
n = int(sys.stdin.readline().strip())
# 정수를 담을 큐, 길이를 반환할 length를 생성한다.
q = deque()
length = 0

for tc in range(n):
    '''
    push X: 정수 X를 큐에 넣는 연산이다.
    
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.'''

    # 명령어를 입력받는다.
    line = sys.stdin.readline().strip()

    # push X : 쿠에 넣는다. , 가장 긴 명령어이다.
    # 6글자 이상일때는 pusu로 생각하자.
    # wjdtndml qjadnlsms 100000까지 가능하므로 앞의 글자를 자른다.
    if len(line) >= 6:
        q.append(int(line[5:]))
        length += 1

    # pop : 들어있으면 자료를 빼고, 없으면 -1 출력
    if line == 'pop':
        if length:
            print(q.popleft())
            length -= 1
        else:
            print(-1)

    # size : 큐에 들어있는 정수의 개수를 출력한다.
    if line == 'size':
        print(length)

    # empty : 큐가 비어있으면 1, 아니면 0을 출력
    if line == 'empty':
        print(int(not q))

    # front : pop없이 가장 앞에 있는 수 출력, 없으면 -1 cnffur
    if line == 'front':
        if length:
            print(q[0])
        else:
            print(-1)
    if line == 'back':
        if length:
            print(q[-1])
        else:
            print(-1)
