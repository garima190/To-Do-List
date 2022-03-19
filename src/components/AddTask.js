import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText]=useState('')
    const [day, setDay]=useState('')


    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text, day})
        setText('')
        setDay('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>To Do</label>
                <input type='text' placeholder='Enter To-Do'
                 value={text} onChange={(e)=>setText(e.target.value)}/>

            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type='text' placeholder='Enter Date & Time'
                value={day} onChange={(e)=>
                    setDay(e.target.value)} />
                
            </div>
            <input type='submit' value='Save To-Do' 
            className='btn btn-block' />
        </form>
    )
}
export default AddTask
