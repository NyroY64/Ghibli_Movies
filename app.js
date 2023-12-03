function getMovieListing() {
    fetch('https://ghibliapi.vercel.app/films').then(response => {return response.json();})
      .then(response=>console.log(response))
      .catch(error => {
        console.error('Error:', error);
      });
  }

  getMovieListing();

function showMovies() {
  const movieList=getMovieListing();

  movieList.forEach(movie => {
    const 
    
  });
  
}