n = int(input())  # n을 입력받음
towers = list(map(int, input().split())) # n개만큼 공백으로 구분되어 받아 리스트에 담음
stack = [] # 스택 리스트 생성
answer = [] # 정답 리스트 생성

for i in range(n): # n번 반복
    while stack : # stack[인덱스][타워높이]에 뭐가 값이 있다면
        if stack[-1][1] > towers[i] : # 스택 최상단 탑의 높이가 i번째 타워보다 크다면 (i번째 탑이 스택에 있는 탑에 신호전달가능하다는 뜻)
            answer.append(stack[-1][0] +1) #정답에 스택 최상단 탑의 인덱스 저장(+1 해서 저장해야함)
            break #종료
        else :
            stack.pop() # i번째타워에 가려 그전의 타워들 쓸모 없으니 빼버림
    if not stack :  # 스택에 갑이 없다면
        answer.append(0) # 0을 채움
    stack.append([i, towers[i]]) #스택에 여태 비교했던 i번째 타워 넣음
print(" ".join(map(str, answer))) # answer리스트를 스트링형식으로 합쳐 공백으로 구분
