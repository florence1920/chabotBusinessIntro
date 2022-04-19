<template>
  <div class="recomPro" id="recomPro">
			<div class="inner">
				<div class="slideWrap">
					<ul class="tickerSlide" id="tickerSlide">
						<li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
            <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
                        <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
                        <li>
							<a href="#">
								<p class="txt"><em>1[DIOR]</em>DIOR ADDICT LIP GLOW CORAL</p>
								<p class="price"><del><span class="pr">$</span>88</del><span class="wp"><span class="pr">$</span>56</span></p>
							</a>
						</li>
         
            
					</ul>
				</div>
			</div>
		</div>
		<!-- //recomPro e -->
</template>
<script>
  import $ from 'jquery'
  export default {
      methods: {
          flow() {
                $(document).ready(function(){
                var moveType = 0; 
                var moveSpeed = 2000; 
                var moveWork = false; 
                var movePause = false; 

                function tkSlide(){		
                    var $tkSlide = $('#tickerSlide'),
                    $tkSlidePos = $('#tickerSlide').css('left').replace(/[^-\d\.]/g, ''),
                    $tkWidth = $('#tickerSlide').width(),
                    $tklength = $('#tickerSlide li').length,
                    $tkSlideW = $tkWidth + 400,
                    $tkitemW = $('#tickerSlide li').width(),
                    $tkitemFirst = $('#tickerSlide li:first-child');

                    $tkSlide.css({
                    'left' : $tkSlidePos,
                    'width' : $tkWidth + $tkitemW
                    });
                    if(moveWork==false){
                    if(moveType==0){
                        $tkSlide.css('left' ,$tkSlidePos);
                        $tkSlide.animate({left : -$tkitemW},{duration:moveSpeed, easing:"linear", step:function(){
                        if(movePause==true){ 
                            $tkSlide.stop();
                        }
                        }, complete:function(){
                        $tkSlide.append("<li>" + $('#tickerSlide li:first-child').html() + "</li>");
                        $('#tickerSlide li:first-child').remove(); 
                        $tkSlide.css('left' ,'0');
                        tkSlide();
                        }});
                    }
                    }
                }
                $('#tickerSlide').parent().on("mouseenter", function(){
                    movePause=true;
                });
                $('#tickerSlide').parent().on("mouseleave", function(){
                    movePause=false;
                    tkSlide();
                });
                $('.slideWrap >a.bxBtn').on('click', function(){
                    var $thisClass = $(this).hasClass("bx-prev");

                    if($thisClass){
                    for(var i=0;i<5;i++){				
                        var $tkSlide = $('#tickerSlide'),				
                        $tkitem = $('#tickerSlide li:last-child()').html();

                        $('#tickerSlide li:first-child()').before("<li>" + $tkitem + "</li>");
                        $('#tickerSlide li:last-child()').remove();
                    }
                    $tkSlide.animate({left : 200}, 500, function(){
                        $tkSlide.css('left' ,'0');	
                    });
                    } else {
                    for(var i=0;i<5;i++){				
                        var $tkSlide = $('#tickerSlide'),				
                        $tkitem = $('#tickerSlide li:nth-child(1)').html();

                        $tkSlide.append("<li>" + $tkitem + "</li>");
                        $('#tickerSlide li:nth-child(1)').remove();
                    }
                    $tkSlide.animate({left : -200}, 500, function(){
                        $tkSlide.css('left' ,'0');	
                    });
                    
                    }
                });
                tkSlide();
                console.log('tktk');
                });
          }
      },
      mounted () {
            this.flow();
      }
  }
</script>

<style scoped>
  #recomPro{margin-bottom:40px;}
  #recomPro > div.inner{width:100%;margin:0 auto;}
  #recomPro .slideWrap{position:relative;overflow:hidden;height:337px;margin-bottom:28px;}
  #recomPro .tickerSlide{position:absolute;top:0px;left:0px;overflow:hidden;-webkit-transition-timing-function: linear; /* Safari and Chrome */transition-timing-function: linear;}
  #recomPro .tickerSlide li{float:left;width:200px;padding:33px 0 0 0;}
  #recomPro .tickerSlide li > a{display:block;}
  #recomPro .tickerSlide li > a p.txt{height:59px;padding:0 20px;font-size:13px;margin-bottom:12px;text-align:center;color:#424242;line-height:18px;overflow:hidden;}
  #recomPro .tickerSlide li > a p.txt em{display:block;margin-bottom:5px;text-align:center;font-weight:bold;}
  #recomPro .tickerSlide li > a p.price{font-family:Roboto;font-size:16px;color:#e5151a;font-weight:bold;text-align:center;}
  #recomPro .tickerSlide li > a p.price del{display:block;color:#999;font-weight:normal;}
  #recomPro .tickerSlide li > a p.price del span{font-size:18px;}
  #recomPro .tickerSlide li > a p.price span.wp{color:#e5151a;font-size:22px;}
  #recomPro .tickerSlide li > a p.price span.wp span.pr{font-size:22px;color:#e5151a;}
</style> 
