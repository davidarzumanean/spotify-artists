import CookieManager from '../../helpers/cookie-manager'
const token = CookieManager.getItem('token')

export const getArtists = async (search: string) => {
  const res = await fetch(`https://api.spotify.com/v1/search?type=artist&q=${search}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()

  return data.artists
}
