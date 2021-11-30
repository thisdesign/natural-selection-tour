<template>
  <div class="rider">
    <div v-if="rider.data" class="rider-front" @click="active = true">
      <prismic-image class="rider-image" :field="rider.data.Rider" />
      <div class="rider-about">
        <prismic-image :field="rider.data.Flag" />
        <prismic-rich-text :field="rider.data.Location" />
      </div>
      <div class="rider-info">
        <prismic-rich-text :field="rider.data.InformationLeft" />
        <prismic-rich-text :field="rider.data.InformationRight" />
      </div>
    </div>
    <div v-if="active === true" class="rider-back">
      <button class="rider-close" @click="active = false"></button>
      <prismic-rich-text :field="rider.data.Name" />
      <prismic-rich-text :field="rider.data.Bio" />
      <div class="rider-logos">
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
}
</script>

<style lang="scss" scoped>
.rider {
  width: calc(100% / 3);
  background-color: $solid-black;
  color: $white;
  position: relative;
}

.rider-front {
  img.rider-image {
    width: 100%;
  }
}
.rider-about {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  p {
    margin: 0;
  }
}
.rider-info {
  display: flex;
}

.rider-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.rider-close {
  position: absolute;
  display: block;
  background: red;
  outline: 0;
  border: 0;
  padding: 0;
  top: 0px;
  right: 0px;
  width: 30px;
  height: 30px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 18px;
    height: 2px;
    background: black;
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
</style>

<style lang="scss">
.rider {
  .rider-about {
    p {
      margin-bottom: 0;
    }
  }
}
</style>
