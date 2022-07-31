export const validateCommentForm = (values) => {
    const errors = {};
    // Rating Validation
    if (!values.rating) {
        errors.rating = 'Required';
    } 
    // Author Validation
    /* if (!values.author) {
        errors.author = 'Required';
    } */ 
    if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters';
    } else if (values.author.length > 15) {
        errors.author = 'Must be 15 characters or less';
    }

    return errors;
}

