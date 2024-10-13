import sys, heapq
input = sys.stdin.readline
INF = int(1e9)

# 노드, 간선 수
n, m = map(int, input().split())
# 시작노드
start = int(input())
# graph 생성
graph = [[] for _ in range(n+1)]
# distance 생성
distance = [INF] * (n+1)

# 간선 정보 받아오기
for _ in range(m) :
  a, b, c = map(int, input().split())
  graph[a].append((b,c))

# Dijkstra 정의
def dijkstra(start) :
  q = []
  heapq.heappush(q,(0,start))
  distance[start] = 0
  while q :
    dist, now = heapq.heappop(q)
    if distance[now] < dist :
      continue
    for next in graph[now] :
      cost = dist + next[1]
      if cost < distance[next[0]] :
        distance[next[0]] = cost
        heapq.heappush(q, (cost, next[0]))

dijkstra(start)

for i in range(1, n+1) :
  if distance[i] == INF :
    print("INF")
  else :
    print(distance[i])