import alt from './alt';
import UserAction from './UserAction';

class UserStore {

    constructor() {

        this.bindActions(UserAction);

        this.storage = {
            name: 'john',
            age: 18
        };

    }

    onDoSomeThing() {
        console.log('you changed age of user');
        this.storage.age = 29;
    }

}

export default alt.createStore(UserStore);
