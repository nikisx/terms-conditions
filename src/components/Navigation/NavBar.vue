<template>
   <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" :style="{background: $route.name == 'home' ? '' : '#697385'}" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a @click="$router.push({name: 'home'})" style="cursor: pointer;" class="logo">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li><a @click="$router.push({name: 'home'})" style="cursor: pointer;" :class="{'active': $route.name == 'home'}">Начало</a></li>
              <li><a @click="redirectToServices()" style="cursor: pointer;">Услуги</a></li>
              <li><a style="cursor: pointer;">Контакти</a></li> 
              <li><a style="cursor: pointer;">Често задавани въпроси</a></li> 
              <li @click="$router.push({name: 'request'})"><div class="main-white-button"><a style="cursor: pointer;"><i class="fa fa-plus"></i> Заяви онлайн</a></div></li> 
            </ul>        
            <a class='menu-trigger'>
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
      redirectToServices(){
        if (this.$route.name != 'home') {
          this.$router.push({name: 'home'})
        }
        setTimeout(() => {
          this.scrollTo('services');
        }, "200")
       
      },
      handleSCroll () {
        let header = document.querySelector(".header-area");
        if (window.scrollY > 100 && !header.className.includes('background-header')) {
        header.classList.add('background-header'); 
        } else if (window.scrollY < 100) {
          header.classList.remove('background-header');
        }
      },
      scrollTo(ref) {
        const element = document.getElementById(ref);
        const y = element.getBoundingClientRect().top + -300;
        window.scroll({
          top: y,
          behavior: 'smooth'
        });
        
    },
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

</style>