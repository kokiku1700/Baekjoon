function solution(s) {  
    const arr = s.split(' ').map(Number);
    
    return String(Math.min(...arr)) + " " + String(Math.max(...arr));
}