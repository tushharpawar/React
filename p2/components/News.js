import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   constructor(){
    super();
           this.state= {
               articles:[],
               loaging:true,
               page:1
           }
    }
   async componentDidMount(){
          let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=a2b6080a3dae4b2d98b41bbe7beebd47&page=1&pageSize=20";
          let data = await fetch(url);
          let parseData=await data.json()
          this.setState({articles:parseData.articles,totalArticles:parseData.totalResults})
    }

    handlePrevClick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=a2b6080a3dae4b2d98b41bbe7beebd47&page=${this.state.page -1}&pageSize=20`;
      let data = await fetch(url);
      let parseData=await data.json()
      this.setState({
        page:this.state.page - 1,
        articles:parseData.articles
   })
    }
    handleNextClick= async()=>{
      if(this.state.page + 1>Math.ceil(this.state.totalResults/20)){

      }
      else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=a2b6080a3dae4b2d98b41bbe7beebd47&page=${this.state.page +1}&pageSize=20`;
        let data = await fetch(url);
        let parseData=await data.json()
        this.setState({
          page:this.state.page + 1,
          articles:parseData.articles
     })
      }

     
    }

  render() {
    
    return (
      <div className='container my-3'>
      <h2>NewCrow - Top Headlines</h2>
      <div className="row">
      {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}><NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,45):""} imageUrl={element.urlToImage} newsUrl={element.url}/></div>
      })}
      </div>
      <div className="container">
      <div className="d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-outline-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
      <button type="button" className="btn btn-outline-primary" onClick={this.handleNextClick}>Next &rarr;</button>
      
      </div>
      </div>
      </div>
    )
  }
}

export default News