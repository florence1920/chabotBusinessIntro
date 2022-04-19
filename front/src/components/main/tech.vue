<template>
  <div class="techWrap">
    <div class="techHead">
      <p class="techTit" data-aos="fade-up" data-aos-duration="1000">The Global Top-Tier AI Technology</p>
      <div class="techCont" data-aos="fade-up" data-aos-duration="1100">
        <p>알체라는 설립부터 지금까지 끊임없이 AI를 진화시켜 왔습니다.</p>
        <p>알체라를 특별하게 만드는 것은 바로 이 AI 기술이며</p>
        <p>우리는 지금도 친밀하고 똑똑하며 무엇보다도 신뢰받는 AI를 제공함으로 꿈의 시대를 앞당기려 노력하고 있습니다.</p>
      </div>
    </div>
    <!-- techHeadEnd -->

    
    <div class="techDetail">
        <div class="techInfoAb1" id="techLeft">
            <div v-show="techCont">
                <p class="techTit" data-aos="fade-down">Visual AI</p>
                <p class="techCont">시각 정보의 학습을 통해 무엇이든 인식하고 분석할 수 있게 하는</p>
                <p class="techCont">알체라의 핵심 기술입니다.</p>
                <span class="techLink">Visual AI 기술소개</span><img class="tech_ico" src="../../assets/images/tech_ico.svg">
            </div>

            <div v-show="!techCont">
              <p class="techTit">AI Data</p>
              <p class="techCont">알체라는 국내와 베트남에 자체 데이터 센터를 보유, 대용량 DB 수집</p>
              <p class="techCont">및 라벨링 작업을 직접 수행하는 ‘Full-Stack’ AI 회사입니다.</p>
              <span class="techLink">AI Data 자세히 보기</span><img class="tech_ico" src="../../assets/images/tech_ico.svg">
            </div>
        </div>

        <div class="techImg">
          <img class="tech_1" src="../../assets/images/tech1.png" alt="">
          <img class="tech_2" src="../../assets/images/tech2.png" alt="">
        </div>
    </div>
    <!-- techDetail -->
  </div>
  <!-- techWrap -->
</template>

<script>
export default {
   data() {
    return {
      scroll: '',
      techCont : true,
      // techCont1 : {
      //   tit : 'Visual AI',
      //   techCont1 : '시각 정보의 학습을 통해 무엇이든 인식하고 분석할 수 있게 하는',
      //   techCont2 : '알체라의 핵심 기술입니다.',
      //   techdetail : 'Visual AI 기술소개',
      // },
      // techCont2 : {
      //   tit : 'AI Data',
      //   techCont1 : '알체라는 국내와 베트남에 자체 데이터 센터를 보유, 대용량 DB 수집',
      //   techCont2 : '및 라벨링 작업을 직접 수행하는 ‘Full-Stack’ AI 회사입니다.',
      //   techdetail : 'AI Data 자세히 보기',
      // }
    }
  },
  methods: {
   menu() {
    this.scroll = window.scrollY;
    console.log(this.scroll)
    if(this.scroll < 510){
      document.querySelector('#techLeft').className = 'techInfoAb1';
    }else if(this.scroll >= 510 && this.scroll < 1444){
      document.querySelector('#techLeft').className = 'techInfoFixed';
    }else if(this.scroll > 1444){
      document.querySelector('#techLeft').className = 'techInfoAb2';
    }

    if(this.scroll < 888){
      this.techCont = true;
    }else {
      this.techCont = false;
    }
   }
  },
  mounted() {
   window.addEventListener('scroll', this.menu)
  },
}
</script>

<style scoped>
  .techWrap {width:1440px; padding: 200px 0 0; margin: 0 auto;}

  .techWrap .techHead {padding: 0 0 100px; text-align: center;}
  .techWrap .techHead .techTit {font-size: 48px; font-weight: 900;}
  .techWrap .techHead .techCont {margin:40px 0 0; font-size: 18px; font-weight: 200; line-height: 30px;}

  .techWrap .techDetail {position: relative; height: 1500px; transition:0.5s;}
  .techWrap .techDetail .techInfoAb1 {position: absolute;top: 1206px;left: 0;}
  .techWrap .techDetail .techInfoFixed {position: fixed;top: 1206px;left:231px;}
  .techWrap .techDetail .techInfoAb2 {position: absolute;top: 2106px;left: 0;}
  .techWrap .techDetail #techLeft .techTit {margin:0 0 25px; font-size: 28px; color:#1C4AB4; line-height: 1.36; font-weight: 700;}
  .techWrap .techDetail #techLeft .techCont {font-size: 18px; line-height: 1.56; font-weight: 200;}
  .techWrap .techDetail #techLeft .techLink {margin:60px 0 0; font-size: 20px; line-height: 22px; color: #406eff;}
  .techWrap .techDetail #techLeft .tech_ico {margin:60px 0 0 10px;}

  .techWrap .techDetail .techImg {overflow: hidden; padding:0 0 0 700px;}
  .techWrap .techDetail .techImg > * {float:left;}
  .techWrap .techDetail .techImg .tech_1 {margin: 0 0 100px;}
  
</style>