import React from 'react';
import Response from './elements/index.jsx';
import { getRandomColor } from './elements/randomColor';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentTime:new Date().toLocaleTimeString(),
            temperture: 0,
            style: {
                backgroundColor: '',
            },
            size: "24px"
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => this.setState({currentTime: new Date().toLocaleTimeString()}), 1000);
    }

    componentWillUnmount(){
       clearInterval(this.timer);
    }

    OnIncr = () => {
        this.setState({temperture: this.state.temperture + 1})
    }

    OnDecr = () => {
        this.setState({temperture: this.state.temperture - 1})
    }

    handleChangeBackground = () => {
        this.setState({style:{backgroundColor: getRandomColor()}});
    }

    handleChangeSize = () => {
        let size = Math.floor(Math.random() * 40);
        this.setState({size:`${size}px`})
    }

    render(){
        return <React.Fragment>
                <h1>hello, {this.props.name}</h1>
                <div>its {this.state.currentTime}</div>
                <div>Current temperature: {this.state.temperture}</div>
                <button onClick={this.OnIncr}>увеличить</button>
                <button onClick={this.OnDecr}>уменьшить</button>
                <Response isSuccess={true} style={this.state.style} size={this.state.size}/>
                <button onClick={this.handleChangeBackground}>Изменить фон</button>
                <button onClick={this.handleChangeSize}>Изменить размер</button>
            </React.Fragment>
    }

}
export default App;