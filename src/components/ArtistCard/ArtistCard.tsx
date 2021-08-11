import React from 'react'
import { IArtistInterface } from '../../services/contexts/ArtistsContext'
import Rating from '../Rating/Rating'
import styles from './ArtistCard.module.scss'

type CardProps = {
  artist: IArtistInterface,
  onClick?: (artist: IArtistInterface) => void
}

const ArtistCard: React.FC<CardProps> = ({ artist = {}, onClick = () => null }) => {
  const getBannerUrl = (artist: IArtistInterface): string => {
    return artist?.images?.[1]?.url || ''
  }

  const getFollowersCount = (artist: IArtistInterface): string => {
    return artist?.followers?.total?.toLocaleString() || ''
  }

  return (
    <div className={styles.artistCard} key={artist.id} onClick={() => onClick(artist)}>
      <div className={styles.artistBanner}>
        <img src={getBannerUrl(artist)} alt="banner" />
      </div>
      <div className={styles.artistName}>
        {artist.name}
      </div>
      <div className={styles.followersCount}>
        {getFollowersCount(artist)} followers
      </div>
      <div className={styles.rating}>
        <Rating rating={artist.popularity} />
      </div>
    </div>
  )
}

export default ArtistCard
