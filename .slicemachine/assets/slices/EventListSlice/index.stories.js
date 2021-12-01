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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_list_slice","items":[
        {"Active":true,"Month":"strategize clicks-and-mortar metrics","Start":6543,"End":1424,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Strategize plug-and-play initiatives","spans":[]}],"Location":[{"type":"paragraph","text":"Veniam id labore dolore velit id veniam amet ullamco tempor ea consequat qui pariatur occaecat enim. Nisi nisi eiusmod Lorem velit id reprehenderit nostrud nisi qui occaecat ut fugiat eu reprehenderit.","spans":[]}],"Description":[{"type":"paragraph","text":"Nisi id eiusmod reprehenderit sint dolor culpa est excepteur cupidatat elit enim consectetur nisi ipsum deserunt. Eiusmod eiusmod qui in elit minim dolore enim incididunt qui. Nisi reprehenderit do non amet.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Do reprehenderit sunt quis minim aliqua magna et.","spans":[]}],"SnowAmount":8963,"SnowUnits":"in"},
        {"Active":true,"Month":"recontextualize killer synergies","Start":2438,"End":662,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Exploit turn-key infomediaries","spans":[]}],"Location":[{"type":"paragraph","text":"Labore non aute veniam proident incididunt id nulla proident culpa ipsum laborum ea anim velit. Excepteur veniam incididunt magna aute non magna consectetur dolore cupidatat. Anim excepteur sint consequat consectetur exercitation duis labore cillum dolor consectetur veniam commodo.","spans":[]}],"Description":[{"type":"paragraph","text":"Eu est veniam aute nulla labore cillum. Magna sunt eu fugiat veniam commodo velit fugiat id.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Consequat eu magna ea eu culpa nisi laborum velit. Amet incididunt elit irure duis laborum esse minim esse duis fugiat voluptate voluptate.","spans":[]}],"SnowAmount":7528,"SnowUnits":"in"},
        {"Active":true,"Month":"incentivize strategic relationships","Start":4590,"End":78,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Cultivate plug-and-play systems","spans":[]}],"Location":[{"type":"paragraph","text":"Enim in fugiat ut esse nisi ipsum ut id veniam mollit fugiat voluptate sint consequat. Ullamco minim magna exercitation veniam aliqua anim aute nostrud voluptate ullamco eiusmod ex nostrud eiusmod consectetur.","spans":[]}],"Description":[{"type":"paragraph","text":"Dolore aute nisi ex ex est est aliquip.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Mollit laborum duis laborum excepteur deserunt eiusmod culpa adipisicing.","spans":[]}],"SnowAmount":4190,"SnowUnits":"in"},
        {"Active":false,"Month":"strategize clicks-and-mortar metrics","Start":6543,"End":1424,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Strategize plug-and-play initiatives","spans":[]}],"Location":[{"type":"paragraph","text":"Veniam id labore dolore velit id veniam amet ullamco tempor ea consequat qui pariatur occaecat enim. Nisi nisi eiusmod Lorem velit id reprehenderit nostrud nisi qui occaecat ut fugiat eu reprehenderit.","spans":[]}],"Description":[{"type":"paragraph","text":"Nisi id eiusmod reprehenderit sint dolor culpa est excepteur cupidatat elit enim consectetur nisi ipsum deserunt. Eiusmod eiusmod qui in elit minim dolore enim incididunt qui. Nisi reprehenderit do non amet.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Do reprehenderit sunt quis minim aliqua magna et.","spans":[]}],"SnowAmount":8963,"SnowUnits":"in"},
      ],"primary":{"SectionTitle":"Section","SectionNumber":"00"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
