import React from "react"

class Jotaro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '../Images/jotaros.jpg'
        }
    }

    render() {
        return <img src={this.state.img}/>
    }

}

export default Jotaro