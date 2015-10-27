import alt from './alt';
import action from './action';

class AppStore {

    constructor() {

        this.bindActions(action);

        this.user = {
            name: 'john',
            age: 18
        };

    }

    onDoSomeThing() {
        console.log('you did something');
        this.user.age = 29;
    }

}

export default alt.createStore(AppStore);
