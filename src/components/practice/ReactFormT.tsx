import React from "react";
import { useForm } from "react-hook-form";
//TODO
const ReactFormT = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <></>
    );
};
export default ReactFormT;