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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"streamline scalable vortals","SectionTitle":"harness 24/7 convergence","title":[{"type":"heading1","text":"Iterate real-time synergies","spans":[]}],"description":[{"type":"paragraph","text":"Cupidatat id dolore ex qui labore duis magna. Officia non dolore sint dolor exercitation quis commodo et tempor non. Culpa velit elit aliquip adipisicing dolor dolore sit nulla.","spans":[]}],"Content":[{"type":"paragraph","text":"Adipisicing in reprehenderit duis dolor duis aliqua dolore proident magna in proident qui. Aliqua ex tempor reprehenderit ad voluptate et Lorem fugiat irure fugiat sit.","spans":[]}],"SidebarSectionNumber":"empower 24/365 ROI","SidebarSectionTitle":"harness real-time portals","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Ea dolor cupidatat velit labore adipisicing incididunt velit consequat in commodo reprehenderit minim cupidatat velit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
