import { useState } from 'react'
import axios from 'axios'

const CommentForm = ({ pageId }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)

    try {
      const response = await axios.post('/api/comments', {
        pageId,
        name,
        content,
      })

      if (response.status === 200) {
        setSuccess(true)
        setName('')
        setContent('')
      }
    } catch (error) {
      setError('An error occurred while submitting your comment.')
    }
  }

  return (
    <div>
      <h2>Add a comment:</h2>
      {success ? (
        <p>Thanks for your comment!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">Comment:</label>
            <textarea
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  )
}

export default CommentForm
