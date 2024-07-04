import React, { useState } from 'react';

function WorkoutTracker() {
    const [exerciseTitle, setExerciseTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [workouts, setWorkouts] = useState([]); // new state to store added workouts
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newWorkout = {
        exerciseTitle,
        load,
        reps,
      };
      setWorkouts([...workouts, newWorkout]); // add new workout to the list
      setExerciseTitle(''); // clear input fields
      setLoad('');
      setReps('');
    };
  
    return (
      <div className="workout-tracker">
        <h1>Workout Tracker</h1>
        <form className='workout-tracker' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="exerciseTitle">Exercise Title:</label>
            <input
              type="text"
              id="exerciseTitle"
              value={exerciseTitle}
              onChange={(e) => setExerciseTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="load">Load (in kg):</label>
            <input
              type="number"
              id="load"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="reps">Number of Reps:</label>
            <input
              type="number"
              id="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <button type="submit">Add Workout</button>
        </form>
        <div className="workout-notes">
            <h2>my workout note for the day </h2>
          {workouts.map((workout, index) => (
            <div key={index} className="workout-note">
              <h3>{workout.exerciseTitle}</h3>
              <p>Load: {workout.load} kg</p>
              <p>Reps: {workout.reps}</p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default WorkoutTracker;