// --- The constructor function to create a Playlist object ---
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

// --- The method to add a song title to the Playlist ---
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

// --- The method to play the first song in the Playlist ---
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

// --- The method to skip the current song ---
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

// --- The method to list all songs in the Playlist ---
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

// --- The existing list ---
let myMix = new Playlist("My Chill Mix"); // Create a new Playlist
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();

// Improvement suggestion: The method to delete the current song, or make a current song as a favorite song

Playlist.prototype.deleteSong = function(songTitle){
  const index = this.songs.indexOf(songTitle); // Get the index number of the current song
  
  if (index !== -1) {
    const wasCurrent = this.currentSong === songTitle;
    this.songs.splice(index, 1);
    // if the deleted song was the current one, update current song
    if(wasCurrent) {
      this.currentSong = this.songs[0];
    }

    // Deleted message
    console.log("Current song has been deleted. Current Song is: ", this.currentSong);
  } else {
    // if the song is not in the Playlist
    console.log(`${songTitle} is not in the playlist.`);
  }
};