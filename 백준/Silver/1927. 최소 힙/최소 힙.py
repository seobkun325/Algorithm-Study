import sys
import heapq
input = sys.stdin.readline
heap = []
for _ in range(int(input())) :
    x = int(input())
    if x != 0 :
        heapq.heappush(heap, x)
    else :
        if not heap :
            print(0)
        else :
            a = heapq.heappop(heap)
            print(a)
