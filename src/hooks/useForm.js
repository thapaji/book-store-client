import React, { useState } from 'react'
import { toast } from 'react-toastify';

const handleChange = ({ e, form, setForm }) => {
    let { checked, name, value } = e.target;
    if (name === 'status') {
        value = checked ? 'active' : 'inactive';
    }
    setForm({ ...form, [name]: value });
};


const useForm = () => {
    const [form, setForm] = useState({});

    return {
        form,
        handleChange: (e) => handleChange({ e, form, setForm }),
        setForm
    }
}

export default useForm