import React from 'react';
import ReusableListing from './components/ReusableListing';
import Modal from './Modal';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[],
            visible:3,
            visible2:3,
            url:'',
            Load:true,
            Load2:true,
            postLength:0,
            postTwoLength:0,
            isOpen:false
        }
    }
    componentDidMount(){
      var x = localStorage.getItem("length");
      console.log(x);
      this.setState({postLength:x});
      this.setState({postTwoLength:x});
    }

    loadMore = (oldValue) => {
        const newValue = oldValue + 3;
        console.log(newValue);
        if(newValue >= this.state.postLength){
            this.setState({
                Load:false
            })
        }
        this.setState({
            visible:newValue
        })
    }

    loadMoreTwo = (oldValue) => {
        const newValue = oldValue + 3;
        console.log(newValue);
        if(newValue >= this.state.postTwoLength){
            this.setState({
                Load2:false
            })
        }
        this.setState({
            visible2:newValue
        })
    }

    render(){
        
      return(
        <section className="container">
            <h1 className="text-center">
                <span className="w">Our</span> 
                <span className="text-indigo-600"> Posts</span>
                {this.state.isOpen ? 'hi' :"hello"}
            </h1>
            <br/><br/>
            
            <ReusableListing url="https://gorest.co.in/public-api/posts">
                {(data) => {
                    return data.slice(0,this.state.visible).map((value, index) => {
                        // return <li key={value.id}>{value.title}</li>
                        return (
                            <div className="col-md-4" key={value.id}>
                                <div className="card mb-4 content colour-1">
                                    <div className="card-body">
                                        <h2 className="f1">{value.title}</h2>
                                        <p className="p1">{value.body}</p>
                                    </div>
                                    
                                    <button className="View_profile mb-4 p-2" onClick={() => this.setState({isOpen:true})}>
                                        View Profile
                                    </button>
                                    <Modal open={this.state.isOpen} onClose={() => this.setState({isOpen:false})}>
                                        <div className="card-body">
                                            <h2 className="f1"><b>ID:</b> {value.id}</h2>
                                            <h2 className="f1"><b>UserId:</b> {value.user_id}</h2>
                                            <h2 className="f1"><b>created_at:</b> {value.created_at}</h2>
                                            <h2 className="f1"><b>updated_at:</b> {value.updated_at}</h2>
                                            <h2 className="f1"><b>Title:</b> {value.title}</h2>
                                            <p className="p1"><b>Body:</b> {value.body}</p>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        )
                    })
                }}
            </ReusableListing>

            {this.state.Load 
                ?
                <div className="col-md-12 text-center">
                    <button className="btn btn-primary" onClick={()=>{ this.loadMore(this.state.visible) }}>Load More</button>
                </div>
                :   
                <div className="text-red bg-danger text-center p-4">No More Posts data found</div>
            }
          
            <h1 className="text-center">
                <span className="w">Our</span> 
                <span className="text-indigo-600">Users</span>
            </h1>
            <br/> <br/> <br/>
            <ReusableListing url="https://gorest.co.in/public-api/users">
                {(data) => {
                return data.slice(0,this.state.visible2).map((value, index) => {
                    return (
                        <div className="col-md-4" key={value.id}>
                            <div className="card mb-4 content colour-2">
                                <h2 className="f1"><b>Name:</b> {value.name}</h2>
                                <p className="p1"><b>Name:</b> {value.email}</p>
                                <p className="p1"><b>Gender:</b> {value.gender}</p>
                                <p className="p1"><b>Status:</b> {value.status}</p>
                            </div>
                        </div>
                    )
                })
                }}
            </ReusableListing>
            {this.state.Load2 
                ?
                <div className="col-md-12 text-center">
                    <button className="btn btn-warning" onClick={()=>{ this.loadMoreTwo(this.state.visible2) }}>Load More</button>
                </div>
                :   
                <div className="text-red bg-danger text-center p-4">No More Users data found</div>
            }
        </section>
      )
    }
}