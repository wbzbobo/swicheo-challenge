var sum_to_n_a = function(n) {
    if(n == 0){
        return 0;
    }
    return n + sum_to_n_a(n-1);
};

var sum_to_n_b = function(n) {
    let ans = 0;
    for(let i = 0; i <= n; i++){
        ans += i;
    }
    return ans;
};

var sum_to_n_c = function(n) {
    return (1+n) * n / 2;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));