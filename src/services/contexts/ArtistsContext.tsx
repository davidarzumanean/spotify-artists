import React, { createContext, useReducer, useMemo } from 'react'
import { ArtistsReducer, ArtistActionDispatch } from '../reducers/ArtistsReducer'

interface IArtistsInterface {
  items?: []
}

export interface IArtistInterface {
  followers?: {
    href: string,
    total: number,
  },
  id?: string,
  name?: string,
  popularity?: string,
  images?: image[]
}

type image = {
  url: string,
  width: number,
  height: number,
}

type Props = {
  children: JSX.Element
}

interface IContextInterface {
  artists: IArtistsInterface;
  dispatch: (arg: ArtistActionDispatch) => void;
}

const initialArtistsVal: IArtistsInterface = {}

export const ArtistsContext = createContext<IContextInterface>({artists: initialArtistsVal, dispatch: (arg) => {}})

const ArtistsContextProvider = ({ children }: Props) => {
  const [artists, dispatch] = useReducer(ArtistsReducer, {})

  const value = useMemo(() => ({
    artists, dispatch
  }), [artists])

  return (
    <ArtistsContext.Provider value={value}>
      {children}
    </ArtistsContext.Provider>
  )
}
 
export default ArtistsContextProvider