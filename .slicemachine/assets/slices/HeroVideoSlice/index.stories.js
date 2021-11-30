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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Cillum dolore cillum officia minim reprehenderit duis aliquip ex non excepteur ut sint consectetur dolor. Cupidatat eu esse amet consectetur aliqua ex do aliquip nisi irure.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Quis nostrud do duis ex. Excepteur aliqua eu ea Lorem veniam cupidatat labore aute cillum id nisi elit officia cupidatat.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Fugiat labore laboris sint ipsum laborum proident voluptate non id.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Proident aliqua ut excepteur laborum non ad labore. Laborum cillum do deserunt et laboris sunt aliqua adipisicing occaecat id duis. Magna anim deserunt elit ex tempor ad ut Lorem non magna ut officia consectetur.","spans":[]}]}],"primary":{"SectionNumber":"00","SectionTitle":"Section","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1490535004195-099bc723fa1f?w=900&h=500&fit=crop"},"CtaText":"Play","VideoFull":{"link_type":"Web","url":"https://www.youtube.com/embed/Os8zzu5bQE8"},"VideoLoop":{"link_type":"Web","url":"https://www.youtube.com/embed/9J2Smg6j0pw"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
