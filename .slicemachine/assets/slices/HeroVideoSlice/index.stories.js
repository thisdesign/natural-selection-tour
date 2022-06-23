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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Mollit aute esse officia quis proident.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Voluptate et eiusmod veniam magna pariatur anim. Tempor Lorem ipsum minim et nulla consequat nulla id veniam dolor dolor ea. Occaecat aliqua magna dolor sint deserunt.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Pariatur duis occaecat consequat amet duis pariatur incididunt cillum consequat. Ullamco do eu amet. Culpa Lorem sunt consequat magna occaecat.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Proident proident tempor adipisicing deserunt laborum in laboris eiusmod eiusmod fugiat nisi ea.","spans":[]}]}],"primary":{"SectionNumber":"disintermediate interactive deliverables","SectionTitle":"architect intuitive niches","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"CtaText":"enable extensible partnerships","CtaLink":{"link_type":"Web","url":"https://prismic.io"},"VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"VideoFull":{"link_type":"Web","url":"https://slicemachine.dev"},"VideoLoop":{"link_type":"Web","url":"https://prismic.io"},"LoopOnly":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
