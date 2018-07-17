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
        let size = parseInt(this.state.size.replace(/\D/g,''));
        this.setState({size: `${size + 1}px`});
    }

    OnDecr = () => {
        let size = parseInt(this.state.size.replace(/\D/g,''));
        this.setState({size: `${size - 1}px`});
    }

    handleChangeBackground = () => {
        this.setState({style:{backgroundColor: getRandomColor()}});
    }

    handleChangeSize = () => {
        let size = Math.floor(Math.random() * 40);
        this.setState({size:`${size}px`})
    }

    onChangeInput = (e) => {
        this.setState({size: `${e.target.value}px`})
    }

    alertSize = () => {
        alert(`size is ${this.state.size}`)
    }

    render(){
        return <React.Fragment>
                <h1>hello, {this.props.name}</h1>
                <div>its {this.state.currentTime}</div>
                <div>Current siz: {this.state.size}</div>
                <button onClick={this.OnIncr}>увеличить размер</button>
                <button onClick={this.OnDecr}>уменьшить размер</button>
                <Response isSuccess={true} style={this.state.style} size={this.state.size}/>
                <button onClick={this.handleChangeBackground}>Изменить фон</button>
                <button onClick={this.handleChangeSize}>Изменить размер</button>
                <input type='number' onChange={this.onChangeInput}/>
                <button onClick={this.alertSize}>show size!</button>
            </React.Fragment>
    }

}
export default App;