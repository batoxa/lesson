export const required = (value) => {
    return (
        value ? undefined : 'Required'

    )
};

// export const maxLength = (max) = (value) => {
//     return (
//         value && value.length > max ?
//         `Must be ${max} characters or less` :
//         undefined
//     )
// };

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined