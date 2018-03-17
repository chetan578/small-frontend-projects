var movies =[
{ name:"the heat",
  rating:3,
  hasWatched:"not watched" ,

},
{

name:"the proposal",
  rating:4,
  hasWatched:"watched" ,

},
{
name:"crazy stupid love",
  rating:4,
  hasWatched:"watched",
},
{
	name:"the punisher",
  rating:4.5,
  hasWatched:"not watched",
}
];
for (var i=0;i<movies.length;i++)
{
 console.log ("you have" + " "+ movies[i].hasWatched +" "+ movies[i].name +"---" +movies[i].rating+"stars");
 
}