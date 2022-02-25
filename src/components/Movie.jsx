function Movie(props) {
   const {
      Title,
      Year,
      imdbID,
      Type: type,
      Poster
   } = props;
   
   return <div id={imdbID} className="movie card">
      <div className="card">
         <div className="card-image">
            {
               Poster === "N/A" ?
                  <img className="card-title" src={`https://via.placeholder.com/300x350?text=${Title}`} />
                  :
                  <img className="card-title" src={Poster} />
            }
            <img className="activator" src={Poster} />
         </div>
         <div className="card-content">
            <span className="card-title">{Title}</span>
            <p>{Year} <span className="right"> {type} </span></p>
         </div>
      </div>
   </div>
}
export { Movie };