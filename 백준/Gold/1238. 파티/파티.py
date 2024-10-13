import sys, heapq
input = sys.stdin.readline
INF = int(1e9)

n, m, x = map(int, input().split())

graph = [[] for _ in range(n+1)]

for _ in range(m) :
  a, b, c = map(int, input().split())
  graph[a].append((b,c))

def dijkstra(start) :
  q = []
  heapq.heappush(q, (0,start))
  distance[start] = 0
  while q :
    dist, now = heapq.heappop(q)
    if distance[now] < dist :
      continue
    for next in graph[now] :
      cost = dist + next[1]
      if cost < distance[next[0]] :
        distance[next[0]] = cost
        heapq.heappush(q, (cost,next[0]))

start = x
distance = [INF] *(n+1)
dijkstra(start)
backDistance = distance.copy()
totalDistance = [0]*(n+1)
for i in range(1,n+1) :
  start = i
  distance = [INF] * (n+1) # 아마 이거 반복문에 들어가야할듯.
  dijkstra(start)
  totalDistance[i] = backDistance[i]+distance[x]
print(max(totalDistance[1:]))
