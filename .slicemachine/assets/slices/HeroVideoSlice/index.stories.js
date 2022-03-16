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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Reprehenderit commodo fugiat cupidatat eu ut culpa non exercitation. Eiusmod exercitation excepteur cillum magna voluptate consequat officia minim est irure ea quis.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Consectetur aliquip consequat magna est labore laboris exercitation minim eiusmod id officia cillum irure sunt. Velit et ea laborum officia adipisicing elit dolore magna. Ad sit do ullamco nulla ut cillum aliqua quis laborum pariatur eiusmod reprehenderit.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Est culpa irure incididunt ipsum velit enim enim nisi est.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Voluptate proident exercitation ad commodo id pariatur sint ex. Eu consequat voluptate ea et occaecat sint cillum ad id incididunt aliqua esse ad. Ad esse anim nostrud fugiat ad laborum culpa sunt minim pariatur aute amet.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Amet nisi voluptate quis tempor cupidatat nisi occaecat anim eiusmod voluptate laborum. Minim nostrud mollit ex nisi ullamco sit occaecat commodo occaecat officia occaecat.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Eiusmod do occaecat ullamco quis ut mollit do pariatur. Consectetur officia dolore qui non quis.","spans":[]}]}],"primary":{"SectionNumber":"revolutionize cross-media schemas","SectionTitle":"exploit intuitive markets","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"CtaText":"cultivate sticky technologies","CtaLink":{"link_type":"Web","url":"https://prismic.io"},"VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"VideoFull":{"link_type":"Web","url":"http://google.com"},"VideoLoop":{"link_type":"Web","url":"http://twitter.com"},"LoopOnly":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
