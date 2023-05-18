import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
        //console.log("se esta displarando el reset ");
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
