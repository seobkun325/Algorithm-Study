import sys
input = sys.stdin.readline

N = int(input())
dict = {}
for _ in range(N) :
  book = input().strip()
  if book in dict :
    dict[book] += 1
  else :
    dict[book] = 1

ans = []
key = 0
for x in dict :
  if dict[x] > key :
    key = dict[x]

for x in dict :
  if dict[x] == key :
    ans.append(x)
ans.sort()
print(ans[0])