import _ from 'lodash';
import React, {Component} from 'react';
import Display from './components/display';
import MyButton from './components/plus_button';


import ReactDOM from 'react-dom';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            intervalid:0
        };
    }
    change(value) {
        let q = this.state.counter;
        if(this.state.intervalid !== 0)
            clearInterval((this.state.intervalid));
        if (value === '+')
        {
            if (q === 100)
                this.setState({counter: 0});
            else
                this.setState({counter: q + 1});
        }
        else if(value === '-')
        {
            if (q === 0)
                this.setState({counter: 100});
            else
                this.setState({counter: q - 1});
        }
        else if(value === '>>')
        {
            if(this.state.counter < 100)
            {
                this.state.intervalid=setInterval(()=>{this.setState({counter:this.state.counter+1});},1000);
            }
        }
        else{
            if(this.state.counter>0){
                this.state.intervalid=setInterval(()=>{this.setState({counter:this.state.counter-1});},1000);
            }
        }
    }
    render() {
        return (
            <div>
                <Display val={this.state.counter}/>
                <MyButton onclick={(term) => {this.change(term)}}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));