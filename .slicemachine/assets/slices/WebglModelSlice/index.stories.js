import MyComponent from '../../../../slices/WebglModelSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/WebglModelSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"webgl_model_slice","items":[{"Model":{"title":"Prismic January Product Meetup","author_name":"Prismic","author_url":"https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/fiOwHYFkUz0/hqdefault.jpg","html":"<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/fiOwHYFkUz0?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},"Title":[{"type":"paragraph","text":"Adipisicing ut sit occaecat enim officia ipsum cupidatat. Aute veniam sunt sit tempor. Id et magna aute ad irure mollit enim id ex nostrud in esse enim.","spans":[]}],"Active":true},{"Model":{"title":"Introducing Slice Machine","author_name":"Prismic","author_url":"https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/iewZXv94XGY/hqdefault.jpg","html":"<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/iewZXv94XGY?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},"Title":[{"type":"paragraph","text":"Deserunt non ipsum velit magna laborum Lorem non cupidatat officia occaecat nostrud occaecat Lorem excepteur.","spans":[]}],"Active":false},{"Model":{"title":"Data Modelling — Create your Custom Types and Slices","author_name":"Prismic","author_url":"https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/c-ATzcy6VkI/hqdefault.jpg","html":"<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/c-ATzcy6VkI?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},"Title":[{"type":"paragraph","text":"Nulla officia Lorem officia exercitation do id minim nulla reprehenderit dolor cillum tempor.","spans":[]}],"Active":false},{"Model":{"url":"https://twitter.com/prismicio/status/1354112310252630016","author_name":"Prismic","author_url":"https://twitter.com/prismicio","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">We&#39;re launching a new <a href=\"https://twitter.com/hashtag/SliceContest?src=hash&amp;ref_src=twsrc%5Etfw\">#SliceContest</a> tomorrow along with Slice Machine upgrades.<br><br>Want to know more? Join us at tomorrow&#39;s Product Meet-up👇<a href=\"https://t.co/prYSypiAvB\">https://t.co/prYSypiAvB</a><br><br>We can&#39;t tell you any further details for now, but here&#39;s a sneak peek at the prizes👀 <a href=\"https://t.co/fV1eoGlEBh\">pic.twitter.com/fV1eoGlEBh</a></p>&mdash; Prismic (@prismicio) <a href=\"https://twitter.com/prismicio/status/1354112310252630016?ref_src=twsrc%5Etfw\">January 26, 2021</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"},"Title":[{"type":"paragraph","text":"Ad aliqua ex minim sint anim qui occaecat exercitation labore elit laborum magna. Irure consequat ipsum consectetur. Cupidatat magna magna incididunt id velit dolor ipsum anim amet consectetur.","spans":[]}],"Active":false},{"Model":{"url":"https://twitter.com/prismicio/status/1354835716430319617","author_name":"Prismic","author_url":"https://twitter.com/prismicio","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Does anyone want to create a wildly popular website for discussing &#39;Wall Street Bets&#39; using Prismic?<br><br>It may or may not have to look a lot like <a href=\"https://twitter.com/hashtag/reddit?src=hash&amp;ref_src=twsrc%5Etfw\">#reddit</a> and we won&#39;t make it private.<br><br>Just asking for some friends...</p>&mdash; Prismic (@prismicio) <a href=\"https://twitter.com/prismicio/status/1354835716430319617?ref_src=twsrc%5Etfw\">January 28, 2021</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"},"Title":[{"type":"paragraph","text":"Adipisicing minim est esse labore esse aliqua ut nostrud occaecat. Nostrud adipisicing ipsum aliqua occaecat cillum adipisicing eiusmod ea aliqua cupidatat irure.","spans":[]}],"Active":false}],"primary":{"SectionNumber":"recontextualize viral deliverables","SectionTitle":"brand dot-com infomediaries","Type":"Default","title":[{"type":"heading1","text":"Strategize revolutionary infomediaries","spans":[]}],"description":[{"type":"paragraph","text":"Mollit amet minim officia elit anim. Ea dolore non consectetur eiusmod laborum ullamco laborum amet.","spans":[]}],"VideoLoop":{"link_type":"Web","url":"http://google.com"},"VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"https://www.google.com"},"CtaText":"architect holistic e-markets","Featured":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
