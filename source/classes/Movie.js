
 export class Movie {
   constructor(posterPath,overview,title,releaseDate) {
      this.posterPath=posterPath;
      this.overview=overview;
      this.title=title;
      this.releaseDate=releaseDate;
      this.moreDetails;
   }
 }

  export function createMovie(m)
  {
    const movie= new Movie(m.poster_path,m.overview,m.title,m.release_date,false);
    return movie;
  };
 