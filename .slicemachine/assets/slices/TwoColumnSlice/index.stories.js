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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"strategize 24/7 interfaces","SectionTitle":"facilitate transparent portals","title":[{"type":"heading1","text":"Deploy 24/365 relationships","spans":[]}],"TitleImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Dolor excepteur elit nostrud ea ipsum. Amet excepteur ullamco duis ea eu dolor consequat occaecat sit.","spans":[]}],"Content":[{"type":"paragraph","text":"Occaecat voluptate nulla duis proident anim ut Lorem pariatur ad et excepteur incididunt eu labore. Velit laboris dolor laborum excepteur.","spans":[]}],"SidebarSectionNumber":"generate sexy deliverables","SidebarSectionTitle":"architect compelling infomediaries","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Nisi velit consequat in minim tempor velit laborum veniam quis quis commodo. Excepteur incididunt culpa est velit sit sint. Tempor magna do do fugiat mollit eu est id excepteur aute non.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
