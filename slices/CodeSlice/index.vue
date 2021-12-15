<template>
  <section class="section site-padding code-slice">
    <div class="columns">
      <div class="col indented">
        <div class="set">
          <div class="title">
            <prismic-rich-text :field="slice.primary.Intro" />
          </div>
        </div>
        <div class="set">
          <div class="title">
            <p>{{ slice.primary.LocationTitle }}</p>
          </div>
          <div class="row">
            <div class="loction-rte">
              <prismic-rich-text :field="slice.primary.Locations" />
            </div>
          </div>
        </div>
        <div class="set">
          <div class="title">
            <p>{{ slice.primary.RiderTitle }}</p>
          </div>
          <div class="riders">
            <p
              v-for="(item, index) in $store.state.riders.results"
              :key="`riderName${index}`"
            >
              {{ item.data.Name[0].text }}
            </p>
          </div>
        </div>
        <div class="set">
          <div class="title">
            <prismic-rich-text :field="slice.primary.Footer" />
          </div>
        </div>
      </div>
      <div
        v-for="(col, colIndex) in columns"
        :key="`col${colIndex}`"
        class="col"
      >
        <div
          v-for="(set, setIndex) in slice.primary.ColumnTwo"
          :key="`col${colIndex}_set${setIndex}`"
          class="set"
        >
          <div
            v-for="(row, rowIndex) in set.text.split('\n')"
            :key="`col${colIndex}_set${setIndex}row${rowIndex}`"
            class="row"
          >
            <p
              v-for="(item, index) in row.split('||')"
              :key="`col${colIndex}_set${setIndex}row${rowIndex}item${index}`"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CodeSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  computed: {
    columns() {
      return [
        this.slice.primary.ColumnTwo,
        this.slice.primary.ColumnThree,
        this.slice.primary.ColumnFour,
      ]
    },
  },
  mounted() {
    console.log(this.slice.primary.ColumnTwo)
  },
}
</script>

<style lang="scss">
.code-slice {
  p {
    font-size: clamp(8px, 1vw, 12px);
    line-height: 1.1;
  }
  .loction-rte {
    p {
      margin-bottom: 0;
    }
  }
}
</style>

<style scoped lang="scss">
* {
  font-size: clamp(8px, 1vw, 12px);
  line-height: 1.1;
}
.section {
  color: #fff;
  font-family: 'Sneak';
  text-transform: uppercase;
  line-height: 1;
  border-top: 1px solid white;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: none;
  @include media-breakpoint-up(sm) {
    display: block;
  }
}
p {
  margin: 0;
  padding: 0;
}
.section-title,
.copywrite {
  padding-left: 1rem;
}
.riders {
  columns: 2;
}
.columns {
  display: flex;
}
.title {
  margin-bottom: 1.1em;
}
.col {
  width: 25%;
  padding: 0 1rem;
}
.indented {
  .riders,
  .row {
    padding-left: 2rem;
  }
}
.set {
  margin-bottom: 1.1em;
}
.row {
  display: flex;
  justify-content: space-between;
}
</style>
