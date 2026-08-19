import React, { useState } from 'react'

function Dashboard() {

  // Tasks stored as array of objects
  // Each task has id, title, subject, done
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete React tutorial', subject: 'CS', done: false },
    { id: 2, title: 'Solve 5 maths problems', subject: 'Math', done: false },
    { id: 3, title: 'Read chapter 4', subject: 'Phy', done: true },
  ])

  // State for the new task input field
  const [newTask, setNewTask] = useState('')

  // State for subject selection
  const [newSubject, setNewSubject] = useState('CS')

  // ── ADD TASK ──────────────────────────
  // Creates a new task object and adds
  // it to the tasks array
  function addTask() {

    // Do not add empty task
    if (newTask === '') return

    // Create new task object
    const task = {
      id: Date.now(), // unique id using timestamp
      title: newTask,
      subject: newSubject,
      done: false
    }

    // Add new task to existing array
    // ...tasks = spread operator = copy all existing tasks
    // then add the new task at the end
    setTasks([...tasks, task])

    // Clear the input field after adding
    setNewTask('')
  }

  // ── TOGGLE DONE ───────────────────────
  // Marks a task as done or not done
  // id = which task to toggle
  function toggleDone(id) {

    // map goes through every task
    // if task.id matches → flip done value
    // if task.id does not match → keep task as is
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done }
        // ...task = copy all task properties
        // done: !task.done = flip true to false or false to true
      }
      return task
    }))
  }

  // ── DELETE TASK ───────────────────────
  // Removes a task from the array
  function deleteTask(id) {

    // filter keeps only tasks where id does NOT match
    // the task with matching id is removed
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="dashboard">

      {/* WELCOME ROW */}
      <div className="welcome-row">
        <div>
          <h1 className="welcome-heading">Welcome back, Rahul 👋</h1>
          <p className="welcome-date">Let's get things done today</p>
        </div>
      </div>

      {/* STATS ROW */}
      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-label">Tasks Done</p>
          {/*
            filter counts how many tasks have done: true
            .length gives the count
            This updates automatically when tasks change
          */}
          <p className="stat-number">
            {tasks.filter((task) => task.done).length}
          </p>
          <p className="stat-sub">completed</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Pending</p>
          <p className="stat-number">
            {tasks.filter((task) => !task.done).length}
          </p>
          <p className="stat-sub">remaining</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Total Tasks</p>
          <p className="stat-number">{tasks.length}</p>
          <p className="stat-sub">this session</p>
        </div>

      </div>

      {/* ADD TASK ROW */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>

        {/* Task input */}
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            flex: 1,
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '10px 14px',
            color: '#ffffff',
            fontSize: '14px',
            outline: 'none'
          }}
        />

        {/* Subject selector */}
        <select
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '10px 14px',
            color: '#ffffff',
            fontSize: '14px',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="CS">CS</option>
          <option value="Math">Math</option>
          <option value="Phy">Phy</option>
          <option value="Other">Other</option>
        </select>

        {/* Add button */}
        <button className="btn-add" onClick={addTask}>
          + Add Task
        </button>

      </div>

      {/* TASK LIST */}
      <h2 className="tasks-heading">Today's Tasks</h2>

      <div className="task-list">

        {/*
          map renders one task-item div for each task
          Each task shows checkbox, title, subject tag, delete button
        */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.done ? 'done' : ''}`}
          >

            {/* Checkbox — clicking toggles done state */}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task.id)}
            />

            {/* Task title */}
            <label style={{
              flex: 1,
              textDecoration: task.done ? 'line-through' : 'none',
              color: task.done ? '#8b949e' : '#ffffff'
            }}>
              {task.title}
            </label>

            {/* Subject tag */}
            <span className={`tag tag-${task.subject.toLowerCase()}`}>
              {task.subject}
            </span>

            {/* Delete button */}
            <button
              className="btn-delete"
              onClick={() => deleteTask(task.id)}
            >
              ✕
            </button>

          </div>
        ))}

      </div>

      {/* Empty state — shows when no tasks */}
      {tasks.length === 0 && (
        <p style={{ color: '#8b949e', textAlign: 'center', marginTop: '32px' }}>
          No tasks yet. Add one above!
        </p>
      )}

    </div>
  )
}

export default Dashboard