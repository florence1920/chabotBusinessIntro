<template>
  <div class="visualWrap">
      <video muted autoplay loop>
        <source  src="../../assets/video/main_viusal_01.mp4" type="video/mp4" >
      </video>
      <div class="shadow"></div>
      <div class="txtWrap">
          <div class="txt_1">
              <p class="tit">Make your AI</p>
              <p class="tit">Dreams a Reality</p>
          </div>
          <div class="txt_2">
              <p class="sub">Innovate Your Everyday Life With</p>
              <p class="tit">Trusted AI</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    txtRoller() {
      console.log('hello');
    }
  },
  mounted () {
    // setInterval(() => {
    //   this.txtRoller()
    // }, 1000);
  },
}
</script>

<style scoped>
  .visualWrap {}
  .visualWrap video {position: relative; z-index: 0;}
  .visualWrap .shadow {width: 100%; height: 1080px; background-color: rgba(0, 0, 0, 0.4 ); position: absolute;top: 0;left: 0; z-index: 1;}
  
  .visualWrap .txtWrap {width: 100%; color: #fff; position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);z-index: 3;}
  .visualWrap .txtWrap .tit {font-size: 120px; font-weight: 600;}
  .visualWrap .txtWrap .sub {margin:0 0 40px; font-size: 32px; font-weight: 300;}
  .visualWrap .txtWrap .txt_1 {text-align: center;}
  .visualWrap .txtWrap .txt_2 {position: absolute; top: 0;left: 0;}
</style> 