// 클래스
class Queue {
    constructor() {
        this.arr = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        return this.rear - this.front;
    }
    push(value) {
        this.arr[this.rear++] = value;
    }
    popleft() {
        if (this.size() === 0) {
            return undefined;
        }
        const tmp = this.arr[this.front++];
        return tmp;
    }
}




const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [start, end] = input.split(" ").map(Number);

const ans = move(start, end);
console.log(ans[0]);
console.log(ans[1]);



// 함수
function move(start, end) {
    const q = new Queue();
    let visited = Array(100001).fill(0);
    let [cnt, result] = [0,0];
    q.push(start);
    while(q.size() > 0) {
        current = q.popleft();
        const tmp = visited[current];
        if (current === end) {
            result = tmp;
            cnt += 1;
            continue
        }

        for (let next of [current+1, current-1, current*2]) {
            if (next >= 0 && next < 100001 && (visited[next] === 0 || visited[next] === visited[current] + 1)){
                visited[next] = visited[current] + 1
                q.push(next);
            }
        }
    }
    return [result, cnt];

}