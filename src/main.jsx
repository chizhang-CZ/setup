import React from 'react';
import ReactDom from 'react-dom';
import css from '../assets/scss/setup.scss';

class SetupApp extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(<div> Hello world </div>);
    }
}

ReactDom.render(<SetupApp />, document.getElementById('setupApp'));
