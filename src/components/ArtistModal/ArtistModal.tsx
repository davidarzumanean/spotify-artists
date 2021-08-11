import React from 'react'
import { IArtistInterface } from '../../services/contexts/ArtistsContext'
import ArtistCard from '../ArtistCard/ArtistCard'
import styles from './ArtistModal.module.scss'

type ModalProps = {
  artist: IArtistInterface
  onClose?: () => void
}

const ArtistModal: React.FC<ModalProps> = ({ artist, onClose = () => null }) => {
  return (
    <div className={styles.modalMask} onClick={onClose}>
      <div className={styles.modalContent}>
        <ArtistCard artist={artist} />
      </div>
    </div>
  )
}

export default ArtistModal
