<template>
    <div class="about">
      <div class="track-container">
        <div class="track-list" id="trackList">
          <h2>TravisScott</h2>
         
          <iframe
  v-for="(track, index) in Artist1IDTracks"
  :key="track.track.id"
  :src="'https://open.spotify.com/embed/track/' + track.track.id"
  width="100%"
  height="352"
  frameborder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  :style="{ display: index === currentindex ? 'block' : 'none', borderRadius: '12px' }"
></iframe>

          <h2 class="vote-count" :style="{ color: '#0AE10A' }">Vote: {{ Artist1IDVote }}</h2>
        </div>
        <div class="track-list" id="trackList2">
          <h2>AsapRocky</h2>
          <iframe
  v-for="(track, index) in rodeoTracks"
  :key="track.track.id"
  :src="'https://open.spotify.com/embed/track/' + track.track.id"
  width="100%"
  height="352"
  frameborder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  :style="{ display: index === currentindex ? 'block' : 'none', borderRadius: '12px' }"
></iframe>

          <h2 class="vote-count" :style="{ color: '#0AE10A' }">Vote: {{ rodeoVote }}</h2>
        </div>
      </div>
      <div class="controls">
        <button class="button-89" role="button" @click="nextTracks('Artist1ID')">Artist1ID</button>
        <button class="button-89" role="button" @click="nextTracks('rodeo')">Rodeo Track (Rodeo)</button>
      </div>
    </div>
    
  </template>

  <script>
  export default {
    data() {
      return {
        clientId: '9aafc2bea5134e1893987ed0d4c372bb',
        clientSecret: 'b1a1a591023a499cadfb6b9f1067b326',
        Artist1IDID: '5CHnxTkGFPlnaIv9KupQL6',
        Artist2IDID: '5HA3htwwRTmk8mKNiUybUt',
        currentindex: 0,
        currentindex2: 0,
        Artist1IDTracks: [],
        rodeoTracks: [],
        Artist1IDVote: 0,
        rodeoVote: 0,                   
      };     
    },
    methods: {
      async getToken() {
        const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
          },
          body: 'grant_type=client_credentials',
        });
        const data = await result.json();
        return data.access_token;
      },
      async getPlaylists(token, Artist1IDID) {
        const result = await fetch(`https://api.spotify.com/v1/playlists/${Artist1IDID}/tracks`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        });
        const data = await result.json();
        return data.items;
      },
      async renderArtist1ID() {
        const token = await this.getToken();
        const tracks = await this.getPlaylists(token, this.Artist1IDID);
        this.Artist1IDTracks = tracks;
        this.renderTracks(); // Call renderTracks hereaA
      },
      async renderRodeo() {
        const token = await this.getToken();
        const tracks = await this.getPlaylists(token, this.Artist2IDID);
        this.rodeoTracks = tracks;
        this.renderTracks(); // Call renderTracks here
      },
      renderTracks() {
        // Get all the iframes representing the tracks
        const iframes1 = document.querySelectorAll('#trackList iframe');
        const iframes2 = document.querySelectorAll('#trackList2 iframe');
  
        // Hide all iframes first
        iframes1.forEach((iframe) => {
          if (iframe) {
            iframe.style.display = 'none';
          }
        });
  
        iframes2.forEach((iframe) => {
          if (iframe) {
            iframe.style.display = 'none';
          }
        });
  
        // Show the current track based on the currentindex and currentindex2
        if (this.Artist1IDTracks.length > 0) {
          const currentIndex1 = this.currentindex % this.Artist1IDTracks.length;
          if (iframes1[currentIndex1]) {
            iframes1[currentIndex1].style.display = 'block';
          }
        }
  
        if (this.rodeoTracks.length > 0) {
          const currentIndex2 = this.currentindex2 % this.rodeoTracks.length;
          if (iframes2[currentIndex2]) {
            iframes2[currentIndex2].style.display = 'block';
          }
        }
      },
  
      nextTracks(album) {
        if (album === 'Artist1ID') {
          this.currentindex++;
          this.Artist1IDVote++;
          this.currentindex2++;
        } else if (album === 'rodeo') {
          this.currentindex2++;
          this.rodeoVote++;
          this.currentindex++;
        }
        this.renderTracks();
      },
    },
    mounted() {
      this.renderArtist1ID();
      this.renderRodeo();
    },
  };
  </script>
  
  <style>
  .about {
    text-align: center;
  }
  
  .track-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .track-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  button {
    margin-top: 10px;
  }
  
  .controls {
    display: flex;
    justify-content: center;
  }
  
  button {
    margin-left: 30px;
  }
  
  .button-89 {
    --b: 3px;   /* border thickness */
    --s: .45em; /* size of the corner */
    --color: #0AE10A;
    padding: calc(.5em + var(--s)) calc(.9em + var(--s));
    color: var(--color);
    --_p: var(--s);
    background:
      conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
      var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
    transition: .3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: .6em;
    font-size: 16px;
  
    border: 0;
  
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-89:hover,
  .button-89:focus-visible{
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: .05em;
  }
  
  .button-89:active {
    background: var(--color);
    color: #fff;
  }
  </style>
  
  
  