import MyComponent from '../../../../slices/PartnerLogoGridSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PartnerLogoGridSlice'
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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"SectionTitle":"themselves","SectionNumber":"accurate","title":[{"type":"heading2","text":"Quiet","spans":[]}],"UseExternalLinks":true,"FeaturedOnly":true},"id":"_DefaultSlice","slice_type":"partner_logo_grid_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
