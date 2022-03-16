import MyComponent from '../../../../slices/WebglModelSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/WebglModelSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"webgl_model_slice","items":[{"Title":[{"type":"paragraph","text":"Sit cillum aliquip nostrud tempor officia qui.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"http://google.com"},"LinkLetter":"syndicate strategic infrastructures"},{"Title":[{"type":"paragraph","text":"Occaecat ex Lorem enim nostrud quis enim.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"http://twitter.com"},"LinkLetter":"grow plug-and-play convergence"},{"Title":[{"type":"paragraph","text":"Aliquip sit enim consequat velit exercitation exercitation laboris occaecat dolore eu dolor. Mollit qui ex ipsum fugiat mollit id et ullamco dolor excepteur aliquip adipisicing sit cillum. Sint consequat cillum ullamco labore aliquip labore tempor exercitation.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"https://prismic.io"},"LinkLetter":"exploit global e-markets"}],"primary":{"SectionNumber":"mesh efficient vortals","SectionTitle":"aggregate B2C web-readiness","Type":"Default","title":[{"type":"heading1","text":"Leverage enterprise functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Aliquip cillum enim veniam. Aliquip dolor eiusmod qui aute.","spans":[]}],"VideoLoop":{"link_type":"Web","url":"https://prismic.io"},"VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"http://google.com"},"CtaText":"deliver killer functionalities","Featured":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
