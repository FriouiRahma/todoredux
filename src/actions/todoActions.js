import{ADD_TODO} from './types';
import{DELETE_TODO} from './types';
import{COMPLETE_TODO,UPDATE_TODO} from './types';


export const Todoaction =(newTodo)=>{

    return{
      type:ADD_TODO,
      payload:newTodo

    };
};

export const Deletetodo =(id)=>{

  return{
    type:DELETE_TODO,
    payload:id

  };
};

export const Complete =(id)=>{

  return{
    type:COMPLETE_TODO,
    payload:id

  };
};
export const Edit =(x,id)=>{

  return{
    type:UPDATE_TODO,
    payload:{x,id}

  };
};












