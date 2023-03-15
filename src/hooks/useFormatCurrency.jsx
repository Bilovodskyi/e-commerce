import useFetch from "./useFetch";

const USD = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
});

const CAD = new Intl.NumberFormat(undefined, {
    currency: "CAD",
    style: "currency",
});

const MXN = new Intl.NumberFormat(undefined, {
    currency: "MXN",
    style: "currency",
});

const EUR = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency",
});

const PLN = new Intl.NumberFormat(undefined, {
    currency: "PLN",
    style: "currency",
});

const CHF = new Intl.NumberFormat(undefined, {
    currency: "CHF",
    style: "currency",
});

const GBP = new Intl.NumberFormat(undefined, {
    currency: "GBP",
    style: "currency",
});

const JPY = new Intl.NumberFormat(undefined, {
    currency: "JPY",
    style: "currency",
});

const AUD = new Intl.NumberFormat(undefined, {
    currency: "AUD",
    style: "currency",
});

const formatCurrency = (number, currency) => {
    const { exchangeRate } = useFetch();
    if (currency === "USD")
        return USD.format(Math.trunc(number * exchangeRate?.USD));
    if (currency === "CAD")
        return CAD.format(Math.trunc(number * exchangeRate?.CAD));
    if (currency === "MXN")
        return MXN.format(Math.trunc(number * exchangeRate?.MXN));
    if (currency === "EUR")
        return EUR.format(Math.trunc(number * exchangeRate?.EUR));
    if (currency === "PLN")
        return PLN.format(Math.trunc(number * exchangeRate?.PLN));
    if (currency === "CHF")
        return CHF.format(Math.trunc(number * exchangeRate?.CHF));
    if (currency === "GBP")
        return GBP.format(Math.trunc(number * exchangeRate?.GBP));
    if (currency === "JPY")
        return JPY.format(Math.trunc(number * exchangeRate?.JPY));
    if (currency === "AUD")
        return AUD.format(Math.trunc(number * exchangeRate?.AUD));
};

export default formatCurrency;
