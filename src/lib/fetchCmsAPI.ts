const API_URL = 'https://graphql.datocms.com/'
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN

export async function fetchCmsAPI(
  query: string,
  { variables }: { variables?: Record<string, any> } = {},
) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}
