import MyComponent from '../../../../slices/ImageBannerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageBannerSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_banner_slice","items":[],"primary":{"SectionNumber":"00","SectionTitle":"Section","Banner":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=900&h=500&fit=crop"},"MobileBanner":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1555169062-013468b47731?w=900&h=500&fit=crop"},"CtaTitle":"More","CtaLink":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
