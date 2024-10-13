import sys
input = sys.stdin.readline

N = int(input())
s = []
arr = list(input().strip())
word = [0]*N
for i in range(N):
    word[i] = int(input())
for i in range (len(arr)) :
    if 'A' <= arr[i] <= 'Z' :
        arr[i] = word[ord(arr[i]) - ord('A')]
command = ['+', '-', '*', '/']
for i in range(len(arr)) :
    if arr[i] in command :
        num2 = s.pop()
        num1 = s.pop()
        if arr[i] == '+' :
            s.append(num1 + num2)
        elif arr[i] == '-' :
            s.append(num1 - num2)
        elif arr[i] == '*' :
            s.append(num1 * num2)
        elif arr[i] == '/' :
            s.append(num1 / num2)
    else :
        s.append(arr[i])
print(f"{s[0]:.2f}")