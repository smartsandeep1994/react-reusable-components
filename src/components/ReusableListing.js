import React from 'react';

export default class Fetch extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          content:[],
          postLength:'',
      }
    }
    componentDidMount(){
        const UserUrl = `${this.props.url}`;
        fetch(UserUrl)
        .then(function(response) {
            return response.json();
        })
        .then(ress=>{
            console.log(ress);
            console.log(ress.data);
            this.setState({ content: ress.data });
            this.setState({ postLength: ress.data.length });
            localStorage.setItem('length', JSON.stringify(ress.data.length))
        })
        .catch(err=>console.log(err));
    }
    render(){
      return(
        <section className="row row-flex">
          {this.props.children(this.state.content)}
        </section>
      )
    }
}
