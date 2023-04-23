import { useState } from 'react'
import axios from 'axios'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log(response)
      setState('Success')
      setEmail('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <div>
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">
        Get to notified on quality articles about frontend development and more sent to your inbox.
        I'll send you an email once a month, no spam.
      </p>
      <form onSubmit={subscribe}>
        <div>
          <div className="form-input">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="What's your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sub-form-btn">
            <button
              disabled={state === 'Loading'}
              type="submit"
              className="form-btn"
              onClick={subscribe}
            >
              Subscribe
            </button>
          </div>

          <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
            <button
              className={`w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ${
                subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
              } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
              type="submit"
              disabled={subscribed}
            >
              {subscribed ? 'Thank you!' : 'Sign up'}
            </button>
          </div>
        </div>
        {state === 'Error' && <div className="error-state">{errorMsg}</div>}
        {state === 'Success' && <div className="text-xl">Success! 🎉 You are now subscribed.!</div>}
      </form>
    </div>
  )
}

export default Newsletter
