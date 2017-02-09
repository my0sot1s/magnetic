import React from 'react';//eslint-disable-line
import ReactDOM from 'react-dom';
import RootContainers from './src/rootContainers';//eslint-disable-line
/**
 *Create root App
 */
class App extends React.Component {
    /**
     *@param:props:default
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RootContainers />
            </div>
        );
    }
}
const root = document.getElementById('root');

ReactDOM.render(
    <App />,
    root
);
