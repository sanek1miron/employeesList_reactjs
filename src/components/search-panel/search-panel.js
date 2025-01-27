import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearsh = (e) => {
        const term = e.target.value;
        this.setState({term:term});
        this.props.onUpdateSearsh(term);
    }
    // функция onUpdateSearsh  с таким же названием как в Арр, но это разные ф-и


    render() {
        return (
            <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onUpdateSearsh}/>
        )
    }    
}

export default SearchPanel;