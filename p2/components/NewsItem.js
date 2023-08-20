import React, { Component } from 'react'

export class NewsItem extends Component {

  

  render() {
   let {title,description,imageUrl,newsUrl} =this.props

    return (
      <div className='my-3'>
        <div className="card">
        <img src={!imageUrl?"https://www.aljazeera.com/wp-content/uploads/2023/08/33P27LA-highres-1692267654.jpg?resize=1920%2C1440":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h3 className="card-title">{title}...</h3>
          <p className="card-text">{description}...</p>
        <a rel="noreference" href={newsUrl} target='blank' className="btn btn-sm btn-dark my-1">Read More</a>
        </div>
      </div>
      </div>
        
    )
  }
}

export default NewsItem