
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
      return{}
    }
    default:{
        return state;
    }
    }
};
