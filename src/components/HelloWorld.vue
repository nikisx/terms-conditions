<template>
  <div class="main-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="top-text header-text" >
            <!-- <h6>Над 300+ доволни клиенти</h6> -->
            <h2 class="nice-font" style="text-transform: none;">Добавете сигурност за вашия бизнес</h2>
          </div>
        </div>
        <div class="col-lg-12">
         
        </div>
        <div class="col-lg-10 offset-lg-1 icons-home" >
          <ul class="categories" style="display: flex; gap: 20px;">
            <li><a @click="scrollTo(isMobile ? 1200 : 900)" style="cursor: pointer"><span class="icon"><img src="../assets/images/icons8-terms-and-conditions-64.png" alt="Home"></span> Общи условия за уебсайт</a></li>
            <li><a @click="scrollTo(isMobile ? 2100 : 1350)" style="cursor: pointer"><span class="icon"><img src="../assets/images/icons8-negotiation-64.png" alt="Food"></span> Общи условия за онлайн магазин</a></li>
            <li><a @click="scrollTo(isMobile ? 3550 : 1800)" style="cursor: pointer" ><span class="icon"><img src="../assets/images/icons8-gdpr-64.png" alt="Vehicle"></span> Поверителност на личните данни</a></li>
            <li><a @click="scrollTo(isMobile ? 4500 : 2200)" style="cursor: pointer" ><span class="icon"><img src="../assets/images/scales-justice-lawyer-svgrepo-com.svg" alt="Vehicle"></span>Консултация</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="col-lg-12 nice-font">
          <div class="section-heading">
            <h2>Popular Categories</h2>
            <h6>Check Them Out</h6>
          </div>
  </div> -->
  <!-- <div class="icons-wrapper">
    <div style="display:flex; flex-direction: column">
      <div @click="selectedIconTab = 1" class="icon-container" style="border-top-left-radius: 10px;" :style="{background: selectedIconTab == 1 ? '#2b2d42' : '#8d99af'}"><span class="icon-new"><img src="../assets/images/search-icon-01.png" alt=""></span> Apartaments</div>
      <div @click="selectedIconTab = 2" class="icon-container" :style="{background: selectedIconTab == 2 ? '#2b2d42' : '#8d99af'}"><span class="icon-new"><img src="../assets/images/search-icon-02.png" alt=""></span> Food</div>
      <div @click="selectedIconTab = 3" class="icon-container" :style="{background: selectedIconTab == 3 ? '#2b2d42' : '#8d99af'}"><span class="icon-new"><img src="../assets/images/search-icon-04.png" alt=""></span> Shop</div>
    </div>
    <transition name="slide-fade" mode="out-in">
        <div v-if="selectedIconTab == 1" style="display: flex;align-items: center;gap: 52px;">
      <div style="width: 43%;">
          <h4 class="nice-font" style="color: white; font-size: 20px;">One Of The Most Trending Stuffs Right Now!</h4>
          <p style="color: white;">Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites.</p>
        </div>
        <img src="../assets/images/tabs-image-01.jpg" style="width: 286px;height: 292px;border-radius: 10px;" alt="">
      </div>
      <div v-else-if="selectedIconTab == 2" style="display: flex;align-items: center;gap: 52px;">
      <div style="width: 43%;">
          <h4 class="nice-font" style="color: white; font-size: 20px;">Food and Lifestyle category is here</h4>
          <p style="color: white;">You can feel free to download, edit and apply this template for your website. Please tell your friends about TemplateMo website.</p>
        </div>
        <img src="../assets/images/tabs-image-02.jpg" style="width: 286px;height: 292px;border-radius: 10px;" alt="">
      </div>
      <div v-else-if="selectedIconTab == 3" style="display: flex;align-items: center;gap: 52px;">
      <div style="width: 43%;">
          <h4 class="nice-font" style="color: white; font-size: 20px;">Shopping List: Images from Unsplash</h4>
          <p style="color: white;">Image credits go to Unsplash website that provides free stock photos for anyone. Images used in this Plot Listing template are from Unsplash.</p>
        </div>
        <img src="../assets/images/tabs-image-04.jpg" style="width: 286px;height: 292px;border-radius: 10px;" alt="">
      </div>
    </transition>
  </div> -->

  <div class="recent-listing">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Услуги</h2>
          </div>
        </div>
       <section id="services" class="services-wrapper">
          <article id="terms" class="service-details">
            <b v-if="isMobile" class="nice-font service-name ">Общи условия за сайт</b>
            <img class="service-image" src="../assets/images/terms-and-conditions.jpg" alt="">
            <div class="services-row">
              <div class="service-info nice-font">
                <b class="nice-font service-name desctop">Общи условия за сайт</b>
                <p style="text-align: justify;">Всеки собственик на сайт влиза в регулирани от правото отношения със 
                  своите потребители, без значение дали става въпрос за онлайн магазин или чисто информативен сайт. 
                  В редица случаи, общите условия за подобен тип сайтове се пренебрегват и това води до неблагоприятни 
                  последствия за създателите им. Нашият екип от юристи е готов да Ви предложи бърз и лесен начин за уреждане на 
                  отношенията между вас и потребителите посещаващи вашия сайт.
                </p>
              </div>
              
              <div class="nice-font services-price desctop" style="text-align: left;">
                <p style="margin-bottom: 0;width: 200px;"><b>Цена:</b> 100.00 лв.</p>
                <p><b>Срок:</b> в рамките на 5 работни дни.</p>
              </div>
            </div>
            <div v-if="isMobile">
              <div class="nice-font services-price " style="text-align: left;">
                <p style="margin-bottom: 0;width: 200px;"><b>Цена:</b> 100.00 лв.</p>
                <p><b>Срок:</b> в рамките на 5 работни дни.</p>
              </div>
              <div @click="$router.push({name: 'request'})" class="request-online-btn main-white-button">
                        <a style="cursor: pointer;"><i class="fa fa-eye"></i> Заяви онлайн</a>
              </div>
            </div>
            <div @click="$router.push({name: 'request'})" class="request-online-btn main-white-button desctop">
                        <a style="cursor: pointer;"><i class="fa fa-eye"></i> Заяви онлайн</a>
            </div>
          </article>
          <article id="shop" class="service-details" style="margin-top: 40px;">
            <b v-if="isMobile" class="nice-font service-name ">Общи условия за онлайн магазин</b>
            <img class="service-image" style="    height: 413px;width: 420px;" src="../assets/images/online-shop.jpg" alt="">
            <div class="services-row">
              <div class="service-info nice-font">
                <b class="nice-font service-name desctop">Общи условия за онлайн магазин</b>
                <p style="text-align: justify;">Общите условия са най-добрият вариант за уреждане на 
                  отношенията между търговците, които сключват много на брой едностранни сделки с потребителите, 
                  използващи техните онлайн магазини. Законът за защита на потребителите задължава собствениците на
                   онлайн магазини да предоставят голям набор от информация относно: описанието на стоките и услугите, 
                   които предлагат; начинът на сключване на договорите; условията за плащане; информация за търговеца предлагащ
                    определена услуга или продукт и други съществени елементи на договора, които се сключва между търговеца и
                     потребителя. Използването на Общи условия, които не са изготвени от юрист специално за Вас може да Ви обвърже 
                     със неблагоприятни задължения. В случай, че възнамерявате да започнете свой онлайн бизнес, ние сме готови да 
                     предложим изработването на общи условия, с които да защитите себе си и бизнеса си.
                </p>
              </div>
              
              <div class="nice-font services-price desctop" style="text-align: left;">
                <p style="margin-bottom: 0;width: 200px;"><b>Цена:</b> 200.00 лв.</p>
                <p><b>Срок:</b> в рамките на 5 работни дни.</p>
              </div>
            </div>
            <div v-if="isMobile">
              <div class="nice-font services-price " style="text-align: left;">
                <p style="margin-bottom: 0;width: 200px;"><b>Цена:</b> 200.00 лв.</p>
                <p><b>Срок:</b> в рамките на 5 работни дни.</p>
              </div>
              <div @click="$router.push({name: 'request'})" class="request-online-btn main-white-button">
                        <a style="cursor: pointer;"><i class="fa fa-eye"></i> Заяви онлайн</a>
              </div>
            </div>
            <div @click="$router.push({name: 'request'})" class="request-online-btn main-white-button desctop">
                        <a style="cursor: pointer;"><i class="fa fa-eye"></i> Заяви онлайн</a>
            </div>
          </article>
          <article id="gdpr" class="service-details"  style="margin-top: 40px;">
            <b v-if="isMobile" class="nice-font service-name">Политика за поверителност на личните данни</b>
            <img class="service-image" src="../assets/images/GDPR.png" alt="">
            <div class="services-row">
              <div class="service-info nice-font">
                <b class="nice-font service-name desctop">Политика за поверителност на личните данни</b>
                <p style="text-align: justify;">С приемането на регламента за защита на личните данни (GDPR) 
                  се въведоха редица правила относно обработването на личните данни на потребителите, 
                  посещаващи интернет сайтове. Всеки сайт трябва изчерпателно да опише какви лични данни обработва,
                   а потребителят трябва да даде съгласие за това. Вземайки предвид сериозната регулация относно 
                   обработването на личните данни на потребителите на сайтове, ние Ви предлагаме индивидуално изготвена и 
                   съобразена със спецификите на вашия сайт политика за защита на личните данни.
                </p>
              </div>
              
              <div class="nice-font services-price desctop" style="text-align: left;">
                <p style="margin-bottom: 0;width: 200px;"><b>Цена:</b> 80.00 лв.</p>
                <p><b>Срок:</b> в рамките на 5 работни дни.</p>
              </div>
            </div>
            <div v-if="isMobile">
              <div class="nice-font services-price " style="text-align: left;">
                <p style="margin-bottom: 0;width: 200px;"><b>Цена:</b> 80.00 лв.</p>
                <p><b>Срок:</b> в рамките на 5 работни дни.</p>
              </div>
              <div @click="$router.push({name: 'request'})" class="request-online-btn main-white-button">
                        <a style="cursor: pointer;"><i class="fa fa-eye"></i> Заяви онлайн</a>
              </div>
            </div>
            <div @click="$router.push({name: 'request'})" class="request-online-btn main-white-button desctop">
                        <a style="cursor: pointer;"><i class="fa fa-eye"></i> Заяви онлайн</a>
            </div>
          </article>
          <article id="gdpr" class="service-details"  style="margin-top: 40px;">
            <b v-if="isMobile" class="nice-font service-name">Заяви онлайн консултация</b>
            <img class="service-image" src="../assets/images/consultation.jpg" alt="">
            <div class="services-row" :style="{'padding-bottom': isMobile ? '43px' : 0}">
              <div class="service-info nice-font">
                <b class="nice-font service-name desctop">Заяви онлайн консултация</b>
                <p style="text-align: justify;">В случай, че желаете да стартирате свой онлайн бизнес
                   или сайт предоставящ определена информация, но не сте запознат с юридическия аспект и
                    методиката за създаването му, нашият екип е готов да окаже съдействие, относно всички необходими 
                    действия, които трябва да предприемете. Възползвайте се от нашата услуга, а 
                    ние ще Ви предоставим цялата информация, която Ви е нужна за да реализирате своите идеи.
                </p>
              </div>
            </div>
            <div v-if="isMobile">
             
              <div @click="$router.push({name: 'request'})" class="request-online-btn main-white-button">
                        <a style="cursor: pointer;"><i class="fa fa-eye"></i> Заяви онлайн</a>
              </div>
            </div>
            <div @click="$router.push({name: 'request'})" class="request-online-btn main-white-button desctop">
                        <a style="cursor: pointer;"><i class="fa fa-eye"></i> Заяви онлайн</a>
            </div>
          </article>
       </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      selectedIconTab: 1,
    }
  },
  computed:{
    isMobile(){
      return window.innerWidth <= 768;
    },
  },
  methods:{
      scrollTo(position) {
        // const element = document.getElementById(ref);
        // let position = element.getBoundingClientRect().top -100

       
        window.scrollTo(0, position);
    },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nice-font{
    font-family: 'Montserrat', sans-serif;
  }
</style>
<style scoped>

  .icons-home{
    margin-left: 14.333333% !important;
  }

  .icon-new{
    display: flex;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    text-align: center;
    line-height: 62px;
    color: #8d99af;
    background-color: #fff;
    margin-right: 15px;
    justify-content: center;
    align-items: center;
  }
  .icon-new img{
    width: 34px;
    height: 34px;
  }
  .icons-wrapper{
    background: #2b2d42;
    display: flex;
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 30px;
  }
  .icon-container{
    display: flex;
    align-items: center;
    color: white;
    padding: 20px;
    background: #8d99af;
    border-bottom: 1px solid #2b2d42;
    width: 275px;
    cursor: pointer;
    transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .nice-font{
    font-family: 'Montserrat', sans-serif;
  }
  .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter-from, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.services-price{
    position: absolute;
    top: 12px;
    right: 4px;
    width: 169px;
}
.services-row{
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    gap: 37px;
}

.service-details{
    display: flex;
    background: #f7f7f7;
    padding: 15px;
    border-radius: 10px;
    position: relative;
    align-items: center;
}
.service-name{
    font-size: 20px;
    color: #2a2a2a;
    font-weight: 700;
}
.service-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 73%;
}
.request-online-btn{
  bottom: 12px;
    right: 12px;
    position: absolute;
}
.service-image{
    width: 400px;
    margin-right: 5%;
    height: 253px;
    object-fit: cover;
}

@media only screen and (max-width: 768px){
  .icons-home{
    margin-left: -0.6667% !important;
  }

  .service-details{
    flex-direction: column;
  }
  .service-image{
    width: 100% !important;
    margin-right: unset;
  }
  .services-row{
    padding-bottom: 136px;
    width: 100%;
  }
  .service-info{
    width: 100%;
  }
  .services-price{
    bottom: 61px;
    left: 16px;
    width: 278px;
    top: unset;
  }
}
</style>
