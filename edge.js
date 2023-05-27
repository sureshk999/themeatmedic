export default async function handler(req) {
  return new Response(
    JSON.stringify({
      message: 'Hello, world!',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=60, stale-while-revalidate=60',
      },
    }
  )
}

export const config = {
  runtime: 'edge',
}
