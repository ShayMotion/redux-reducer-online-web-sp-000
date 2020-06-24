export function managePresents(state, action){
  let numberOfPresents = {numberOfPresents: 0};
   if (action.type === 'INCREASE_COUNT') {
    return {count: state.count + 1 };
  }
}
