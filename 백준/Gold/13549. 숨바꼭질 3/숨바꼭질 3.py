import sys
import heapq
INF = int(1e9)
input = sys.stdin.readline

start, end = map(int, input().split())
graph= [[] for _ in range(100001)]
for i in range(100001) :
  for next in (i-1, i+1, i*2) :
    if 0<= next <= 100000 :
      if next == i*2 :
        graph[i].append((next, 0))
      else :
        graph[i].append((next, 1))
visited = [False] * 100001
distance = [INF] * 100001

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
        heapq.heappush(q, (cost, next[0]))
      
dijkstra(start)
print(distance[end])