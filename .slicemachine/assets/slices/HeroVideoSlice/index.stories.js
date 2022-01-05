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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Sunt officia laborum enim deserunt elit dolor mollit cillum ad ad ipsum.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Cillum minim pariatur veniam incididunt culpa eiusmod irure laboris tempor culpa aute. Culpa irure ea commodo dolor culpa excepteur est elit officia eiusmod sint.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Lorem minim laboris labore nostrud commodo amet ut voluptate officia mollit cillum nostrud.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Sunt aliqua non ipsum eu dolore aliquip laboris.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Ea do magna minim reprehenderit tempor occaecat aliquip tempor tempor dolor ad velit. Nulla in velit minim reprehenderit laborum.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Veniam nulla proident exercitation non adipisicing labore. Ex labore aute eiusmod.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Nostrud aute ea reprehenderit ipsum voluptate. Sunt culpa minim officia. Sint aliqua ut in amet proident est anim voluptate veniam do.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Ullamco elit laboris enim excepteur enim nisi esse dolor duis occaecat cupidatat irure qui amet.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Dolore occaecat sint culpa in id mollit aliqua esse culpa fugiat voluptate. Officia cupidatat Lorem occaecat excepteur aliqua esse excepteur eiusmod duis duis. Duis magna et commodo.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Ullamco nulla pariatur tempor ullamco velit mollit aliquip.","spans":[]}]}],"primary":{"SectionNumber":"expedite best-of-breed functionalities","SectionTitle":"aggregate virtual functionalities","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"CtaText":"engineer magnetic methodologies","VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"VideoFull":{"link_type":"Web","url":"https://slicemachine.dev"},"VideoLoop":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
