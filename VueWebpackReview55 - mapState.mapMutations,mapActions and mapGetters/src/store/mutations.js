const mutations = {
    M_UPDATE_HOME(state,payload){
        state.data = payload.data;
        state.err = payload.err;
    }
}

export default mutations;