function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    
    if ( cacheSize === 0 ) return cities.length * 5
    
    cities.forEach(v => {
        const e = v.toLowerCase();
        const idx = cache.indexOf(e);
        
        if ( idx !== -1 ) {
            cache.splice(idx, 1);
            answer++
        } else {
            if ( cache.length >= cacheSize ) cache.shift();
            answer += 5;
        }
        cache.push(e);
    })
    
    return answer;
}