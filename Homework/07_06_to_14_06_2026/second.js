//2
let fraction1 =
{
    numerator: 1,
    denominator: 2
};
let fraction2 =
{
    numerator: 3,
    denominator: 4
};
//2.1
function addFractions(f1, f2)
{
    return {
        numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
        denominator: f1.denominator * f2.denominator
    };
}
//2.2
function subtractFractions(f1, f2)
{
    return {
        numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
        denominator: f1.denominator * f2.denominator
    };
}
//2.3
function multiplyFractions(f1, f2)
{
    return {
        numerator: f1.numerator * f2.numerator,
        denominator: f1.denominator * f2.denominator
    };
}
//2.4
function divideFractions(f1, f2)
{
    return {
        numerator: f1.numerator * f2.denominator,
        denominator: f1.denominator * f2.numerator
    };
}
//2.5
function reduceFraction(f)
{
    let min =
        f.numerator < f.denominator
        ? f.numerator
        : f.denominator;

    let gcd = 1;
    for(let i = 1; i <= min; i++)
    {
        if(f.numerator % i == 0 && f.denominator % i == 0)
        {
            gcd = i;
        }
    }
    f.numerator /= gcd;
    f.denominator /= gcd;
}
//2.6
let result = addFractions(fraction1, fraction2);
reduceFraction(result);
console.log("Result: " + result.numerator + "/" + result.denominator);