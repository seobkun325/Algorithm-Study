import sys
input = sys.stdin.readline

def check() :
    for i in range(2,100) :
        if prime[i] == True :
            for j in range(2*i, 10000, i) :
                prime[j] = False

def bfs():
    q=[]
    q.append([start, 0])
    v = [0 for i in range(10000)]
    v[start] = 1
    while q :
        now ,cnt = q.pop(0)
        strNow = str(now)

        if now == end :
            return cnt
        for i in range(4) :
            for j in range(10) :
                temp = int(strNow[:i] + str(j) + strNow[i+1:])

                if v[temp] == 0 and prime[temp] and temp >= 1000 :
                    v[temp] = 1
                    q.append([temp, cnt+1])
t = int(input())
prime = [True for _ in range(10000)]
check()
for _ in range(t) :
    start, end = map(int, input().split())
    result = bfs()
    print(result if result!=None else "Impossible")