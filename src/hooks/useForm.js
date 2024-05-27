import React, { useState } from 'react'
import { toast } from 'react-toastify';

const handleChange = ({ e, form, setForm }) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
};

const handleSubmit = ({ e, form, setForm }) => {
    e.preventDefault();
    toast.success('Form Submitted');
    console.log(form);
};

const useForm = () => {
    const [form, setForm] = useState({});

    return {
        form,
        handleChange: (e) => handleChange({ e, form, setForm }),
        handleSubmit: (e) => handleSubmit({ e, form, setForm }),
    }
}

export default useForm