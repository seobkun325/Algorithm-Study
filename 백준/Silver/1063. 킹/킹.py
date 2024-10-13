import sys
input = sys.stdin.readline
k, s, N = input().split(" ")
king = (8-int(k[1]), ord(k[0])- 65)
stone = (8-int(s[1]), ord(s[0])- 65)
lst = {'R' : (0,1), 'L' : (0,-1), 'B' : (1,0), 'T' : (-1, 0), 'RT' : (-1,1), 'LT' : (-1,-1), 'RB' : (1,1), 'LB' : (1,-1)}
for _ in range (int(N)) :
    command = input().strip()
    ci, cj = king
    di, dj = lst[command]
    ni, nj = ci+di, cj+dj
    if 0<=ni<8 and 0<=nj<8 and (ni, nj) != stone :
        king = (ni, nj)
    elif 0<=ni<8 and 0<=nj<8 and (ni,nj) == stone :
        stone_ci, stone_cj = stone
        stone_ni, stone_nj = stone_ci+di, stone_cj+dj
        if 0<=stone_ni<8 and 0<=stone_nj<8 :
            stone = (stone_ni,stone_nj)
            king = (ni, nj)
ta, tb = king
tc, td = stone
ans1 = str(chr(tb+65)) + str(8-ta)
ans2 = str(chr(td+65)) + str(8-tc)
print(ans1)
print(ans2)