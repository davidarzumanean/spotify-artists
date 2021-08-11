import React from 'react'
import useToken from '../../hooks/useToken'
import LoginButton from '../LoginButton/LoginButton'
import SearchField from '../SearchField/SearchField'
import SearchResults from '../SearchResults/SearchResults'
import styles from './SearchPage.module.scss'

const SearchPage: React.FC = () => {
  const token = useToken()

  return (
    <div className={styles.searchPage}>
      {token ?
        <>
          <SearchField />
          <SearchResults />
        </>
        :
        <LoginButton />
      }
    </div>
  )
}

export default SearchPage
