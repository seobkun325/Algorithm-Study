import sys
input = sys.stdin.readline

N = int(input())
p = [list(map(int, input().split())) for _ in range(N)]
p.append(p[0])
sum = 0
sum2 = 0
for i in range(N) :
    sum += p[i][0] * p[i+1][1]
    sum2 += p[i][1] * p[i+1][0]
ans = (sum - sum2) / 2
if ans == 0 :
    print(0.0)
elif ans < 0 :
    ans = ans*(-1)
    print(ans)
else :
    print(ans)