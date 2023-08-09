<template>
  <div class="about">
    <div class="track-container">
      <div class="track-list" id="trackList">
        <h2>DawnFM</h2>
        <iframe
          v-for="(track, index) in DawnFMTracks"
          :key="track.id"
          :src="`https://open.spotify.com/embed/track/${track.id}`"
          width="100%"
          height="352"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          :style="{ display: index === currentindex ? 'block' : 'none', borderRadius: '12px' }"
        ></iframe>
        <h2 class="vote-count" :style="{ color: '#0AE10A' }">Vote: {{ DawnFMVote }}</h2>
      </div>

      <div class="track-list" id="trackList2">
        <h2>AfterHours</h2>
        <iframe
          v-for="(track, index) in AfterHoursTracks"
          :key="track.id"
          :src="`https://open.spotify.com/embed/track/${track.id}`"
          width="100%"
          height="352"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          :style="{ display: index === currentindex2 ? 'block' : 'none', borderRadius: '12px' }"
        ></iframe>
        <h2 class="vote-count" :style="{ color: '#0AE10A' }">Vote: {{ AfterHoursVote }}</h2>
      </div>
    </div>

    <div class="controls">
      <button class="button-89" role="button" @click="nextTracks('DawnFM')">DawnFM</button>
      <button class="button-89" role="button" @click="nextTracks('AfterHours')">AfterHours Track (AfterHours)</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clientId: '9aafc2bea5134e1893987ed0d4c372bb',
      clientSecret: 'b1a1a591023a499cadfb6b9f1067b326',
      album1ID: '2nLOHgzXzwFEpl62zAgCEC',
      album2ID: '4yP0hdKOZPNshxUOjY0cZj',
      currentindex: 0,
      currentindex2: 0,
      DawnFMTracks: [],
      AfterHoursTracks: [],
      DawnFMVote: 0,
      AfterHoursVote: 0,
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
    async getTracks(token, albumID) {
      const result = await fetch(`https://api.spotify.com/v1/albums/${albumID}/tracks`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
      const data = await result.json();
      return data.items;
    },
    async renderDawnFM() {
      const token = await this.getToken();
      const tracks = await this.getTracks(token, this.album1ID);
      this.DawnFMTracks = tracks;
      this.renderTracks();
    },
    async renderAfterHours() {
      const token = await this.getToken();
      const tracks = await this.getTracks(token, this.album2ID);
      this.AfterHoursTracks = tracks;
      this.renderTracks();
    },
    renderTracks() {
      const iframes1 = document.querySelectorAll('#trackList iframe');
      const iframes2 = document.querySelectorAll('#trackList2 iframe');

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

      if (this.DawnFMTracks.length > 0) {
        const currentIndex1 = this.currentindex % this.DawnFMTracks.length;
        if (iframes1[currentIndex1]) {
          iframes1[currentIndex1].style.display = 'block';
        }
      }

      if (this.AfterHoursTracks.length > 0) {
        const currentIndex2 = this.currentindex2 % this.AfterHoursTracks.length;
        if (iframes2[currentIndex2]) {
          iframes2[currentIndex2].style.display = 'block';
        }
      }
    },
    async nextTracks(album) {
      if (album === 'DawnFM') {
        this.currentindex++;
        this.DawnFMVote++;
        this.currentindex2++;
        await this.updateVoteCount(album);
      } else if (album === 'AfterHours') {
        this.currentindex2++;
        this.AfterHoursVote++;
        this.currentindex++;
        await this.updateVoteCount(album);
      }
      this.renderTracks();
    },
    async updateVoteCount(album) {
      try {
        const response = await axios.post('/updateVote', { album });
        console.log(response.data);
      } catch (error) {
        console.error('Error updating vote count:', error);
      }
    },
  },
  mounted() {
    this.renderDawnFM();
    this.renderAfterHours();
  },
};
</script>

<style>
/* ... Your existing styles ... */
</style>
