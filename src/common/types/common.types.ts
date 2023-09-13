type FieldErrorType = {
    error: string,
    field: string
}


export type BaseResponseType<D = object> = {
    resultCode: number,
    messages: string[],
    data: D,
    fieldsErrors?: FieldErrorType[]
}