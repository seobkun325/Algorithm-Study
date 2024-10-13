n = int(input())

time = []
for i in range(n):
    start, end = map(int, input().split())
    time.append([start, end])

timeline = sorted(time, key=lambda x: (x[1], x[0]))
answer = 1
end = timeline[0][1]

for index in range(1, n):
    if end <= timeline[index][0]:
        answer += 1
        end = timeline[index][1]
print(answer)
