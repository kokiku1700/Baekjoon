function solution(n, k) {
    var a = Math.floor(n / 10);
    if(a >= 1){
        return (12000 * n) + (2000 * k) - (2000 * a);
    }
    return (12000 * n) + (2000 * k);
}