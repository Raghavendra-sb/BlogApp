import React, {useId} from 'react'


const Input = React.forwardRef( function Input({//It lets the parent component pass a ref all the
//  way down to the actual <input> element — not the <Input /> component wrapper.
    label,
    type = "text",
    className = "",
    ...props
}, ref){//ref lets parent components directly access this <input />. 
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input