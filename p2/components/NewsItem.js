import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title,description,imageUrl,newsUrl,author,date,source} =this.props

    return (
      <div className='my-3'>
        <div className="card">
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
               {source}
  </span>
        <img src={!imageUrl?"https://www.aljazeera.com/wp-content/uploads/2023/08/33P27LA-highres-1692267654.jpg?resize=1920%2C1440":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h3 className="card-title" style={{fontWeight:"700"}}>{title}...</h3>
          
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author } on {new Date(date).toLocaleString()}</small></p>
        <a rel="noreference" href={newsUrl} target='blank' className="btn btn-sm btn-dark my-1">Read More</a>
        </div>
      </div>
      </div>
        
    )
  }
}

export default NewsItem