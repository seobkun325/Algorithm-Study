import sys
input = sys.stdin.readline
INF = int(1e9)

TC = int(input())

def bellmanFord(start):
    distance[start] = 0

    # n-1번 반복하여 최단 거리 계산
    for i in range(n - 1):
        for curr in range(1, n + 1):
            if distance[curr] == INF:
                continue
            for next, cost in graph[curr]:
                if distance[curr] + cost < distance[next]:
                    distance[next] = distance[curr] + cost

    # 마지막에 한 번 더 모든 간선을 확인하여 음수 사이클 탐지
    for curr in range(1, n + 1):
        if distance[curr] == INF:
            continue
        for next, cost in graph[curr]:
            if distance[curr] + cost < distance[next]:
                return True  # 음수 사이클 발견
    return False  # 음수 사이클 없음

# 테스트 케이스 수만큼 반복
for _ in range(TC):
    n, m, w = map(int, input().split())
    graph = [[] for _ in range(n + 1)]
    
    # 양방향 도로 입력
    for _ in range(m):
        a, b, c = map(int, input().split())
        graph[a].append((b, c))
        graph[b].append((a, c))

    # 웜홀 입력 (음수 간선)
    for _ in range(w):
        a, b, c = map(int, input().split())
        graph[a].append((b, -c))

    # 방문하지 않은 노드를 시작점으로 벨만-포드 수행
    distance = [INF] * (n + 1)
    has_negative_cycle = False

    for start in range(1, n + 1):
        if distance[start] == INF:  # 방문하지 않은 노드에 대해만 벨만-포드 수행
            if bellmanFord(start):
                has_negative_cycle = True
                break

    # 결과 출력
    if has_negative_cycle:
        print('YES')
    else:
        print('NO')
