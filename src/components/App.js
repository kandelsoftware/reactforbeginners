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

    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }
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
                        {Object.keys(this.state.fishes).map((key) => (
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />

            </div >

        );
    };
};


export default App;