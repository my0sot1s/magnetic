import React from 'react';//eslint-disable-line
import ReactDOM from 'react-dom';
import Root from './src/Root';//eslint-disable-line
/**
 *Create root App
 */
class App extends React.Component {

    /** ---render component---- */
    render() {
        return (
            <div>
                <Root />
            </div>
        );
    }
}
const root = document.getElementById('root');

ReactDOM.render(
    <App />,
    root
);
