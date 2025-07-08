import React, { useState } from 'react'
import data from './data'
import './accordion.css'
const Accordion = () => {
  const [val, setVal] = useState(null);
  const [enableMultiple , setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([])
  const handleSingleSelection = (id) =>{
    console.log(id);
    setVal(id===val?null: id )
    
  }


  const handleMultipleSelection  = (id) => {
    const cpyMultiple = [...multiple];
    const findIndexOf = cpyMultiple.indexOf(id);
    console.log(findIndexOf);
    if (findIndexOf === -1) {
      cpyMultiple.push(id)
    } else {
      cpyMultiple.splice(findIndexOf, 1);
    }
    setMultiple(cpyMultiple)
    
  }
  return (
    <div className='container'>
      <div 
      className="multi-selection-btn"
      onClick={()=> setEnableMultiple(!enableMultiple)}
      >
        Enable Multi Selection
      </div>
      <div className="queries">
        {data&& data.length >0?
          data.map((dataItem,i) => {
            return <div key={i} className='wrapper-queries'>
              <div
               className="ques-box"
                onClick={
                  enableMultiple
                  ?()=> handleMultipleSelection(dataItem.id)
                 : () => handleSingleSelection(dataItem.id)
                }
                >
                <div className="ques">{dataItem.question}</div>
              <span>+</span>
              </div>      
            {enableMultiple
            ? multiple.indexOf(dataItem.id) !== -1 &&(
              <div className='ans'> {dataItem.answer}</div>
            )
             :  dataItem.id === val&& <div className='ans'>{dataItem.answer}</div>
            }
            </div>
          })
          : <div>No Data Found</div>
        }
      </div>

    </div>
  )
}

export default Accordion