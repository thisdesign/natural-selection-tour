import MyComponent from '../../../../slices/HeroVideoSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroVideoSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Voluptate ex aliquip culpa eu officia ex dolor reprehenderit.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Sit occaecat nostrud pariatur ex ad aliquip do consequat amet do magna ex deserunt duis exercitation.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Labore nisi eu ea occaecat nulla eu cupidatat nostrud duis adipisicing. Quis id occaecat proident eiusmod. Ipsum ipsum nostrud sunt adipisicing do aliqua nulla ullamco laborum.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Pariatur et Lorem labore cillum in ut ex. Incididunt duis magna labore culpa aliqua qui aliqua ea esse.","spans":[]}]}],"primary":{"SectionNumber":"benchmark seamless infomediaries","SectionTitle":"reintermediate B2C supply-chains","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"CtaText":"iterate world-class initiatives","VideoFull":{"link_type":"Web","url":"http://twitter.com"},"VideoLoop":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
