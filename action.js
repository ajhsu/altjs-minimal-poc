import alt from './alt';


class AppAction {

    DoSomeThing() {
        this.dispatch('something');
    }

}

module.exports = alt.createActions(AppAction)
