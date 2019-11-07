import React from "react"
import s from "./Images/jotaros.jpg"
import p from "./Images/jotarop.jpg"

class Jotaro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: p
        }
    }
    changeImg = () => {
        if (this.state.img == p){
            this.setState({img: s})
        } else {
            this.setState({img: p})
        }
    }

    render() {
        return <img onClick={this.changeImg} src={this.state.img} alt={'big dumb'}/>
    }

}

export default Jotaro