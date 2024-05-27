import React, { useState } from 'react'
import { toast } from 'react-toastify';

const handleChange = ({ e, form, setForm }) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
};


const useForm = () => {
    const [form, setForm] = useState({});

    return {
        form,
        handleChange: (e) => handleChange({ e, form, setForm }),
    }
}

export default useForm