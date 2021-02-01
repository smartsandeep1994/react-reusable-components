import React from 'react';
import axios from 'axios';

export default class Fetch extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          content:[],
      }
    }
    componentDidMount(){
        const UserUrl = `${this.props.url}`;
        axios.get(UserUrl).
            then(result => {
            console.log(result.data.data);
                this.setState({ content: result.data.data });
                // this.setState({ postLength: result.data.data.length });
            })
            .catch((err) => {
                console.log(err);
            })
        }
    render(){
      return(
        <section className="row row-flex">
          {this.props.children(this.state.content)}
        </section>
      )
    }
}