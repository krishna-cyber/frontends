import React from 'react'
import {useState} from 'react'

function workoutForm() {
    const[title,setTitle]= useState('');
    const[load,setLoad]= useState('');
    const[reps,setReps]= useState('');
    const[error,setError]=useState('');
    

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const workout ={title,load,reps};
        

        const response = await fetch('http://localhost:4000/api/workout',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = response.json();

        if(!response.ok){
            
        setError(json.error);
        }
        if(response.ok){
            setTitle('');
            setLoad('');
            setReps('');
            console.log(`new workout added`);
        }
    }

return (
    
        <form className='workout-form' onSubmit={handleSubmit}>
        <h3>Add a new Workout</h3>
        <label>Exercise Title:</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>


        <label>Load(in kg):</label>
        <input type= 'number' value={load} onChange={(e)=>setLoad(e.target.value)}/>

        <label>Reps:</label>
        <input type= 'number' value={reps} onChange={(e)=>setReps(e.target.value)}/>

        <button type='Submit'>Add Workout</button>
        {error && <div>{error}</div>}
        </form>



    )
}

export default workoutForm