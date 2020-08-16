function isPalindrome(numb) {
    let number = numb;
    let reversed = 0;

    while (numb > 0) {
        reversed *= 10;
        reversed += numb % 10;
        numb -= numb % 10;
        numb /= 10;
    }

    if (reversed == number) {
        return true;
    }

    return false;
}

console.log(isPalindrome(-121));