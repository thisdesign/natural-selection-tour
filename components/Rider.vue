<template>
  <div v-if="rider.data" :class="`rider${duels ? ' duels' : ''}`">
    <div v-if="duels === true" class="rider-stats">
      <prismic-rich-text class="rider-name" :field="rider.data.Name" />
    </div>
    <div
      class="rider-image"
      @mouseenter="updateCurrentRider(rider)"
      @mousemove="updateCurrentRider(rider)"
      @mouseleave="onMouseOut"
      @click="active = duels ? false : true"
    >
      <prismic-image :field="rider.data.Rider" />
      <video
        ref="riderVideo"
        :src="rider.data.Video.url"
        muted
        playsinline
      ></video>
    </div>
    <prismic-rich-text class="rider-name tablet" :field="rider.data.Name" />
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
        <div v-if="duels === false" class="rider-stats">
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
          <span>0{{ rider.data.Sponsors.length }}</span>
        </div>
        <div class="rider-sponsors-logos">
          <div
            v-for="(item, index) in rider.data.Sponsors"
            :key="`rider-logo-${index}`"
            class="rider-logo"
          >
            <nuxt-link
              v-if="item.Partner.uid"
              :to="`/partners/${item.Partner.uid}`"
            >
              <prismic-image
                v-if="logos[item.Partner.uid]"
                :field="logos[item.Partner.uid]"
              />
            </nuxt-link>
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
    duels: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      active: false,
      playPromise: null,
    }
  },
  computed: {
    logos() {
      return this.$store.state.partners.results.logos
    },
  },
  methods: {
    updateCurrentRider() {
      if (this.duels) {
        return false
      }
      this.$emit('update-rider', this.rider.data)
      if (this.$refs.riderVideo) {
        this.playPromise = this.$refs.riderVideo.play()
        this.playPromise
          .then(() => {
            this.$refs.riderVideo.style.opacity = '1'
          })
          .catch((error) => {
            this.$log(error)
          })
      }
    },
    onMouseOut() {
      this.$emit('hidename')
      if (this.$refs.riderVideo) {
        if (this.playPromise) {
          this.playPromise
            .then(() => {
              this.$refs.riderVideo.pause()
              this.$refs.riderVideo.currentTime = 0
              this.$refs.riderVideo.style.opacity = '0'
            })
            .catch((error) => {
              this.$log(error)
            })
        }
      }
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
  &.duels {
    padding: 10px;
    .rider-image {
      cursor: default;
      border: 1px solid white;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .rider-name {
      background: white;
      color: black;
      width: 100%;
      text-align: center;
      padding: 5px 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      &::v-deep p {
        margin-bottom: 0;
        text-transform: uppercase;
        font-weight: 400;
      }
    }
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

.duels {
  .rider-location ::v-deep p {
    @include media-breakpoint-down(xs) {
      font-size: 14px;
      padding-top: 5px;
    }
  }
  .rider-flag {
    @include media-breakpoint-down(xs) {
      width: 24px;
      margin-top: 5px;
    }
  }
  .rider-name {
    &::v-deep p {
      @include media-breakpoint-down(xs) {
        font-size: 12px;
      }
    }
    &.tablet {
      display: none;
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
  display: flex;
  span {
    display: block;
  }
  > div {
    width: 50%;
    padding-right: 0.5rem;
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
  &.tablet {
    color: white;
    font-family: 'Natural-Selection', sans-serif;
    line-height: 1;
    margin: 1rem 0;
    @include media-breakpoint-up(md) {
      display: none;
    }
  }
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
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.rider-sponsors-logos {
  display: flex;
  flex-wrap: wrap;
}
.rider-logo {
  width: 25%;
  padding-right: 10px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>

<style lang="scss">
.rider-name {
  &.tablet {
    * {
      font-size: 3vw;
    }
  }
}
</style>
