/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// Make a request for a user with a given ID




axios.get('https://api.github.com/users/B-Griffinn')
.then((response) => {
  //handle success
  console.log(response);

  /* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
mainCard.appendChild(createGitCard(response.data))
}) //END .then 
.catch(function (error) {
  //handle error
  console.log(`This is where the error should go ${error}`);
})
// .finally(function() {
//     //always executed
// })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//request to main div .cards
let mainCard = document.querySelector('.cards');

const followersArray = ['swheatley', 'esmitley', 'landon1013', 'trwhatcott', 'theMultitude'];

let ourLoop = followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then((response) => {
    mainCard.appendChild(createGitCard(response.data))
    console.log(response)
  })
});
  

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createGitCard(obj){
  //define our elements
  //create the cards
  let card = document.createElement('div');
  let userImg = document.createElement('img');
  let cardInfo = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let gitAddress = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  //set class name(s)
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  //text content
  gitAddress.setAttribute('href', '#');
  gitAddress.textContent = obj.url;
  
  bio.textContent = `Bio: ${obj.bio || "This user has no bio."}`;
  bio.style.fontWeight = 'bold';

  userImg.src = obj.avatar_url;

  name.textContent = `${obj.name || "No Name Given."}`;

  userName.textContent = `${obj.login}`;
  userName.style.fontWeight = 'bold';

  location.textContent = `Location: ${obj.location || "You do not need to know where I live."}`;
  location.style.fontWeight = 'bold';

  profile.textContent = `Profile:`;
  profile.style.fontWeight = 'bold';

  followers.textContent = `Followers: ${obj.followers}`;
  followers.style.fontWeight = 'bold';

  following.textContent = `Following: ${obj.following}`;
  following.style.fontWeight = 'bold';

  // setup structure aka append
  card.appendChild(userImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(gitAddress)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  //returning the parent
  return card;
}// end createGitCard function


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
