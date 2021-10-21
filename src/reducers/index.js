const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            const event = {title: action.title, body: action.body}
            const length = state.length
            const id = length === 0 ? 1: state[length - 1].id + 1
            return [...state, {id, ...event}] //id: id ショートハンドで省略できる
        case 'DELETE_EVENT':

        case 'DELETE_ALL_EVENT':
            return []
        default:
            return state
    }
}

export default events