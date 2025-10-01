function solution(n) {
    const nums = [];
    
    for ( let i = n; i > 0; i-=2 ) {
        nums.push(i % 2 === 0 ? i *i : i);
    };
    
    const result = nums.reduce((a, b) => a + b);
    
    return result;
}