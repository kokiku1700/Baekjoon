function solution(food) {
    let answer = '';
    const foodArr = [];
    
    food.shift();
    
    food.forEach((e, i) => {
        const n = Math.floor(e / 2);
        
        foodArr.push((i + 1).toString().repeat(n));
    });
    
    const reverseArr = [...foodArr].reverse();
    
    answer = foodArr.join('') + "0" + reverseArr.join('');
    
    return answer;
}