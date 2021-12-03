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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"redefine efficient metrics","SectionTitle":"grow synergistic networks","title":[{"type":"heading1","text":"Scale enterprise e-commerce","spans":[]}],"description":[{"type":"paragraph","text":"Cupidatat aute voluptate sit id labore ipsum veniam adipisicing pariatur Lorem minim.","spans":[]}],"Content":[{"type":"paragraph","text":"Quis velit laboris duis. Nisi ullamco tempor voluptate non commodo.","spans":[]}],"SidebarSectionNumber":"generate dynamic initiatives","SidebarSectionTitle":"grow best-of-breed web services","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Ut laboris duis deserunt.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
