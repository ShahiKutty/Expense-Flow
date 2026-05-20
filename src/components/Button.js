import React from 'react'

function Button({ type, title, className, onClick }) {
  return (
    <div>
        <button type={type} className={className} onClick={onClick}>
                {
                    title
                }
            </button>
      
    </div>
  )
}

export default Button
