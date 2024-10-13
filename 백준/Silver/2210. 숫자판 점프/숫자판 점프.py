import sys
input = sys.stdin.readline
from collections import defaultdict
def jump(si,sj,L) :
    global lst
    global listing
    if L == 6 :
        word = "".join(listing)
        lst[word] += 1
        return 0
    for di, dj in ((1,0), (-1,0), (0,1), (0,-1)) :
        ni, nj = si + di, sj + dj
        if 0<=ni<5 and 0<=nj<5:
            listing.append(arr[ni][nj])
            jump(ni, nj, L+1)
            listing.pop()



arr = [list(input().strip().split(" ")) for _ in range(5)]
lst = defaultdict(int)
for i in range(5) :
    for j in range(5) :
        listing = []
        jump(i,j,0)
print(len(lst))