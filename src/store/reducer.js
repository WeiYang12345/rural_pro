import { combineReducers } from 'redux'

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './action.js'

const { SHOW_ALL } = VisibilityFilters
const init = { a: 1}
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//     console.log(action)
//       return [
//         ...state,
//         {
//           text: action.text,
//           // completed: false
//         }
//       ]
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }
function todos(state = init, action) {
  switch (action.type) {
    case ADD_TODO:
    console.log(action)
      return { a:action.text}
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
})

export default todoApp