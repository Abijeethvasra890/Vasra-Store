
export function calculateDiscount(actual:number, current:number){
    let diff = actual - current;
    if(diff > 0){
        return diff;
    }
}