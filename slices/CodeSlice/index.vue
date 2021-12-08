<template>
  <section class="section site-padding">
    <p class="title section-title">Welcome to NST Version 2.0</p>
    <div class="columns">
      <div class="col indented">
        <div class="set">
          <div class="title">
            <p>directory:\></p>
          </div>
        </div>
        <div class="set">
          <div class="title">
            <p>Locations</p>
          </div>
          <div class="row">
            <p>Jackson Hole</p>
          </div>
          <div class="row">
            <p>Baldface lodge</p>
          </div>
          <div class="row">
            <p>Tordrillo range</p>
          </div>
        </div>
        <div class="set">
          <div class="title">
            <p>Riders</p>
          </div>
          <div class="riders">
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
            <p>Mikkel Bang</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="set">
          <p class="title">Commands:</p>
          <div class="row">
            <p>Download media kit</p>
            <p>ALT-D</p>
          </div>
          <div class="row">
            <p>Scroll to top</p>
            <p>ESC</p>
          </div>
          <div class="row">
            <p>share page</p>
            <p>alt-s</p>
          </div>
          <div class="row">
            <p>toggle grid</p>
            <p>alt-t</p>
          </div>
          <div class="row">
            <p>background white</p>
            <p>alt-w</p>
          </div>
          <div class="row">
            <p>background black</p>
            <p>alt-b</p>
          </div>
        </div>
        <div class="set">
          <div class="row">
            <p>access:</p>
            <p>granted</p>
          </div>
          <div class="row">
            <p>permissions:</p>
            <p>enabled</p>
          </div>
          <div class="row">
            <p>installation:</p>
            <p>complete</p>
          </div>
        </div>
        <div class="set">
          <p class="title">baud rate:</p>
          <div class="row">
            <p>Download media kit</p>
            <p>ALT-D</p>
          </div>
          <div class="row">
            <p>Scroll to top</p>
            <p>ESC</p>
          </div>
          <div class="row">
            <p>share page</p>
            <p>alt-s</p>
          </div>
          <div class="row">
            <p>toggle grid</p>
            <p>alt-t</p>
          </div>
          <div class="row">
            <p>background white</p>
            <p>alt-w</p>
          </div>
          <div class="row">
            <p>background black</p>
            <p>alt-b</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="set">
          <div class="row">
            <p>access:</p>
            <p>granted</p>
          </div>
          <div class="row">
            <p>permissions:</p>
            <p>enabled</p>
          </div>
          <div class="row">
            <p>installation:</p>
            <p>complete</p>
          </div>
        </div>
        <div class="set">
          <p class="title">baud rate:</p>
          <div class="row">
            <p>Download media kit</p>
            <p>ALT-D</p>
          </div>
          <div class="row">
            <p>Scroll to top</p>
            <p>ESC</p>
          </div>
          <div class="row">
            <p>share page</p>
            <p>alt-s</p>
          </div>
        </div>
        <div class="set">
          <div class="row">
            <p>access:</p>
            <p>granted</p>
          </div>
          <div class="row">
            <p>permissions:</p>
            <p>enabled</p>
          </div>
          <div class="row">
            <p>installation:</p>
            <p>complete</p>
          </div>
        </div>
        <div class="set">
          <p class="title">baud rate:</p>
          <div class="row">
            <p>Download media kit</p>
            <p>ALT-D</p>
          </div>
          <div class="row">
            <p>Scroll to top</p>
            <p>ESC</p>
          </div>
          <div class="row">
            <p>share page</p>
            <p>alt-s</p>
          </div>
          <div class="row">
            <p>toggle grid</p>
            <p>alt-t</p>
          </div>
          <div class="row">
            <p>background white</p>
            <p>alt-w</p>
          </div>
          <div class="row">
            <p>background black</p>
            <p>alt-b</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="set">
          <div class="row">
            <p>Download media kit</p>
            <p>ALT-D</p>
          </div>
          <div class="row">
            <p>Scroll to top</p>
            <p>ESC</p>
          </div>
          <div class="row">
            <p>share page</p>
            <p>alt-s</p>
          </div>
          <div class="row">
            <p>toggle grid</p>
            <p>alt-t</p>
          </div>
          <div class="row">
            <p>background white</p>
            <p>alt-w</p>
          </div>
          <div class="row">
            <p>background black</p>
            <p>alt-b</p>
          </div>
        </div>
        <div class="set">
          <div class="title">
            <p>C: \></p>
          </div>
        </div>
      </div>
    </div>
    <div class="copywrite">
      <p>© copyright 2022 nst</p>
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
}
</script>

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
