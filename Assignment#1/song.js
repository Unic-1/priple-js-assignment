/**
 * Artist details:
 * Singer, Lyricist, Music Director, Cast
 *  
 */ 
var artits = {
    singer: ['Arjit Singh', 'Mohammed Irfan', 'Saim Bhat'],
    lyricist: ['Sayeed Quadri'],
    music: ['Mithoon'],
    cast: ['Emraan Hashmi', 'Jacqueline Fernandez']
}; 

// Language in which the song is written
var language = 'Hindi';

// Music Label
var musicLabel = 'T-Series';

// Year of release
var year = 2011;

// Album 
var album = 'Murder 2';

// Gener for the song
var genre = 'bollywood';

// Song duration
var duration = '5min 28sec';

// Nomination status
var isNominated = true;

// Award nominations
var nominations = ['Guild Award for Best Male Playback Singer'];

// Song rating
var rating = 4.8;


console.log('Artist:',artits)
console.log('Language:', language)
console.log('Music Label:', musicLabel)
console.log('Released:', year)
console.log('Album:', album)
console.log('Genre:', genre)
console.log('Duration:', duration)
console.log('Nominations:', isNominated ? nominations : 'NA')
console.log('Rating:', rating);
