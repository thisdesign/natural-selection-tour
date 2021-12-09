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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_list_slice","items":[{"Active":true,"Month":"enhance 24/7 portals","Start":7776,"End":1499,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Embrace sexy e-tailers","spans":[]}],"Location":[{"type":"paragraph","text":"Laborum occaecat duis laboris ut elit ullamco voluptate commodo laborum laborum. Minim deserunt amet eu incididunt sunt. Dolor do est sint ullamco duis proident non nulla culpa fugiat.","spans":[]}],"Description":[{"type":"paragraph","text":"Ipsum aliqua nulla dolor incididunt voluptate sit irure sunt nulla pariatur irure tempor elit enim. Id ad id officia nostrud amet do anim excepteur consectetur consequat nisi voluptate.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Pariatur consequat sint labore labore Lorem ut aute id est fugiat nisi tempor eiusmod anim nisi. Veniam dolor sit id adipisicing.","spans":[]}],"SnowAmount":6111,"SnowUnits":"in"},{"Active":false,"Month":"productize back-end web services","Start":4312,"End":4785,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Cultivate sticky deliverables","spans":[]}],"Location":[{"type":"paragraph","text":"In exercitation voluptate culpa veniam adipisicing amet mollit commodo ipsum eu occaecat occaecat et cupidatat.","spans":[]}],"Description":[{"type":"paragraph","text":"Dolor non minim ullamco culpa cillum ipsum aliquip ad proident mollit commodo aute velit occaecat. Magna ea do pariatur eu do enim aliquip. Ullamco eiusmod excepteur dolore duis eu dolor nulla.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Labore tempor tempor nulla do ipsum labore excepteur consequat ad aliqua proident sunt minim sit. Lorem ullamco eu est incididunt ullamco minim magna fugiat aliqua tempor aute proident excepteur ad.","spans":[]}],"SnowAmount":8355,"SnowUnits":"in"},{"Active":false,"Month":"leverage open-source content","Start":9329,"End":8769,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Matrix interactive models","spans":[]}],"Location":[{"type":"paragraph","text":"Et aliqua ipsum amet consequat. Eu occaecat fugiat ipsum ipsum sit velit nisi consequat reprehenderit sunt nulla commodo dolore eiusmod.","spans":[]}],"Description":[{"type":"paragraph","text":"Amet pariatur voluptate tempor labore dolor magna enim aliquip incididunt mollit dolor officia est est ipsum.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Est exercitation esse nisi ut enim qui aliquip ad labore officia pariatur fugiat amet officia ea. Labore duis pariatur pariatur et exercitation officia. Id ipsum eu ut commodo et voluptate mollit deserunt non.","spans":[]}],"SnowAmount":4767,"SnowUnits":"in"},{"Active":false,"Month":"generate collaborative deliverables","Start":5066,"End":1674,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Maximize ubiquitous experiences","spans":[]}],"Location":[{"type":"paragraph","text":"Ad sint ea veniam occaecat consectetur velit nisi. Id ex proident ipsum ullamco. Nostrud dolore ad aliqua incididunt cupidatat ex sit sunt qui.","spans":[]}],"Description":[{"type":"paragraph","text":"Eu sint aute laboris pariatur duis proident eiusmod nostrud occaecat excepteur dolore enim nulla adipisicing anim. Anim enim cillum reprehenderit occaecat proident aute aute enim est aute dolore esse tempor labore.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Exercitation id voluptate proident Lorem sint irure velit quis ullamco. Id excepteur anim enim velit.","spans":[]}],"SnowAmount":5415,"SnowUnits":"in"}],"primary":{"SectionTitle":"scale front-end communities","SectionNumber":"reinvent dynamic communities"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
