
let initState=[];

export default (state=initState,actions)=>{
     let needAdd=true;
    switch(actions.type){
    case 'BUY':{
       for(let i=0;i<state.length;i++){
         if(actions.data.id===state[i].id){
           needAdd=false;
           state[i].num+=1;
         }
       }
    if(needAdd){state.push(actions.data)}
        return state
    }
    case 'DELETE':{
      for(let i=0;i<state.length;i++){
        if(actions.data.id===state[i].id){
          state.splice(i,1)
        }
      }
      return state
    }
    case 'DELETE_SELECT':{
      for(let i=state.length;i>0;i--){
        if(state[i-1].select===true){
          state.splice(i-1,1)
        }
      }
      return state
    }
    case 'CHANGE_SELECT':{
      for(let i=0;i<state.length;i++){
        if(actions.data.id===state[i].id){
          state[i].select=actions.data.select;
        }
      }
      return state
    }
    case 'CHANGE_SELECT_ALL':{
      for(let i=0;i<state.length;i++){
          state[i].select=actions.data.select;
      }
      return state
    }
    case 'CHANGE_NUM':{
      for(let i=0;i<state.length;i++){
        if(actions.data.id===state[i].id){
          state[i].num=actions.data.num;
        }
      }
      return state
    }
    default:{
        return state;
    }
    }
};
