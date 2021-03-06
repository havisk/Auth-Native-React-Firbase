import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Config from '../hidden/Config';


class App extends Component {

    state= {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp(Config);

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true});
            }else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent () {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <View style={{height:45}} >
                        <Button
                            onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>
        }

    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;