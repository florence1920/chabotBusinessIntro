<template>
  <div class="sumWrap">
    <p class="sumTit">Make your AI Dreams a Reality</p>
    <div class="contWrap">
      <p class="sumCont">알체라는 얼굴, 영상인식 Visual AI 분야의 국내 1위 업체로</p>
      <p class="sumCont">인공지능으로 고객의 삻과 사회를 혁신하는 AI 회사입니다.</p>
    </div>

    <ul class="boxWrap">
      <li>
        <img src="../../assets/images/sum_1.svg" alt="">
        <div class="sumPoint">
          <span class="point_1">국내 <span class="point_2">1</span> 위</span>
        </div>
        <div class="sumCont">
          <p class="contTit">NIST FRVT 2개 부문 국내 1위</p> 
          <p class="cont">*미국 국립표준기술연구소</p> 
        </div>
      </li>
      <li>
        <img src="../../assets/images/sum_2.svg" alt="">
        <div class="sumPoint">
          <span class="point_1"><span class="point_2">3.12</span>억대</span>
        </div>
        <div class="sumCont">
          <p class="contTit">현재까지 알체라 AI기술이 적용된 카메라 개수</p> 
          <p class="cont">*미국 국립표준기술연구소</p> 
        </div>
      </li>
      <li>
        <img src="../../assets/images/sum_3.svg" alt="">
        <div class="sumPoint">
          <span class="point_1"><span class="point_2">99.9</span>%</span>
        </div>
        <div class="sumCont">
          <p class="contTit">알체라 AIIR SDK 얼굴인식 정확도</p> 
          <p class="cont">*AIIR SDK - AI 얼굴인식엔진</p> 
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .sumWrap {width: 1440px; margin: 0 auto; padding: 200px 0 0; text-align:center;}
  .sumWrap .sumTit {font-size: 45px; font-weight: 600;}
  .sumWrap .contWrap {margin:40px 0 0; font-size: 20px; font-weight: 300; line-height: 30px;}

  .sumWrap .boxWrap {overflow: hidden; margin:100px 0 0; width: 100%; height: 380px;}
  .sumWrap .boxWrap li {float: left; margin:0 2% 0; padding: 48px 50px; width: 30%; height: 370px; border-radius: 20px; box-shadow: 0 5px 15px 0 rgb(12, 37, 75,  0.15) }
  .sumWrap .boxWrap li:nth-child(3) {margin:0 0 0 2%;}
  .sumWrap .boxWrap li img {display: block; width: 60px; margin: 0 auto 20px; }
  .sumWrap .boxWrap li .sumPoint .point_1 {font-weight: 600; font-size: 20px; line-height: 1.54;}
  .sumWrap .boxWrap li .sumPoint .point_2 {font-weight: 900; font-size: 56px; color: #1c4ab4;}
  .sumWrap .boxWrap li .sumCont {margin:30px 0 0;}
  .sumWrap .boxWrap li .sumCont .contTit {font-weight: 600;}
  .sumWrap .boxWrap li .sumCont .cont {margin:10px 0; color: #546681; }

</style>