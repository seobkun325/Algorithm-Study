import sys
input = sys.stdin.readline

left = list(input().strip())
right = []
for _ in range(int(input())) :
    command = list(input().strip().split(" "))
    if command[0] == 'L' and left :
        right.append(left.pop())
    elif command[0] == 'D' and right :
        left.append(right.pop())
    elif command[0] == 'B' and left :
        left.pop()
    elif command[0] == 'P' :
        left.append(command[1])

left.extend(reversed(right))
print(''.join(left))
