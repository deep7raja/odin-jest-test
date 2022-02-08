export function capitalize(str){
    if(str.length<1){
        return '';
    }
    let ans = str.charAt(0).toUpperCase();
    for(let i=1; i<str.length; ++i){
        ans += str.charAt(i);
    }
    return ans;
}