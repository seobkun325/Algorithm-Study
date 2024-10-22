import sys
input = sys.stdin.readline

N, M = map(int ,input().split()) # 주차공간 N개, 오늘 이용할 M대의 차량

Rs = []
for _ in range(N):
  Rs.append([int(input()), False]) # 주차공간 (단위가격, 입차유무)

Wk = []
for _ in range(M):
  Wk.append([int(input()), -1]) # 차량정보 (무게, 주차공간 번호)

q = []
ans = 0

for _ in range(2*M):
  q.append(int(input()))

wait_list = [] # 입차 대기 리스트

while q:
  tmp = q.pop(0)
  if tmp > 0: # 입차면
    empty = False
    for i in range(N):
      if Rs[i][1] == False: # 빈 주차공간이 있으면
        Rs[i][1] = True # 주차
        Wk[tmp-1][1] = i # 차량 주차 공간 번호 기록
        ans += Rs[i][0] * Wk[tmp-1][0] # 비용 계산
        empty = True
        break
    if not empty: # 대기리스트 등록
        wait_list.append(tmp)

  else: # 출차면,
    tmp *= -1
    i = Wk[tmp-1][1] # 주차 공간 번호 확인
    if i != -1: # 주차된 차량이 맞다면
      Rs[i][1] = False # 주차공간 비움
      Wk[tmp-1][1] = -1 # 차량 주차 정보 초기화
        
      # 대기 리스트에 차량이 있으면 바로 입차시킴
      if wait_list:
        next_car = wait_list.pop(0)
        Rs[i][1] = True # 주차
        Wk[next_car-1][1] = i # 차량 주차 공간 번호 기록
        ans += Rs[i][0] * Wk[next_car-1][0] # 비용 계산

print(ans)
