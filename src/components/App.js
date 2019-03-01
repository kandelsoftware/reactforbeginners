import React from 'react';
import Header from './container/Header';
import Inventory from './container/Inventory';
import Order from './container/Order';
import Fish from './container/Fish';

import sampleFishes from '../sample-fishes'
class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) => {
        const fishes = { ...this.state.fishes }
        fishes[`fish${Date.now()}`] = fish;

        this.setState({
            fishes
        })
    };
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes,
        });

    }

    render() {
        return (
            <div className="catch-of-the-day" >
                <div className="menu" >
                    <Header tagline="Fresh seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (<Fish key={key} details={this.state.fishes[key]} />
                        ))}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />

            </div >

        );
    };
};

export default App;