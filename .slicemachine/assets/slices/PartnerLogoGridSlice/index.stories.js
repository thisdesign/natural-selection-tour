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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"partner_logo_grid_slice","items":[],"primary":{"SectionTitle":"engage extensible action-items","SectionNumber":"transition transparent partnerships","title":[{"type":"heading2","text":"Mesh e-business web-readiness","spans":[]}],"UseExternalLinks":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
