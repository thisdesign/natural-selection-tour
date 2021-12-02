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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"01","SectionTitle":"Section Title","title":[{"type":"heading1","text":"Revolutionize open-source infomediaries","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat non cillum sit esse labore.","spans":[]}],"Content":[{"type":"paragraph","text":"Amet cupidatat ipsum adipisicing excepteur exercitation do eu est anim labore cillum occaecat. Aute laborum irure veniam est ex ea ex. Veniam commodo do cillum et officia et deserunt aliquip cupidatat in labore et cillum pariatur.","spans":[]}],"SidebarSectionNumber":"01","SidebarSectionTitle":"Status","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Consectetur nostrud fugiat officia cillum in commodo nulla ad cillum.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
