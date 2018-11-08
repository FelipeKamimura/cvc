import React, {Component} from 'react';
import './home.css';

export default class Home extends Component{
    homeCardReleases ={
        name: 'Felipe Kamimura',
        text: 'Manage releases',
        action: () => alert('releases Clicked')
    }

    homeCardSprints ={
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => alert('Sprints Clicked')
    }

    render(){

        return(
            <section id="home" className="bckImg d-flex pdtop" >
                <div className="container">
                    <div className="row ">
                        <div className="col-sm">
                            <div className="myname text-center"><br/>{this.props.nome}</div>
                        </div>
                    </div>      
                    <div className="row ">
                        <div className="col-sm text-center">
                            <img src={this.props.avatar} className=" rounded-circle img-thumbnail img-fluid center" width="300"/>
                        </div>
                        <div className="col-md align-items-center">
                            <div className="card d-flex wow" data-wow-delay="0.3s">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h2>
                                            Quem sou eu</h2>
                                        <hr/>
                                    </div>
                                    <div className="md-form">
                                        <p className="dark text-primary">
                                           {this.props.sobre}
                                        </p>
                                    </div>
                                    <div className="text-center mt-4">
                                        <a href={this.props.cv} target="_blank">
                                        <button className="btn" type="submit" >Download Currículo (PDF)</button>
                                        <hr className="mb-3 mt-4"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}