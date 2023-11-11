import React, { Component } from 'react';
import SliderBoard from '../components/Sliderbord';
import ContentView from '../components/Contentview';

class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 'Home',
        };
    }

    handleSidebarItemClick = (view) => {
        this.setState({ currentView: view });
    }

    render() {
        return (
            <div className="flex">
                <SliderBoard onSidebarItemClick={this.handleSidebarItemClick} />
                <ContentView currentView={this.state.currentView} />
            </div>
        );
    }
}

export default Home2;