import React, { useState } from 'react'

function Notes() {

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: 'Computer Science',
      notes: [
        { id: 101, title: 'React Hooks', content: 'useState stores data inside a component.' },
        { id: 102, title: 'JavaScript Arrays', content: 'map, filter, find are higher order functions.' }
      ]
    },
    {
      id: 2,
      name: 'Mathematics',
      notes: [
        { id: 201, title: 'Integration', content: 'Integration of x^n = x^(n+1)/(n+1) + C.' }
      ]
    }
  ])

  const [selectedSubjectId, setSelectedSubjectId] = useState(null)
  const [selectedNoteId, setSelectedNoteId] = useState(null)
  const [addingSubject, setAddingSubject] = useState(false)
  const [newSubjectName, setNewSubjectName] = useState('')

  // Get selected subject and note
  const selectedSubject = subjects.find((s) => s.id === selectedSubjectId)
  const selectedNote = selectedSubject
    ? selectedSubject.notes.find((n) => n.id === selectedNoteId)
    : null

  // ── ADD SUBJECT ──
  function addSubject() {
    if (newSubjectName.trim() === '') return
    const newSubject = {
      id: Date.now(),
      name: newSubjectName,
      notes: []
    }
    setSubjects([...subjects, newSubject])
    setNewSubjectName('')
    setAddingSubject(false)
    setSelectedSubjectId(newSubject.id)
    setSelectedNoteId(null)
  }

  // ── DELETE SUBJECT ──
  function deleteSubject(subjectId) {
    setSubjects(subjects.filter((subject) => subject.id !== subjectId))
    setSelectedSubjectId(null)
    setSelectedNoteId(null)
  }

  // ── ADD NOTE ──
  function addNote() {
    if (!selectedSubjectId) return
    const newNote = {
      id: Date.now(),
      title: '',
      content: ''
    }
    const updatedSubjects = subjects.map((subject) => {
      if (subject.id === selectedSubjectId) {
        return { ...subject, notes: [...subject.notes, newNote] }
      }
      return subject
    })
    setSubjects(updatedSubjects)
    setSelectedNoteId(newNote.id)
  }

  // ── UPDATE TITLE ──
  function updateTitle(newTitle) {
    setSubjects(subjects.map((subject) => {
      if (subject.id === selectedSubjectId) {
        return {
          ...subject,
          notes: subject.notes.map((note) => {
            if (note.id === selectedNoteId) {
              return { ...note, title: newTitle }
            }
            return note
          })
        }
      }
      return subject
    }))
  }

  // ── UPDATE CONTENT ──
  function updateContent(newContent) {
    setSubjects(subjects.map((subject) => {
      if (subject.id === selectedSubjectId) {
        return {
          ...subject,
          notes: subject.notes.map((note) => {
            if (note.id === selectedNoteId) {
              return { ...note, content: newContent }
            }
            return note
          })
        }
      }
      return subject
    }))
  }

  // ── DELETE NOTE ──
  function deleteNote(noteId) {
    setSubjects(subjects.map((subject) => {
      if (subject.id === selectedSubjectId) {
        return {
          ...subject,
          notes: subject.notes.filter((note) => note.id !== noteId)
        }
      }
      return subject
    }))
    setSelectedNoteId(null)
  }

  return (
    <div className="notes-layout">

      {/* LEFT SIDEBAR */}
      <div className="notes-sidebar">

        <p className="notes-sidebar-title">My Subjects</p>

        {subjects.map((subject) => (
          <div key={subject.id}>

            {/* Subject row */}
            <div
              className={`subject-item ${selectedSubjectId === subject.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedSubjectId(subject.id)
                setSelectedNoteId(null)
              }}
            >
              <span>📚 {subject.name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '11px', color: '#8b949e' }}>
                  {subject.notes.length}
                </span>
                {selectedSubjectId === subject.id && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteSubject(subject.id)
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#8b949e',
                      cursor: 'pointer',
                      fontSize: '12px',
                      padding: '2px 4px',
                      borderRadius: '4px'
                    }}
                    title="Delete subject"
                  >
                    🗑
                  </button>
                )}
              </div>
            </div>

            {/* Notes under selected subject */}
            {selectedSubjectId === subject.id && (
              <div>
                {subject.notes.map((note) => (
                  <div
                    key={note.id}
                    className={`note-item-sidebar ${selectedNoteId === note.id ? 'active' : ''}`}
                    onClick={() => setSelectedNoteId(note.id)}
                  >
                    📄 {note.title === '' ? 'Untitled' : note.title}
                  </div>
                ))}
                <button className="sidebar-add-btn" onClick={addNote}>
                  + Add note
                </button>
              </div>
            )}

          </div>
        ))}

        {/* Add subject */}
        {addingSubject ? (
          <div style={{ marginTop: '12px', padding: '0 4px' }}>
            <input
              className="sidebar-input"
              placeholder="Subject name..."
              value={newSubjectName}
              onChange={(e) => setNewSubjectName(e.target.value)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') addSubject()
                if (e.key === 'Escape') setAddingSubject(false)
              }}
            />
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn-add"
                style={{ flex: 1, fontSize: '12px', padding: '6px' }}
                onClick={addSubject}
              >
                Add
              </button>
              <button
                className="btn-delete"
                style={{ fontSize: '12px', padding: '6px 10px' }}
                onClick={() => setAddingSubject(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            className="sidebar-add-btn"
            style={{ marginTop: '12px', color: '#4f8ef7' }}
            onClick={() => setAddingSubject(true)}
          >
            + Add subject
          </button>
        )}

      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="notes-content">

        {!selectedSubjectId && (
          <div className="notes-empty">
            <h2>Select a subject</h2>
            <p>Choose a subject from the sidebar to see your notes</p>
          </div>
        )}

        {selectedSubjectId && !selectedNoteId && (
          <div className="notes-empty">
            <h2>{selectedSubject ? selectedSubject.name : ''}</h2>
            <p>Select a note or create a new one</p>
            <button className="btn-add" onClick={addNote}>
              + New Note
            </button>
          </div>
        )}

        {selectedNote && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '16px'
            }}>
              <button
                className="btn-delete"
                onClick={() => deleteNote(selectedNote.id)}
                style={{ fontSize: '13px', padding: '6px 12px' }}
              >
                🗑 Delete note
              </button>
            </div>

            <input
              className="note-title-input"
              value={selectedNote.title}
              onChange={(e) => updateTitle(e.target.value)}
              placeholder="Give your note a title..."
            />

            <div style={{
              height: '1px',
              background: '#30363d',
              marginBottom: '24px'
            }}></div>

            <textarea
              className="note-content-input"
              value={selectedNote.content}
              onChange={(e) => updateContent(e.target.value)}
              placeholder="Start writing your note here..."
            />
          </div>
        )}

      </div>

    </div>
  )
}

export default Notes