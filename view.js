import React from 'react';
import Store from './store.js'
import alt from './alt';
import action from './action';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let store = Store.getState();

        action.DoSomeThing();

        return (
            <div>
                <h1> Hello {store.user.name}</h1>
                <h2> Hello {store.user.age}</h2>
            </div> 
        );
    }
}

export default AppContainer;