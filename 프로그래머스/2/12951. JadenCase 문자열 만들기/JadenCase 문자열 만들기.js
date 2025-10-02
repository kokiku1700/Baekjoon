function solution(s) {
    return s.split(' ').map(e => {
        if ( e === "" ) return ""; 
        return e[0].toUpperCase() + e.slice(1).toLowerCase();    
    }).join(' ');
}