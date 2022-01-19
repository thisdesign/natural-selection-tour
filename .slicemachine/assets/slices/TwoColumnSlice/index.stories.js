import MyComponent from '../../../../slices/TwoColumnSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TwoColumnSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"synergize frictionless architectures","SectionTitle":"morph leading-edge infomediaries","title":[{"type":"heading1","text":"E-enable dynamic ROI","spans":[]}],"TitleImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Consectetur deserunt ut aliquip in eiusmod cillum eiusmod commodo id labore aliqua.","spans":[]}],"Content":[{"type":"paragraph","text":"Aliqua aliqua sunt elit aliquip Lorem consequat Lorem nulla duis deserunt incididunt ut excepteur labore culpa. Elit non commodo in eu minim quis reprehenderit est et. Irure dolor sint nisi consequat eu.","spans":[]}],"SidebarSectionNumber":"enable cross-platform models","SidebarSectionTitle":"recontextualize B2B functionalities","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Dolore dolore laborum ea ipsum. Aliquip ad nostrud excepteur consectetur laborum esse sit minim aliqua nulla esse dolore ad laborum magna.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
