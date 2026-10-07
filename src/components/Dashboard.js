import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const navigate = useNavigate()

  // Fake roadmaps — replaced with real data after backend
  const [roadmaps] = useState([
    {
      id: 1,
      title: 'Mathematics Final Exam',
      topics: 12,
      daysLeft: 23,
      createdAt: '2 days ago'
    },
    {
      id: 2,
      title: 'Physics Unit 3 Test',
      topics: 8,
      daysLeft: 10,
      createdAt: '5 days ago'
    }
  ])

  // Fake study rooms — replaced with real data after backend
  const [rooms] = useState([
    {
      id: 'room-001',
      name: 'CS Study Group',
      members: 4,
      status: 'active'
    },
    {
      id: 'room-002',
      name: 'Maths Revision',
      members: 2,
      status: 'active'
    }
  ])

  return (
    <div className="dashboard">

      {/* WELCOME ROW */}
      <div className="welcome-row">
        <div>
          <h1 className="welcome-heading">Welcome back, Rahul 👋</h1>
          <p className="welcome-date">What do you want to do today?</p>
        </div>
      </div>

      {/* TWO MAIN ACTION CARDS */}
      <div className="dash-grid">

        {/* Card 1 — AI Roadmap Generator */}
        <div className="dash-card">
          <div className="dash-card-icon">🤖</div>
          <div className="dash-card-title">AI Roadmap Generator</div>
          <p className="dash-card-desc">
            Upload your exam syllabus PDF and get an AI generated
            day by day study roadmap in seconds.
          </p>
          <button
            className="dash-card-btn"
            onClick={() => navigate('/upload')}
          >
            Upload Syllabus →
          </button>
        </div>

        {/* Card 2 — Virtual Study Rooms */}
        <div className="dash-card">
          <div className="dash-card-icon">👥</div>
          <div className="dash-card-title">Virtual Study Rooms</div>
          <p className="dash-card-desc">
            Join or create a real time study room with synchronized
            Pomodoro timer and shared whiteboard.
          </p>
          <button
            className="dash-card-btn"
            style={{ background: '#34d399', color: '#000' }}
            onClick={() => navigate('/rooms')}
          >
            Enter Rooms →
          </button>
        </div>

      </div>

      {/* YOUR ROADMAPS */}
      <div style={{ marginBottom: '40px' }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h2 className="tasks-heading">Your Roadmaps</h2>
          <button
            className="btn-add"
            onClick={() => navigate('/upload')}
          >
            + New
          </button>
        </div>

        {roadmaps.length === 0 ? (
          <p style={{ color: '#8b949e' }}>
            No roadmaps yet. Upload a syllabus to get started!
          </p>
        ) : (
          <div className="roadmap-list">
            {roadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="roadmap-item"
                onClick={() => navigate(`/roadmap/${roadmap.id}`)}
              >
                <div>
                  <div className="roadmap-item-title">
                    {roadmap.title}
                  </div>
                  <div className="roadmap-item-meta">
                    {roadmap.topics} topics •
                    {roadmap.daysLeft} days left •
                    Created {roadmap.createdAt}
                  </div>
                </div>
                <span className="roadmap-arrow">→</span>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ACTIVE STUDY ROOMS */}
      <div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h2 className="tasks-heading">Active Study Rooms</h2>
          <button
            className="btn-add"
            onClick={() => navigate('/rooms')}
          >
            + Create
          </button>
        </div>

        {rooms.length === 0 ? (
          <p style={{ color: '#8b949e' }}>
            No active rooms. Create one or join a friend's room!
          </p>
        ) : (
          rooms.map((room) => (
            <div key={room.id} className="room-item">
              <div className="room-item-left">
                <div className="room-dot"></div>
                <div>
                  <div className="room-item-title">{room.name}</div>
                  <div className="room-item-meta">
                    {room.members} members active
                  </div>
                </div>
              </div>
              <button
                className="btn-join"
                onClick={() => navigate(`/room/${room.id}`)}
              >
                Join →
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  )
}

export default Dashboard