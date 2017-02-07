import { appInitFinished } from '../actions'

const app = (state = { initialized: false }, action) => {
  if (action.type === 'APP_INIT_FINISHED') {
    return {
      ...state,
      initialized: true
    }
  } else {
    return state
  }
}

export default app
