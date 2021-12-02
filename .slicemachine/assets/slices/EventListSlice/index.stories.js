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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_list_slice","items":[{"Active":true,"Month":"redefine plug-and-play vortals","Start":4791,"End":4917,"Graphic":{"dimensions":{"width":1400,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/naturalselectiontour/f0a227be-2540-4002-85df-f7ea61dfd6b9_mock-graphic.png?auto=compress,format"},"Title":[{"type":"heading2","text":"Productize innovative methodologies","spans":[]}],"Location":[{"type":"paragraph","text":"Elit labore in enim amet culpa laborum anim laborum deserunt cupidatat.","spans":[]}],"Description":[{"type":"paragraph","text":"Deserunt enim consectetur ut fugiat magna incididunt sint ad. Labore ex excepteur ea amet fugiat reprehenderit cillum dolor eu quis sunt sint aute.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Mollit Lorem elit aute et.","spans":[]}],"SnowAmount":8240,"SnowUnits":"in"},{"Active":false,"Month":"strategize integrated e-markets","Start":497,"End":7889,"Graphic":{"dimensions":{"width":1400,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/naturalselectiontour/f0a227be-2540-4002-85df-f7ea61dfd6b9_mock-graphic.png?auto=compress,format"},"Title":[{"type":"heading2","text":"Matrix value-added e-markets","spans":[]}],"Location":[{"type":"paragraph","text":"Excepteur ullamco incididunt veniam est. Aute aliquip dolore do ut consequat consectetur dolor Lorem consectetur. Ipsum dolore amet id voluptate.","spans":[]}],"Description":[{"type":"paragraph","text":"Velit veniam cupidatat dolor nulla proident culpa proident nisi ea laboris. Quis ad reprehenderit deserunt ut eu magna esse aliqua exercitation dolore enim.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Duis nisi anim magna sint eiusmod aliqua dolor occaecat laboris mollit exercitation nostrud. Adipisicing magna qui ipsum nostrud nisi.","spans":[]}],"SnowAmount":9943,"SnowUnits":"in"},{"Active":false,"Month":"scale 24/365 e-services","Start":2469,"End":527,"Graphic":{"dimensions":{"width":1400,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/naturalselectiontour/f0a227be-2540-4002-85df-f7ea61dfd6b9_mock-graphic.png?auto=compress,format"},"Title":[{"type":"heading2","text":"Brand interactive supply-chains","spans":[]}],"Location":[{"type":"paragraph","text":"Sit Lorem nulla amet id ipsum dolore cupidatat Lorem dolor in et est. Do aliqua tempor laboris id labore labore exercitation nisi sint eiusmod aute eu incididunt cillum. Nostrud cillum minim adipisicing consectetur et sunt excepteur id labore Lorem sunt occaecat duis occaecat.","spans":[]}],"Description":[{"type":"paragraph","text":"Elit amet ex in exercitation anim irure Lorem do labore Lorem officia laboris irure fugiat deserunt. Qui commodo ut occaecat cillum id ullamco magna eu fugiat ullamco sit laboris sit occaecat excepteur.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Qui ut mollit sint nulla eiusmod incididunt commodo ad minim eu irure.","spans":[]}],"SnowAmount":7587,"SnowUnits":"in"}],"primary":{"SectionTitle":"disintermediate user-centric architectures","SectionNumber":"revolutionize ubiquitous synergies"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
