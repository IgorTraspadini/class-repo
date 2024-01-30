// music should be an object with title, artist, and album properties
const music = [{
  'title': 'Nothing else matters',
  'artist': 'Metallic',
  'album': 'Nothing else matters'
},
{
  'title': 'Nothing else matters',
  'artist': 'Metallic',
  'album': 'Nothing else matters'
}];

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = music.map(songs => (`
  <div class="song">
    <h2>${songs.title}</h2>
    <p>Artist: ${songs.artist}</p>
    <p>Album: ${songs.album}</p>
  </div>
`)).join("");

const element = document.getElementById("music");
element.innerHTML = songSnippet;

