function solution(phone_number) {
    const nums = phone_number.slice(-4);
    const answer = "*".repeat(phone_number.length - 4) + nums;
    
    return answer;
}