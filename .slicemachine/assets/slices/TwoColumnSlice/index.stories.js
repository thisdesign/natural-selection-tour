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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"transform rich blockchains","SectionTitle":"mesh sexy portals","title":[{"type":"heading1","text":"Unleash strategic e-business","spans":[]}],"description":[{"type":"paragraph","text":"Elit ad deserunt et dolore. Enim consectetur exercitation nostrud duis ea commodo ea non non sit. Nostrud ut excepteur sint proident velit duis velit esse esse dolore mollit voluptate velit anim.","spans":[]}],"Content":[{"type":"paragraph","text":"Fugiat magna mollit reprehenderit ad qui.","spans":[]}],"SidebarSectionNumber":"evolve proactive ROI","SidebarSectionTitle":"scale sticky mindshare","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Deserunt mollit duis sunt dolore eu. Officia ex sint tempor sunt irure dolor veniam cupidatat tempor ipsum dolor. Aliqua ex enim in aliqua anim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
