<template>
   <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" :style="{background: $route.name == 'home' ? '' : '#697385'}" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav nice-font" style="position: relative">
            <!-- ***** Logo Start ***** -->
            <a @click="$router.push({name: 'home'})" style="cursor: pointer;" class="logo">
              <!-- <p class="company-name nice-font">Общи условия</p>   -->
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li><a @click="$router.push({name: 'home'})" style="cursor: pointer;" :class="{'active': $route.name == 'home'}">Начало</a></li>
              <li><a @click="redirectToServices()" style="cursor: pointer;">Услуги</a></li>
              <!-- <li><a style="cursor: pointer;">Контакти</a></li>  -->
              <li><a @click="$router.push({name: 'faq'})" :class="{'active': $route.name == 'faq'}" style="cursor: pointer;">Често задавани въпроси</a></li> 
              <li @click="$router.push({name: 'request'})"><div class="main-white-button"><a style="cursor: pointer;"><i class="fa fa-plus"></i> Заяви онлайн</a></div></li> 
            </ul>        
            <a @click="toggleMobileMenu()" id="menu-trigger" class='menu-trigger'>
                <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    methods:{
      toggleMobileMenu(){

        const element = document.getElementById('menu-trigger');
        if (element.className.includes('active')) {
          element.classList.remove('active');
          element.previousSibling.style.display = 'none';
        }
        else{
          element.classList.add('active');
          element.previousSibling.style.display = 'block';
        }
      },
      redirectToServices(){
        if (this.$route.name != 'home') {
          this.$router.push({name: 'home'})
        }
        setTimeout(() => {
          this.scrollTo(900);
        }, "200")
        const element = document.getElementById('menu-trigger');
        if (element.className.includes('active')) {
          element.classList.remove('active');
          element.previousSibling.style.display = 'none';
        }
      },
      handleSCroll () {
        let header = document.querySelector(".header-area");
        if (window.scrollY > 100 && !header.className.includes('background-header')) {
        header.classList.add('background-header'); 
        } else if (window.scrollY < 100) {
          header.classList.remove('background-header');
        }
      },
      scrollTo(distance) {
        // const element = document.getElementById(ref);
        // const y = element.getBoundingClientRect().top + -300;
        window.scroll({
          top: distance,
          behavior: 'smooth'
        });
        
    },
    },
    watch:{
      $route (){
        const element = document.getElementById('menu-trigger');
          element.classList.remove('active');
          element.previousSibling.style.display = 'none';
      }
   },
    created () {
      window.addEventListener('scroll', this.handleSCroll);
    },
    unmounted () {
      window.removeEventListener('scroll', this.handleSCroll);
    } 
}
</script>

<style>
  .company-name{
    font-weight: bold;
    position: absolute;
    left: 18%;
    color: white;
    font-size: 20px;
    top: 36px;
    font-family: 'Montserrat', sans-serif;
  }
</style>