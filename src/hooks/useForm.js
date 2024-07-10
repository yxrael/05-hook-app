import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ( {target} ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }  

    const onResetForm = () => {
        console.log(initialForm)
        setFormState( initialForm );
    }

    const onSubmitForm = () => {
        console.log( formState );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onSubmitForm
    }

}
