class Movie {
   constructor(title, director) {
      this.title = title;
      this.director = director;
      this.stars = [];
      this.writers = [];
      this.ratings = [];

   }
 
   getTitle() {
      console.log(this.title);
      return this.title;
   }
 
   getDirector() {
      console.log(this.director);
      return this.director;
   }
 
   addStar(star) {
      this.stars.push(star);
   }
 
   getStars() {
      console.log(this.stars);
      return this.stars;
   }
 
   addWriter(writer) {
      this.writers.push(writer);
   }
 
   getWriters() {
      console.log(this.writer);
      return this.writer;
   }
 
   addRating(rating) {
      this.ratings.push(rating);
   }
 
   getAverageRating() {
      let averageRating = 0;
      for (let i = 0; i < this.ratings.length; i++){
         averageRating += this.ratings[i];
      }
      return averageRating / this.ratings.length;
  }

}
 
   // ... Add yours :-) Look to IMDB for inspiration
 
 class StaffMember {
   constructor(name, role, dateOfBirth) {
     this.name = name;
     this.role = role;
     this.dateOfBirth = new Date(dateOfBirth);
     this.movies = [];
   }
 
   addMovie(movie) {
      this.movies.push(movie);
   }
 
   getName() {
     console.log(this.name);
     return this.name;
   }
 
   getRole() {
      console.log(this.role);
      return this.role;
   }
 
   getAge() {
      let currentYear = new Date().getFullYear();
      const age = currentYear - this.dateOfBirth.getFullYear();
      console.log(age);
      return age;
   }
 }
 
 // Pick your favorite movie from http://www.imdb.com/
 
 const myMovie = new Movie("The Batman", "Nolan");
 
 const firstActor = new StaffMember("Bale", "Batman", "01-01-1970");
 myMovie.addStar(firstActor);
 // create and add more staff members
 
 // Make sure that the following actions work.
 console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
 const director = myMovie.getDirector();
 console.log(director);
 console.log(`Director: ${director.getName()}`);
 