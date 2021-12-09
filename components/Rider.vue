<template>
  <div v-if="rider.data" class="rider">
    <div
      class="rider-image"
      @mouseenter="updateCurrentRider(rider)"
      @mouseleave="onMouseOut"
      @click="active = true"
    >
      <prismic-image :field="rider.data.Rider" />
      <video
        ref="riderVideo"
        src="https://prismic-io.s3.amazonaws.com/naturalselectiontour/79e3cfe0-fa21-4caf-b8c5-24ef0aab5003_AustenSweetin_RiderHeadshot_NaturalSelection_500x500_S.mp4"
        muted
        playsinline
      ></video>
    </div>
    <div class="rider-info">
      <div class="rider-flag">
        <div class="flag-wrapper">
          <prismic-image :field="rider.data.Flag" />
        </div>
      </div>
      <div class="rider-info-col">
        <prismic-rich-text
          class="rider-location"
          :field="rider.data.Location"
        />
        <div class="rider-stats">
          <prismic-rich-text :field="rider.data.InformationLeft" />
          <prismic-rich-text :field="rider.data.InformationRight" />
        </div>
      </div>
    </div>
    <div v-if="active" class="rider-overlay">
      <button class="rider-close" @click="active = false"></button>
      <div class="rider-description">
        <div class="inner">
          <prismic-rich-text class="rider-name" :field="rider.data.Name" />
          <prismic-rich-text :field="rider.data.Bio" />
        </div>
      </div>
      <div class="rider-sponsors">
        <div class="rider-sponsors-title">
          <h4>Industry Alliance Sponsors</h4>
          <span>05</span>
        </div>
        <div class="rider-sponsors-logos">
          <div
            v-for="(item, index) in rider.data.Logos"
            :key="`rider-logo-${index}`"
            class="rider-logo"
          >
            <a :href="item.Link.url">
              <prismic-image :field="item.Image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rider: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    updateCurrentRider() {
      this.$emit('update-rider', this.rider.data)
      this.$refs.riderVideo.play()
      this.$refs.riderVideo.style.opacity = '1'
    },
    onMouseOut() {
      this.$emit('hidename')
      this.$refs.riderVideo.pause()
      this.$refs.riderVideo.currentTime = 0
      this.$refs.riderVideo.style.opacity = '0'
    },
  },
}
</script>

<style lang="scss" scoped>
.rider-close {
  position: absolute;
  display: block;
  background: transparent;
  outline: 0;
  border: 0;
  padding: 0;
  top: 1vw;
  right: 1vw;
  width: 18px;
  height: 18px;
  z-index: 1;

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background: white;
    top: 50%;
    left: 50%;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

.rider {
  width: calc(100% / 2);
  color: white;
  position: relative;
  background: black;
  @include media-breakpoint-up(md) {
    width: calc(100% / 3);
  }
}
.rider-image {
  cursor: none;
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  width: 100%;
  img,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    opacity: 0;
    transition: opacity 400ms;
  }
}
.rider-info {
  display: flex;
  align-items: flex-start;
  line-height: 1.3;
  padding: 1vw 1vw 4vw;
}
.rider-flag {
  width: 18%;
  padding-right: 2vw;
  .flag-wrapper {
    border-radius: 50rem;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.rider-info-col {
  width: 82%;
}
.rider-location {
  font-weight: 700;
}
.rider-stats {
  columns: 2;
  span {
    display: block;
  }
}
.rider-overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  padding: 1vw;
}
.rider-sponsors {
  border-top: 1px solid white;
  padding: 1.5vw 0;
  background: black;
  flex: 1 1 auto;
}
.rider-sponsors-title {
  display: flex;
  justify-content: space-between;
  * {
    line-height: 1;
    text-transform: uppercase;
    font-size: 1vw;
    font-family: 'Sneak', sans-serif;
  }
}
.rider-name {
  font-weight: 700;
}
.rider-description {
  position: relative;
  padding-top: calc(100% + 1vw);
  .inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
  }
}
</style>

<style lang="scss">
// .rider {
//   .rider-about {
//     p {
//       margin-bottom: 0;
//     }
//   }
// }
</style>
