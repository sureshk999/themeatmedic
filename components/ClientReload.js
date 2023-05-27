import { useEffect } from 'react'
import Router from 'next/router'

/**
 * Client-side complement to next-remote-watch
 * Re-triggers getStaticProps when watched mdx files change
 */
export const ClientReload = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const socket = new WebSocket('ws://localhost:3000') // Replace with your WebSocket server URL

      socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data)

        if (data.event === 'reload') {
          Router.replace(Router.asPath, undefined, {
            scroll: false,
          })
        }
      })
    } else {
      import('socket.io-client').then((module) => {
        const socket = module.io()

        socket.on('reload', (data) => {
          Router.replace(Router.asPath, undefined, {
            scroll: false,
          })
        })
      })
    }
  }, [])

  return null
}
