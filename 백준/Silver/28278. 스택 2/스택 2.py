'''
명령은 총 다섯 가지이다.

1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
3: 스택에 들어있는 정수의 개수를 출력한다.
4: 스택이 비어있으면 1, 아니면 0을 출력한다.
5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.

첫째 줄에 명령의 수 N이 주어진다. (1 ≤ N ≤ 1,000,000)

둘째 줄부터 N개 줄에 명령이 하나씩 주어진다.

출력을 요구하는 명령은 하나 이상 주어진다. => 출력이 안되는 경우는 없다.

'''
import sys
# 명령의 수를 입력받은 후 그 수만큼 입력을 반복한다.

n = int(sys.stdin.readline().strip('\n'))

# 명령을 처리하는 함수를 만든다.
stack = []
length = 0

for i in range(n):
    # 명령이 하나씩 주어진다.
    order = sys.stdin.readline().strip('\n')
    if order == '2':
        if length == 0:
            print(-1)
            continue
        print(stack.pop())
        length -= 1

    elif order == '3':
        print(length)

    elif order == '4':
        print(int(length == 0))

    elif order == '5':
        if length == 0:
            print(-1)
            continue
        print(stack[-1])

    else:
        stack.append(order[2:])
        length += 1



