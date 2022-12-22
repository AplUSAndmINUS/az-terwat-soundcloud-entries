const fetchSoundCloudTracks = async (artist) => {
  try {
    // Replace 'YOUR_CLIENT_ID' with your SoundCloud API client ID
    const clientId = 'YOUR_CLIENT_ID';

    // Make a GET request to the SoundCloud API to search for the artist's tracks
    const response = await fetch(`https://api.soundcloud.com/tracks?client_id=${clientId}&q=${artist}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};