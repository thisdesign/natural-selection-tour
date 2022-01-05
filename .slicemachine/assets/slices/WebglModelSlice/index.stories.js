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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"webgl_model_slice","items":[{"Title":[{"type":"paragraph","text":"Sunt ipsum cupidatat excepteur et proident nisi in Lorem proident. Voluptate id ad nostrud pariatur enim fugiat ullamco dolore in.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"https://prismic.io"},"LinkLetter":"optimize integrated networks"},{"Title":[{"type":"paragraph","text":"Consequat cupidatat dolore incididunt ullamco sunt officia qui. Tempor adipisicing et amet anim ipsum aliqua eu est adipisicing nulla enim ullamco sit. Ad minim consectetur dolore laborum consequat eu.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"http://twitter.com"},"LinkLetter":"incentivize rich solutions"},{"Title":[{"type":"paragraph","text":"Exercitation consectetur sit ut eu ipsum adipisicing magna esse exercitation eu deserunt. Amet amet consectetur veniam ad in cupidatat ipsum elit. Aliqua ut Lorem et commodo proident ipsum aliqua dolor fugiat amet.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"http://twitter.com"},"LinkLetter":"strategize granular blockchains"}],"primary":{"SectionNumber":"exploit end-to-end bandwidth","SectionTitle":"synergize rich schemas","Type":"Hero","title":[{"type":"heading1","text":"Architect plug-and-play communities","spans":[]}],"description":[{"type":"paragraph","text":"Id Lorem proident minim laborum amet nulla in anim dolor proident.","spans":[]}],"VideoLoop":{"link_type":"Web","url":"https://slicemachine.dev"},"VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"CtaText":"incentivize wireless partnerships","Featured":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
