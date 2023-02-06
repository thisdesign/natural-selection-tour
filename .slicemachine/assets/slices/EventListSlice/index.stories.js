import MyComponent from '../../../../slices/EventListSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EventListSlice'
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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{"Active":true,"HideDate":true,"Month":"exist","Start":"electric","StartColor":"#e9537f","End":"eaten","EndColor":"#4efd5b","Graphic":{"dimensions":{"width":5848,"height":3899},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"},"Title":[{"type":"heading1","text":"Which","spans":[]}],"Location":[{"type":"paragraph","text":"Cillum dolore in voluptate proident cillum laboris enim sint velit non id laboris voluptate ullamco consequat.","spans":[]}],"Description":[{"type":"paragraph","text":"Excepteur irure quis sunt deserunt magna. Id ipsum incididunt culpa. Quis voluptate ipsum enim non deserunt amet ea anim irure deserunt labore mollit laboris consectetur laboris.","spans":[]}],"Status":"terrain-prep","SnowAvailable":true,"SnowDescription":[{"type":"paragraph","text":"Ipsum proident laboris incididunt sint magna occaecat consequat in consequat est culpa amet sint. Mollit occaecat irure do id aliquip eu reprehenderit. Sint ipsum voluptate dolore.","spans":[]}],"SnowAmount":45,"SnowUnits":"in","SnowPercent":58,"cta":"won","ctalink":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"SectionTitle":"full","SectionNumber":"exciting","CenterItems":false},"id":"_DefaultSlice","slice_type":"event_list_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
