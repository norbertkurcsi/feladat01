export function feladat01(szinek) {
    let keveresek = 0;

    let countSzinek = szinek.length;

    if(countSzinek !== 0  && countSzinek !== 1){
        keveresek = 1;
        for(let i = 0; i < countSzinek ; i++){
            keveresek *= 2;
        }
        keveresek = keveresek - countSzinek - 1;
    }

    return keveresek;
}