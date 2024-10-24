import sys
from itertools import combinations

input = sys.stdin.readline
line = input().strip()

# 괄호쌍의 인덱스 저장
index = []
stack = []
for i, x in enumerate(line) :
  if x == '(' :
    stack.append(i)
  elif x == ')' :
    if stack :
      index.append((stack.pop(),i))

all_combinations = [] # 괄호쌍들 중에서 고를 수 있는 모든 조합
for i in range(1,len(index) + 1) : # 아무것도 안고르는것은 뺌
  all_combinations.extend(combinations(index,i))


answer = [] # 나중에 사전순으로 정리하기 위한 출력물 보관소
for i in range(len(all_combinations)) :
  choice = [] # 뺄 인덱스들 모을 배열
  for x in all_combinations[i] :
    left, right = x 
    choice.append(left)
    choice.append(right)

  ans = "" # 문장 만들 곳
  for i in range(len(line)) :
    if i not in choice :
      ans+=line[i]
  answer.append(ans)
answer = list(set(answer))
answer.sort()
print(*answer,sep="\n")