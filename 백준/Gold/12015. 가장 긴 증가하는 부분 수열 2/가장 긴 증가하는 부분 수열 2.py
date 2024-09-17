# 크기가 1000이 아닌 백만 => 시간제한은 1초 =>
# => 시간복잡도를 nlog n으로 설정해야한다.

# 수열의 크기를 입력받는다.
n = int(input())
# 수열을 입력받는다.
arr = list(map(int, input().split()))

# 보조 배열로 사용할 stack을 정의한다.
# 수열의 첫번째 값을 넣고 시작한다.
stack = [arr[0]]

# 이분 탐색을 통해 배열을 업데이트 한다.
# 들어오는 값마다 해당 숫자가 위치해야할 곳이 지정된다.
# 보조 배열은 실제의 LIS를 만족하는 부분 수열이 아닐 수 있다.

def binary_search(target, st, ed):
    while st <= ed:
        mid = (st + ed) // 2
        if stack[mid] < target:
            st = mid + 1
        else:
            ed = mid - 1
    return st

for i in arr:
    if stack[-1] < i:
        stack.append(i)
    else:
        stack[binary_search(i, 0, len(stack))] = i

print(len(stack))