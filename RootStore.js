import alt from './alt';
import UserStore from './UserStore';

class RootStore {

    constructor() {
        this.user = UserStore.getState().storage;
    }
}

export default alt.createStore(RootStore);
