import React, { useContext } from 'react'
import { getArtists } from '../../services/api/getArtists'
import { ArtistsContext } from '../../services/contexts/ArtistsContext'
import { ArtistActions } from '../../services/reducers/ArtistsReducer'
import styles from './SearchField.module.scss'

const SearchField: React.FC = () => {
  const { dispatch } = useContext(ArtistsContext)
  let debounceTimeout: ReturnType<typeof setTimeout>

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const searchVal = e.currentTarget.value

    clearTimeout(debounceTimeout)

    if (searchVal) {
      debounceTimeout = setTimeout(async () => {
        const artists = await getArtists(searchVal);
        dispatch({ type: ArtistActions.ADD, payload: artists })
      }, 500);
    }
  }

  return (
    <div className={styles.searchField}>
      <div className={styles.inputContainer}>
        <svg height="24" role="img" width="24" viewBox="0 0 512 512">
          <path 
            fill="black"
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z">
          </path>
        </svg>
        <input type="text" onChange={handleChange} placeholder="Search for an artist..." />
      </div>
    </div>
  )
}

export default SearchField
