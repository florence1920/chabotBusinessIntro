<template>
  <div class="navWrap" @mouseover="hover" @mouseleave="leave">
      <div class="navInner">
        <div v-show="isActive">
          <img src="../../assets/images/head_logo_blue.svg" alt="">
        </div>
        <div v-show="!isActive">
          <img src="../../assets/images/head_logo_wh.svg" alt="">
        </div>

        <ul class="menuWrap">
          <li>
              <p class="menuTit">기술</p>
              <ul class="menuDepth">
                 <li>Visual AI</li>
                 <li>AI Data</li>
              </ul>
          </li>
          <li>
              <p class="menuTit">제품</p>
              <ul class="menuDepth">
                 <li>AIIR SDK</li>
                 <li>AIIR API</li>
              </ul>
          </li>
          <li>
              <p class="menuTit">솔루션</p>
              <ul class="menuDepth">
                 <li>AIIR ID</li>
                 <li>AIIR Pass</li>
                 <li>AIIR Scout</li>
                 <li>Firescout</li>
              </ul>
          </li>
          <li>
              <p class="menuTit">솔루션</p>
              <ul class="menuDepth">
                 <li>AIIR ID</li>
                 <li>AIIR Pass</li>
                 <li>AIIR Scout</li>
                 <li>Firescout</li>
              </ul>
          </li>
          <li>
              <p class="menuTit">회사 소개</p>
              <ul class="menuDepth">
                 <li>알체라 소개</li>
                 <li>보도자료</li>
                 <li>IR</li>
                 <li>인재채용</li>
                 <li>제휴/도입문의</li>
              </ul>
          </li>
        </ul>
        <!-- menuWrap End -->

        <div class="btnWrap">
          <div class="blueBtn"><span>서비스문의</span></div>
          <div class="whBtn"><span>KOR 
              <img v-show="isActive" src="../../assets/images/down_arrow_b.png" alt="">
              <img v-show="!isActive" src="../../assets/images/down_arrow_w.png" alt="">
          </span></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    hover() {
      this.isActive = true;
      let depth = document.querySelectorAll('.menuDepth');
      console.log(depth);
      document.querySelector('.navWrap').classList.add('active');
      depth.forEach(e => {
        e.style.display = 'block';
      });
    },
    leave(){
      this.isActive = false;
      let depth = document.querySelectorAll('.menuDepth');
      document.querySelector('.navWrap').classList.remove('active');
      depth.forEach(e => {
        e.style.display = 'none';
      });
    }
  },

}
</script>

<style scoped>
  .navWrap {width: 100%; position: absolute; z-index: 2; color:rgb(255, 255, 255);}
  .active {width: 100%; background: rgb(255, 255, 255); color:#000;}

  .navWrap .navInner {overflow: hidden; width: 1440px; margin: 0 auto; padding: 35px 0 60px;}
  .navWrap .navInner > * {float: left;}
  .navWrap .navInner .menuWrap {overflow: hidden; margin:20px 0 0 200px;}
  .navWrap .navInner .menuWrap > li {float: left; width: 90px; margin:0 50px 0 0;}
  .navWrap .navInner .menuWrap li .menuTit {font-size:18px; font-weight: 600;}
  .navWrap .navInner .menuWrap li .menuDepth {display: none; margin:30px 0 0;}
  .navWrap .navInner .menuWrap li .menuDepth li {margin:0 0 20px; font-size: 15px; font-weight: 300;}

  .navWrap .navInner .btnWrap {overflow: hidden; float: right; margin: 4.5px 0 0;}
  .navWrap .navInner .btnWrap > * {float: left; line-height: 45px; border-radius:30px;}
  .navWrap .navInner .btnWrap .blueBtn {width: 120px; height: 45px; background: #406EFF; color: #fff; padding: 0 20px;}
  .navWrap .navInner .btnWrap .whBtn {width: 100px; height: 45px; padding: 0 25px; margin: 0 0 0 15px; border: 1px solid #ddd; position: relative;}
  .navWrap .navInner .btnWrap .whBtn img {position: absolute;top: 50%;right:10px;transform: translate(-50%);}
</style>