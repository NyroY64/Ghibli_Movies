const apiUrl ='https://ghibliapi.vercel.app/films';




  async function getMovieListing(apiUrl) {
    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
  
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Convert the object into an array (assuming the object has enumerable properties)
      const dataArray = Object.entries(data).map(([key, value]) => ({ key, value }));
  
      return dataArray;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      // You might want to handle errors differently based on your use case
      return [];
    }
  }


  async function displayMovies() {
    const movieListContainer = document.querySelector('.movieList');
    const Movies = await  getMovieListing(apiUrl);
    
    
    console.log(Movies);
    let parsedMovies=Movies.map((movie)=>movie=movie.value);

    parsedMovies.forEach(movie => {

      const movieCard = document.createElement('div');
      movieCard.className = 'movieCard';
  
      const movieImage = document.createElement('img');
      movieImage.className = 'movieImage';
      movieImage.src = movie.image;
      movieImage.alt = movie.title;
  
      const movieProd=document.createElement('div');
      movieProd.textContent=movie.director;
  
  
      const movieTitle = document.createElement('div');
      movieTitle.className = 'movieTitle';
      movieTitle.textContent = movie.title;
      movieTitle.style.textAlign="left";

      const originTitle =document.createElement('div');
      originTitle.textContent=movie.original_title;
      movieTitle.style.margin="0px 0px 0px 50px";
  
      
      const detailButton = document.createElement('button');
      detailButton.textContent='VIEW'
      detailButton.addEventListener(onclick,(e)=>{
        document.querySelector(".popup").style.display = "block";
        console.log('hello');
      })


      const containerBTN=document.createElement('div');
      containerBTN.className='gbl';

      

      movieCard.appendChild(movieImage);
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieProd);
      containerBTN.appendChild(detailButton);
      containerBTN.appendChild(originTitle);
      movieCard.appendChild(containerBTN);
      movieListContainer.appendChild(movieCard);

      
    });
  }
  
  displayMovies();