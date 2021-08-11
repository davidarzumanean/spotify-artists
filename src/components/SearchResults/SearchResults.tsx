import React, { useContext, useState } from 'react'
import { ArtistsContext, IArtistInterface } from '../../services/contexts/ArtistsContext'
import ArtistCard from '../ArtistCard/ArtistCard'
import ArtistModal from '../ArtistModal/ArtistModal'
import styles from './SearchResults.module.scss'

const SearchResults: React.FC = () => {
  const { artists } = useContext(ArtistsContext)
  const [selectedArtist, setSelectedArtist] = useState<{} | null>(null)

  const handleClick = (artist: IArtistInterface) => {
    setSelectedArtist(artist)
  }

  const handleModalClose = () => {
    setSelectedArtist(null)
  }

  return (
    <div className={styles.searchResults}>
      {artists?.items?.map((artist: IArtistInterface) => (
        <ArtistCard key={artist.id} artist={artist} onClick={handleClick} />
      ))}

      {selectedArtist ? <ArtistModal artist={selectedArtist} onClose={handleModalClose} /> : null}
    </div>
  )
}

export default SearchResults
