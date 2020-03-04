import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO } from '../actions/types';
import { DELETE_TODO } from '../actions/types';
import { COMPLETE_TODO,UPDATE_TODO } from '../actions/types';

const initialState = [
    {
        id: uuidv4(),
        todo: "rahma",
        classe:false
    },
    {
        id: uuidv4(),
        todo: "rahma1",
        classe:false
    },
    {
        id: uuidv4(),
        todo: "rahma2",
        classe:false
    },


]



const TodoReducres = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload)
            case DELETE_TODO:
            return state.filter(el=> el.id !==action.payload)
            case COMPLETE_TODO:
                return state.map(el=> el.id === action.payload ? {...el,classe : !el.classe} : el)
                case UPDATE_TODO:
                    return state.map(el=> el.id === action.payload.id ? {...el,todo : action.payload.x} : el)
        default: return state;

    }


}
export default TodoReducres;