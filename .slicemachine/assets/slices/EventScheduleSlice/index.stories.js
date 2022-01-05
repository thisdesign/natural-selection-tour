import MyComponent from '../../../../slices/EventScheduleSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EventScheduleSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_schedule_slice","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"Date":"2021-02-14","Description":[{"type":"paragraph","text":"Magna labore aute sit esse labore sint duis labore sunt aliqua sint.","spans":[]}],"Link":{"link_type":"Web","url":"http://google.com"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"Date":"2012-01-02","Description":[{"type":"paragraph","text":"Id consequat Lorem id. Cupidatat est dolore ea enim labore aliquip proident cupidatat culpa. Nisi esse aute ut voluptate culpa ut qui consequat.","spans":[]}],"Link":{"link_type":"Web","url":"http://google.com"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"Date":"2014-03-31","Description":[{"type":"paragraph","text":"Ea minim laborum magna consectetur ipsum in aute officia duis enim tempor est commodo ad.","spans":[]}],"Link":{"link_type":"Web","url":"http://google.com"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"Date":"2017-02-04","Description":[{"type":"paragraph","text":"Elit irure magna minim duis veniam aliqua labore aliquip.","spans":[]}],"Link":{"link_type":"Web","url":"http://twitter.com"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"Date":"2019-07-17","Description":[{"type":"paragraph","text":"Sint amet exercitation laboris voluptate officia anim officia do. Amet consectetur tempor enim laboris qui nostrud.","spans":[]}],"Link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"SectionNumber":"integrate 24/7 experiences","SectionTitle":"evolve synergistic bandwidth","Active":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
