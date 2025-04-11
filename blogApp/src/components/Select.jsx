import React, {useId} from 'react'

function Select({
    options=[],
    label,
    className='',
    ...props
},ref) {
    const id = useId();
  return (
    
    <div className='w-full '>
        {label && <label htmlFor={id} className=''>{label}</label>}
        <select 
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none
             focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
         >
            {options?.map((option)=>(<option key={option} value={option}>{option}</option>))}
         </select>
   
        </div>
  )
}

export default React.forwardRef(Select)

//I created a custom reusable Select component that wraps a normal HTML <select> element.

// This component uses forwardRef so that when a parent passes a ref, it gets attached to the native <select>.

// This lets the parent access or control the dropdown directly (e.g. using focus(), value, etc.).