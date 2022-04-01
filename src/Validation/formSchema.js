import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(
            ['small', 'medium', 'large'],
            'You must choose at least one'
        ),
    pepperoni: yup.boolean(),
    onion:yup.boolean(),
    pineapple: yup.boolean(),
    mushroom: yup.boolean(),
    anchovies: yup.boolean(),
    specialInstructions: yup.string(),
});

export default formSchema;