import React from 'react';
import Fetch from './components/Fetch';
import ReusableListing from './components/ReusableListing';

export default class Apps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[],
            visible:3,
            visible2:3,
            url:'',
            Load:true,
            Load2:true,
            postLength:20,
            postTwoLength:20
        }
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
            </h1>
            <br/><br/>
            
            <ReusableListing url="https://gorest.co.in/public-api/posts">
                {(data) => {
                    // {this.setState({ posts: data })}
                    return data.slice(0,this.state.visible).map((value, index) => {
                        // return <li key={value.id}>{value.title}</li>
                        return (
                            <div className="col-md-4" key={value.id}>
                                <div className="card mb-4 content colour-1">
                                    <h2 className="f1">{value.title}</h2>
                                    <p className="p1">{value.body}</p>
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