import React from 'react';
import RootStore from './RootStore.js'
import alt from './alt';
import UserAction from './UserAction';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let store = RootStore.getState();

        UserAction.DoSomeThing();

        return (
            <div>
                <h1> Hello {store.user.name}</h1>
                <h2> Hello {store.user.age}</h2>
            </div> 
        );
    }
}

export default AppContainer;