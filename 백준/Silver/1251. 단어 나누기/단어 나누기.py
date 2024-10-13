import sys
input = sys.stdin.readline

# 변수 선언
ans = []
line = list(input().strip())
n = len(line)

# 문자열을 slicing 및 뒤집어서 저장
for s in range(1, n-1) : # start와 end를 포함하는 구간과, 앞 구간, 뒷 구간으로 3분류
    for e in range(s,n-1) :
        a, b, c = line[s-1::-1], line[e:s-1:-1], line[-1:e:-1]
        newLine = ''.join(a+b+c)
        ans.append(newLine) # 생성되는 새로운 문자열 저장

ans.sort() # 사전순 정렬
print(ans[0]) # 제일 앞