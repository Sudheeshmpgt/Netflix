import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'


function RowPost(props) {
  const [movie, setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleMovie = (id)=>{
   
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      console.log(id);
      if(response.data.results.length!=0){
        
        setUrlId(response.data.results[0])
        console.log(urlId)
      }else{
        console.log('Array Empty')
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((data)=>
          <img className={props.isSmall?'smallposter':'poster'} onClick={()=>handleMovie(data.id)} src={`${imageUrl+data.backdrop_path}`} alt="" />
          )}
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost