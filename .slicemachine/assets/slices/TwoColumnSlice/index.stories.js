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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"enhance plug-and-play action-items","SectionTitle":"aggregate cross-media e-services","title":[{"type":"heading1","text":"Integrate interactive e-services","spans":[]}],"description":[{"type":"paragraph","text":"Adipisicing id velit aliqua.","spans":[]}],"Content":[{"type":"paragraph","text":"Elit aliqua ullamco laborum ex fugiat officia. Ullamco ullamco mollit elit veniam aliqua tempor. Et occaecat minim occaecat eiusmod laborum occaecat anim.","spans":[]}],"SidebarSectionNumber":"architect holistic convergence","SidebarSectionTitle":"deploy 24/365 paradigms","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Id sit commodo elit sunt magna adipisicing est aliqua incididunt non sunt proident do qui. Nisi minim non id amet sunt ea non magna anim amet et irure.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
