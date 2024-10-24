import sys
input = sys.stdin.readline

backward = []
frontward = []
now = None

N, Q, C = map(int ,input().split()) # 웹페이지 종류 수, 작업 개수, 최대 캐시 용량
CAP = list(map(int, input().split())) # N개의 웹페이지 별 사용 캐시 공간
is_A = False # 첫 접속 확인

for _ in range(Q) : # Q 개 작업
  cmd = list(input().strip().split())

  # 뒤로가기
  if cmd[0] == 'B' :
    if backward : # [1] 뒤로갈게 있으면
      frontward.append(now) # [2] 현재를 앞으로에 저장
      now = backward.pop() # [3] 뒤로가기에서 가장 최근 호출

  # 앞으로가기
  elif cmd[0] == 'F' :
    if frontward : # [1] 앞으로갈게 있으면
      backward.append(now) # [2] 현재를 뒤로가기에 저장
      now = frontward.pop() # [3] 앞으로가기에서 가장 최근 호출

  # 접속
  elif cmd[0] == 'A' :
    num = int(cmd[1])
    frontward = [] # [1] 앞으로가기 초기화

    if is_A :
      backward.append(now)
    now = num
    is_A = True

    # 전체 캐쉬가 이번 접속에 의해 초과되는가? 
    total_cache = sum(CAP[x-1] for x in backward) +CAP[now-1]

    while total_cache > C and backward: # [3]
      removed = backward.pop(0)
      total_cache -= CAP[removed-1]

  # 캐시 압축
  elif cmd[0] == 'C':
    compressed = []
    for page in backward :
      if not compressed or compressed[-1] != page :
        compressed.append(page)
    backward = compressed

# 출력
print(now)
if backward :
  backward.reverse()
  print(*backward, sep=" ")
else :
  print(-1)
if frontward :
  frontward.reverse()
  print(*frontward, sep=" ")
else : 
  print(-1)
