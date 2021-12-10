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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"cultivate user-centric metrics","SectionTitle":"evolve viral e-services","title":[{"type":"heading1","text":"Repurpose rich networks","spans":[]}],"description":[{"type":"paragraph","text":"Ad ipsum exercitation nisi velit aliqua quis in elit ad ad labore id magna excepteur.","spans":[]}],"Content":[{"type":"paragraph","text":"Sunt voluptate aute culpa reprehenderit reprehenderit veniam sunt nostrud aliqua elit. Qui dolore sit adipisicing labore sunt nostrud nulla laboris Lorem aliquip do.","spans":[]}],"SidebarSectionNumber":"generate seamless portals","SidebarSectionTitle":"whiteboard plug-and-play web-readiness","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Sit eiusmod commodo enim in quis dolore.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
