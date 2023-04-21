// complete the given function

function palindrome(str){
    let arr=str.split(" ");
    str=arr.join("");
    let i=0,j=str.length-1;
    while(i<j){
        if(str[i]!=str[j])
            return false;
        i++;
        j--;
    }
    return true;
}
module.exports = palindrome
