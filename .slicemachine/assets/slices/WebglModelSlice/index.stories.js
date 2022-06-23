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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"webgl_model_slice","items":[{"Title":[{"type":"paragraph","text":"Nulla exercitation aliquip dolore laboris. Ipsum est labore amet aute in ad sint nostrud qui eu. Aliquip sunt esse cillum nisi.","spans":[]}],"Active":false,"Model":{"link_type":"Web","url":"http://google.com"},"LinkLetter":"aggregate B2C deliverables"},{"Title":[{"type":"paragraph","text":"Minim Lorem mollit proident deserunt ullamco esse minim cillum. Culpa esse est ea duis dolor quis ut non amet qui est culpa.","spans":[]}],"Active":true,"Model":{"link_type":"Web","url":"https://slicemachine.dev"},"LinkLetter":"mesh cross-media blockchains"},{"Title":[{"type":"paragraph","text":"Aliquip duis elit ad aute reprehenderit do esse sit sint proident consequat nostrud est. Ut tempor voluptate ipsum. Duis et magna occaecat amet anim pariatur nostrud.","spans":[]}],"Active":true,"Model":{"link_type":"Web","url":"https://prismic.io"},"LinkLetter":"monetize customized web services"}],"primary":{"SectionNumber":"deliver cutting-edge e-commerce","SectionTitle":"recontextualize vertical interfaces","Type":"Default","title":[{"type":"heading1","text":"Redefine turn-key systems","spans":[]}],"description":[{"type":"paragraph","text":"Occaecat commodo duis est fugiat excepteur ullamco voluptate quis commodo et nostrud sunt. Mollit elit laboris pariatur est irure. Aliquip voluptate ad voluptate aute incididunt do ipsum esse quis in non sit.","spans":[]}],"VideoLoop":{"link_type":"Web","url":"https://prismic.io"},"VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"CtaText":"synthesize magnetic metrics","Featured":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
