import sys
input = sys.stdin.readline

def paperType (x,y) :
    global typeA, typeB, typeC
    if paper[x][y] == -1 :
        typeA += 1
    elif paper[x][y] == 0 :
        typeB += 1
    else :
        typeC += 1

def cut(x,y,N) :
    if N == 1:
        paperType(x,y)
        return
    nowType = paper[x][y]
    for i in range(x, x+N) :
        for j in range(y, y+N) :
            if paper[i][j] != nowType :
                newN = N//3
                cut(x,y,newN)
                cut(x+newN,y,newN)
                cut(x+2*newN,y,newN)
                cut(x,y+newN,newN)
                cut(x,y+2*newN,newN)
                cut(x+newN,y+newN,newN)
                cut(x+newN,y+2*newN,newN)
                cut(x+2*newN,y+newN,newN)
                cut(x+2*newN,y+2*newN,newN)
                return
    paperType(x,y)
    return

N = int(input())
paper = [list(map(int, input().split(" ")))for _ in range(N)]
typeA = 0
typeB = 0
typeC = 0
cut(0,0,N)
print(typeA)
print(typeB)
print(typeC)