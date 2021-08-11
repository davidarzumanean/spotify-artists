export type ArtistActionDispatch = {
  type: string,
  payload: {},
}

export enum ArtistActions {
  ADD = 'ADD_ARTISTS'
}

export const ArtistsReducer = (state: {}, action: ArtistActionDispatch) => {
  switch (action.type) {
    case ArtistActions.ADD:
      return {
        ...action.payload
      }

    default:
      return state
  }
}