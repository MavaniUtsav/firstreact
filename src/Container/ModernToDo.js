import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ModernToDo(props) {
    const [message, setMessage] = useState('');
    const [unChecked, setUnchecked] = useState([]);
    const [checked, setChecked] = useState([])

    const arr = []

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        // event.preventDefault()
        console.log(message);
        if (message !== '') {
            arr.push(message)
        }
        console.log(arr);
    }

    const handleCheck = (e, value) => {
        if (e.target.checked) {
            checked.push(value)
            let filterData = unChecked.filter((v) => v !== value)
            setUnchecked(filterData);
            console.log(unChecked);

            e.target.checked = false;
        }
    }

    return (
        <>
            <div className='main'>
                <div className='navbar'>
                    <form id='addtask' onSubmit={() => handleSubmit()} action='#'>
                        <input
                            type="text"
                            placeholder='add task title' id='inputtask'
                            onChange={handleChange}
                            value={message}
                        />
                        <button className='addbtn'>+add Task</button>
                    </form>
                    <div id='filter' className='filter2'>
                        <select name="dropdown" id='dropdown' className='dropdown2'>
                            <option value="">-- Select --</option>
                            <option value="atoz">show all tasks</option>
                            <option value="ztoa">show only completed tasks</option>
                            <option value="hightolow">show only uncompleted tasks</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className='displayData'>
                <div className='unchecked'>
                    <h2>Unchecked</h2>
                    {
                        // unChecked.map((v) => {
                        //     return (
                        //         <div>
                        //             <input type='checkbox' name={v} value={v} onClick={(e) => handleCheck(e,e.target.value)} />
                        //             <span>{v}</span>
                        //             <EditIcon style={{color: 'blue'}}/>
                        //             <DeleteIcon style={{color: 'red'}}/>
                        //         </div>
                        //     )
                        // })
                        console.log(unChecked)
                    }
                </div>
                <div className='checked'>
                    <h2>Checked</h2>
                    {
                        checked.map((v) => {
                            return (
                                <div>
                                    <input type='checkbox' name={v} value={v} checked/>
                                    <span>{v}</span>    
                                    <EditIcon style={{color: 'blue'}}/>
                                    <DeleteIcon style={{color: 'red'}}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );

}

export default ModernToDo;