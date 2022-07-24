import './style/App.css';
import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    state = {lat: null, errorMessage : ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // *IMPORTANT* To update our state object, we called setState !!!!!
                this.setState({lat : position.coords.latitude})
            },
            (err) => {
                this.setState({
                    errorMessage : err.message
                })
            }
        );
    }

    componentDidUpdate(){
        console.log('Component updated, it re rendered!!!');
    }

    renderContent() {
        if(this.state.errorMessage != '' && this.state.lat == null){
            return <div>Something went wrong : {this.state.errorMessage}</div>
        }

        if(this.state.errorMessage == '' && this.state.lat !== null){
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        }
        return <Spinner message = "Please accept location request!!!"/>
    }
    //React says we have to define render!!
    render(){
        return <div className='border red'>
            {this.renderContent()}
        </div>
    }
}


ReactDom.render(<App/>, document.querySelector('#root'));