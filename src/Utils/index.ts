export const roundN : any = (value: number, decimalPlaces: number) => {
    return (
        Number(Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces).toFixed(decimalPlaces)
    )
};