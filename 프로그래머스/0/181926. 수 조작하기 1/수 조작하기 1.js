function solution(n, control) {
    const command = control.split('');
    
    command.forEach(e => {
        switch ( e ) {
            case "w":
                n++;
                break;
            case "s":
                n--;
                break;
            case "d":
                n += 10;
                break;
            case "a":
                n -= 10;
                break;
        }
    })
    return n;
}