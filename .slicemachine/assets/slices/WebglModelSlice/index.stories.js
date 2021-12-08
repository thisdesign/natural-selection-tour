import MyComponent from '../../../../slices/WebglModelSlice'
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/WebglModelSlice',
}

export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone,
  },
  methods: {
    resolve() {
      return MyComponent
    },
  },
  data() {
    return {
      mock: {
        variation: 'default-slice',
        name: 'Default slice',
        slice_type: 'webgl_model_slice',
        items: [
          {
            Model: {
              url: 'https://twitter.com/prismicio/status/1356293316158095361',
              author_name: 'Prismic',
              author_url: 'https://twitter.com/prismicio',
              html: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Gatsby is a popular choice for Prismic users and we work hard on delivering a CMS that plays to its strengths.<br><br>But, what makes <a href="https://twitter.com/GatsbyJS?ref_src=twsrc%5Etfw">@GatsbyJS</a> so popular?<br><br>Here are some of <a href="https://twitter.com/mxstbr?ref_src=twsrc%5Etfw">@mxstbr</a>&#39;s thoughts on Gatsby&#39;s success and how they&#39;re improving developer experience.<a href="https://t.co/ZjCPvsWWUD">https://t.co/ZjCPvsWWUD</a> <a href="https://t.co/EQqzJpeNKl">pic.twitter.com/EQqzJpeNKl</a></p>&mdash; Prismic (@prismicio) <a href="https://twitter.com/prismicio/status/1356293316158095361?ref_src=twsrc%5Etfw">February 1, 2021</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n',
              width: 550,
              height: null,
              type: 'rich',
              cache_age: '3153600000',
              provider_name: 'Twitter',
              provider_url: 'http://www.twitter.com/',
              version: '1.0',
            },
            Title: [
              {
                type: 'paragraph',
                text: 'Jackson Hole',
                spans: [],
              },
            ],
          },
          {
            // Model: {
            //   url: 'https://twitter.com/prismicio/status/1354112310252630016',
            //   author_name: 'Prismic',
            //   author_url: 'https://twitter.com/prismicio',
            //   html: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;re launching a new <a href="https://twitter.com/hashtag/SliceContest?src=hash&amp;ref_src=twsrc%5Etfw">#SliceContest</a> tomorrow along with Slice Machine upgrades.<br><br>Want to know more? Join us at tomorrow&#39;s Product Meet-up👇<a href="https://t.co/prYSypiAvB">https://t.co/prYSypiAvB</a><br><br>We can&#39;t tell you any further details for now, but here&#39;s a sneak peek at the prizes👀 <a href="https://t.co/fV1eoGlEBh">pic.twitter.com/fV1eoGlEBh</a></p>&mdash; Prismic (@prismicio) <a href="https://twitter.com/prismicio/status/1354112310252630016?ref_src=twsrc%5Etfw">January 26, 2021</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n',
            //   width: 550,
            //   height: null,
            //   type: 'rich',
            //   cache_age: '3153600000',
            //   provider_name: 'Twitter',
            //   provider_url: 'http://www.twitter.com/',
            //   version: '1.0',
            // },
            Title: [
              {
                type: 'paragraph',
                text: 'Baldface Lodge',
                spans: [],
              },
            ],
          },
        ],
        primary: {
          SectionNumber: 'streamline strategic experiences',
          SectionTitle: 'synergize cross-platform technologies',
          Type: 'Hero',
          title: [
            {
              type: 'heading1',
              text: 'Natural(ly Enhanced) Terrain Designed to Inspire Creativity, Progression, + Self-Expression.',
              spans: [],
            },
          ],
          description: [
            {
              type: 'paragraph',
              text: 'Held at the most revered locations in the world:',
              spans: [],
            },
          ],
          VideoLoop: {
            url: 'https://twitter.com/prismicio/status/1356293316158095361',
            author_name: 'Prismic',
            author_url: 'https://twitter.com/prismicio',
            html: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Gatsby is a popular choice for Prismic users and we work hard on delivering a CMS that plays to its strengths.<br><br>But, what makes <a href="https://twitter.com/GatsbyJS?ref_src=twsrc%5Etfw">@GatsbyJS</a> so popular?<br><br>Here are some of <a href="https://twitter.com/mxstbr?ref_src=twsrc%5Etfw">@mxstbr</a>&#39;s thoughts on Gatsby&#39;s success and how they&#39;re improving developer experience.<a href="https://t.co/ZjCPvsWWUD">https://t.co/ZjCPvsWWUD</a> <a href="https://t.co/EQqzJpeNKl">pic.twitter.com/EQqzJpeNKl</a></p>&mdash; Prismic (@prismicio) <a href="https://twitter.com/prismicio/status/1356293316158095361?ref_src=twsrc%5Etfw">February 1, 2021</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n',
            width: 550,
            height: null,
            type: 'rich',
            cache_age: '3153600000',
            provider_name: 'Twitter',
            provider_url: 'http://www.twitter.com/',
            version: '1.0',
          },
          CtaLink: { link_type: 'Web', url: 'https://slicemachine.dev' },
          CtaText: 'Explore',
          Featured: false,
        },
        id: '_DefaultSlice',
      },
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
})
_DefaultSlice.storyName = 'Default slice'
