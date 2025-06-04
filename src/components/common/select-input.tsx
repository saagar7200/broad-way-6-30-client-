/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Select from 'react-select'


interface IProps {
  placeholder?:string;
  options:{label:string;value:string}[],
  onChange:any
  value?:any
  error?:string
}

const SelectInput:React.FC<IProps> = ({placeholder,options,onChange,error}) => (
  <div>
    <Select 
  styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? '#2B7FFF'  :  error ? "#FB2C36" :   '#2B7FFF',
    }),
    input:(styles)=>({
        ...styles,
        padding:'8px'
    }),
    
  }}
  
  onChange={onChange}  placeholder={placeholder ?? 'Select...'} options={options} />
  
  {error && <p className='text-xs text-red-500 mt-1'>{error}</p>}

  </div>
)

export default SelectInput