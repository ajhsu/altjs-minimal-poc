import alt from './alt';

class UserAction {

    DoSomeThing() {
        this.dispatch('something');
    }

}

module.exports = alt.createActions(UserAction)
