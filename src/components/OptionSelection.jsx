import React from 'react'

function OptionSelection({ arrayItems ,selectOption }) {
  return (
    <div>
        <h2 className='heading'>React AI App</h2>
        <div className='grid-mian'>
        {arrayItems.map((item , index) => {
            return (
              <div className='grid-child' key={index} onClick={()=>selectOption(item.option)}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default OptionSelection