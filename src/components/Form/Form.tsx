import React, { useState } from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}

interface FormComponentProps {
  fields: InputFieldProps[];
  onSubmit: (data: Record<string, string>) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className='flex flex-col items-end bg-white pt-[15px] pb-[22px] px-16 mb-[30px]' onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div className='flex items-center mb-2.5' key={index}>
          <label className='mr-2.5' htmlFor={field.name}>{field.label}:</label>
          <input className='py-2 px-2.5 text-[13px] font-medium w-[230px] rounded-[4px] bg-[#F5F5F5]'
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
          />
        </div>
      ))}
    </form>
  );
};

export default FormComponent;
