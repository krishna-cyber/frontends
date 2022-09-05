import React from 'react'

import {useEffect, useState} from 'react'
import WorkoutForm from '../components/Workoutform';
function Home() {
  const [workouts, setWorkouts] = useState([]); // initialize state variable

  useEffect(() => {
    const fetchWorkouts = async ()=>{
      const response = await fetch('http://localhost:4000/api/workout');
      const data = await response.json();

      if(response.ok){
        setWorkouts(data);
      }
    }
    fetchWorkouts();
  }, []); // initialize useEffect
  return (
   <>
    <div className="home">
      <div className="workouts">
      
        {workouts && workouts.map((workout)=>{
          return(
            <div className="workout-card" key={workout._id}>
            <h3>{workout.title}</h3>
            <h4>Workout load(kg):<p>{workout.load}</p></h4>
            <h4>Workout reps : <p>{workout.reps}</p></h4>
            
            </div>
            
          )
        })}
      </div>
    </div>
    <WorkoutForm/>
    </>
  );
  
  
}

export default Home