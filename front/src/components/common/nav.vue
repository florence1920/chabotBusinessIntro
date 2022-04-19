<template>
  <div class="navWrap">
      <div class="navInner">
        <img src="../../assets/images/head_logo_wh.svg" alt="">

        <ul class="menuWrap">
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navWrap {width: 100%; height: 500px; position: absolute;top: 0;left: 0;}
  .navWrap .navInner {overflow: hidden; width: 1440px; margin: 0 auto; padding: 35px 0 0;  background: rgb(216, 216, 216); position: relative;}
  .navWrap .navInner > * {float: left;}
  .navWrap .navInner .menuWrap {overflow: hidden;}
  .navWrap .navInner .menuWrap li {float: left;}
</style>