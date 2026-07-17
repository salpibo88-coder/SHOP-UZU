import React, { ChangeEvent } from 'react'

interface InputProps {
  name: string;
  classname?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, classname = "", placeholder, value, onChange }: InputProps) {
  return (
    <div className=''>
      <h1 className='mb-2 text-xs text-gray-400'>{name}</h1>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border-2 p-2 rounded-lg text-sm border-gray-400 w-60 ${classname}`}
      />
    </div>
  )
}
