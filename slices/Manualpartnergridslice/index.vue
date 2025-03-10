<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section site-padding waypoint ${animationReady ? 'active' : ''}`"
  >
    <element-section-bar
      ref="bar"
      :number="toText(slice.primary.sectionnumber)"
      :title="toText(slice.primary.sectiontitle)"
    />
    <div v-if="slice.primary.intro" class="partners-title">
      <prismic-rich-text :field="slice.primary.intro" />
    </div>
    <div class="partner-list large">
      <div
        v-for="(item, index) in featured"
        :key="`large-partner${index}`"
        class="partner large"
      >
        <nuxt-link
          v-if="slice.primary.external_links !== true"
          :to="`/partners/${item.partner.uid}`"
        >
          <prismic-image
            v-if="item.partner.data.Logo"
            :field="item.partner.data.Logo"
          />
        </nuxt-link>
        <a
          v-if="slice.primary.external_links === true"
          :href="
            item.partner.data.Link.url
              ? item.partner.data.Link.url
              : 'https://prismic.io'
          "
          target="_blank"
        >
          <prismic-image
            v-if="item.partner.data.Logo"
            :field="item.partner.data.Logo"
          />
        </a>
      </div>
    </div>
    <div v-if="slice.primary.featured_only === false" class="partner-list">
      <div
        v-for="(item, index) in partners"
        :key="`small-partner${index}`"
        class="partner small"
      >
        <nuxt-link
          v-if="slice.primary.external_links !== true"
          :to="`/partners/${item.partner.uid}`"
        >
          <prismic-image
            v-if="item.partner.data.Logo"
            :field="item.partner.data.Logo"
          />
        </nuxt-link>
        <a
          v-if="slice.primary.external_links === true"
          :href="
            item.partner.data.Link.url
              ? item.partner.data.Link.url
              : 'https://prismic.io'
          "
          target="_blank"
        >
          <prismic-image
            v-if="item.partner.data.Logo"
            :field="item.partner.data.Logo"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import RichText from '@prismicio/richtext'
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'ManualPartnerGridSlice',
  mixins: [WaypointMixin],
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      id: '',
    }
  },
  computed: {
    featured() {
      return this.list ? this.list.list.data.featured_partners : []
    },
    list() {
      return this.$store.state.lists.data[this.id]
    },
    animationReady() {
      return this.waypointActive && this.list !== undefined
    },
    partners() {
      return this.list ? this.list.list.data.partners : []
    },
  },
  watch: {
    animationReady(active) {
      if (this.$refs.bar) {
        this.$refs.bar.show()
      }
    },
    list(data) {
      console.log('data', data)
    },
  },
  mounted() {
    console.log(this.slice)
    this.id = this.slice.primary.list.id
    if (this.list === undefined) {
      this.$store.dispatch('lists/loadList', {
        prismic: this.$prismic,
        id: this.id,
      })
    }
  },
  methods: {
    toText(string) {
      return RichText.asText(string)
    },
  },
}
</script>
<style lang="scss">
.partners-title * {
  font-size: clamp(1.5rem, 4vw, 4vw);
  line-height: 1.2;
}
</style>

<style lang="scss" scoped>
.section {
  color: #fff;
  padding-bottom: 10vh;

  &.active {
    .partner-list {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
.partner-list {
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(5vh);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transition-delay: 0.75s;
  @include media-breakpoint-up(sm) {
    padding: 0 10vw;
  }
  &.large {
    justify-content: center;
    transition-delay: 0.5s;
    margin-bottom: 7vw;
  }
}
.partner {
  width: 20%;
  position: relative;
  a {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 12px;
    @include media-breakpoint-up(sm) {
      padding: 0 25px;
    }
  }
  img {
    width: 100%;
  }
  &.large {
    width: 50%;
    padding-top: 20%;
    @include media-breakpoint-up(sm) {
      padding-top: 17%;
    }
    img {
      width: 60%;
      margin: 0 auto;
    }
  }
  &.small {
    width: calc(100% / 3);
    padding-top: 20%;
    @include media-breakpoint-up(sm) {
      width: calc(100% / 5);
      padding-top: 15%;
    }
  }
}
</style>
