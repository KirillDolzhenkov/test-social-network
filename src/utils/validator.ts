export const requiredField = (value: any) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxValue: any) => {
    return function (value: any) {
        if (value && value.length > maxValue) return `Max length is ${maxValue} symbols`;
        return undefined;
    }
}

