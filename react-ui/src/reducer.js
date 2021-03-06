import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

export const uuid = createReducer('', {
  uuid: (state, action) => action.payload
})

export const users = createReducer({}, {
  setState: (state, action) => action.payload,
  updateState: (state, action) => ({ ...state, ...action.payload })
})

export const capturingImage = createReducer(false, {
  [actions.captureUserPicture]: () => true,
  [actions.updateUserPicture.pending]: () => false,
})

export const timerFrequency = createReducer(60, {
  [actions.setTimerFrequency]: (state, action) => action.payload
})

export const pictureFilter = createReducer(null, {
  [actions.setPictureFilter]: (state, action) => action.payload
})

export const emojiRain = createReducer({}, {
  addEmoji: (state, action) => ({
    ...state,
    [action.payload.emoji]: (state[action.payload.emoji] || 0) + action.payload.count
  })
})
