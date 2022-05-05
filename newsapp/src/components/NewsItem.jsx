
import React, { Component } from 'react';


export class NewsItem extends Component {



  render() {
    let {title, description, imageUrl, newsUrl} = this.props


      return (
          <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
              <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/florian-olivo-Mf23RF8xArY-unsp_0-647x363.jpeg?iQE_gXU42CydlLniUGC7yBho3VPPJPqv":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
            </div>
          </div>
    )
  }
}


export default NewsItem