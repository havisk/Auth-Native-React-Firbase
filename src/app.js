import React, {Component} from 'react';
import { View, Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAk_JBcPs-JzwtEvrJkDdd4_MIy1TLa1h8",
            authDomain: "authentication-b5dcb.firebaseapp.com",
            databaseURL: "https://authentication-b5dcb.firebaseio.com",
            projectId: "authentication-b5dcb",
            storageBucket: "authentication-b5dcb.appspot.com",
            messagingSenderId: "466123149023"
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <Text>
                    An App
                </Text>
            </View>
        );
    }
}

export default App;