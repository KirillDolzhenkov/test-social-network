//checking that а field are not empty:
export const requiredField = (value: any) => {
    if (value) return undefined;
    return "Field is required";
}

//checking that а field has not much length than required:
export const maxLengthCreator = (maxValue: any) => {
    return function (value: any) {
        if (value && value.length > maxValue) return `Max length is ${maxValue} symbols`;
        return undefined;
    }
}

