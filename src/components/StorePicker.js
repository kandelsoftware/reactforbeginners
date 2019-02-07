import React from 'react';

class StorePicker extends React.Component {

    render() {
        return (
            <form className="store-selector">
                <input type="text" required placeholder="Enter store " />
                <button type="summit">visit store</button>
            </form>

        );
    }


}

export default StorePicker