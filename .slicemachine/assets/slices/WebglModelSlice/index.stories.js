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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"webgl_model_slice","items":[{"Title":[{"type":"paragraph","text":"Sint quis incididunt consequat eu dolor quis laboris ullamco reprehenderit. Non nostrud nisi quis aute sint eu ut aliquip ullamco.","spans":[]}],"Active":true,"Model":{"link_type":"Web","url":"https://prismic.io"},"LinkLetter":"morph visionary mindshare"},{"Title":[{"type":"paragraph","text":"Aliquip qui dolor amet amet Lorem ad laboris consequat aute deserunt exercitation. Cupidatat dolore velit minim fugiat sunt adipisicing.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"http://google.com"},"LinkLetter":"morph intuitive e-business"},{"Title":[{"type":"paragraph","text":"Sit amet sint exercitation. Voluptate sit ex qui est veniam nulla dolor.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"http://twitter.com"},"LinkLetter":"orchestrate B2B channels"},{"Title":[{"type":"paragraph","text":"Consequat aute minim ut in cillum aliqua.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"https://slicemachine.dev"},"LinkLetter":"syndicate vertical relationships"}],"primary":{"SectionNumber":"architect impactful mindshare","SectionTitle":"syndicate B2B e-services","Type":"Hero","title":[{"type":"heading1","text":"Monetize back-end web services","spans":[]}],"description":[{"type":"paragraph","text":"Minim laborum dolore enim anim tempor ullamco veniam. Sunt mollit adipisicing reprehenderit ad tempor.","spans":[]}],"VideoLoop":{"link_type":"Web","url":"http://google.com"},"VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"https://www.google.com"},"CtaText":"recontextualize front-end synergies","Featured":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
