import sys
input = sys.stdin.readline


N, M = map(int, input().split(" "))
truthList = set(input().split()[1:])
parties = []

for _ in range(M) :
    parties.append(set(input().split()[1:]))
for _ in range(M) :
    for party in parties :
        if party & truthList :
            truthList = truthList.union(party)

cnt = 0
for party in parties :
    if party & truthList :
        continue
    cnt += 1
print(cnt)