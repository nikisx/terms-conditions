<template>
    <section style=" margin-top: 200px;">
        <h1 class="nice-font" style="font-weight: bold;">Как да бъдем полезни</h1>
        <div class="contact-form">
                <form id="contact" action="" method="get">
                  <div class="row">
                    <div class="col-lg-6">
                      <fieldset>
                        <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required>
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset>
                        <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="">
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea name="message" type="text" class="form-control" id="message" placeholder="Message" required=""></textarea>  
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" class="main-button "><i class="fa fa-paper-plane"></i> Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
        </div>
    </section>
 
</template>

<script>
export default {
    name: 'RequestService',
    created(){
        window.scrollTo(0,0);
    }
}
</script>

<style>
    .contact-form {
        width: 40%;
        margin: 0 auto;
        background: #f7f7f7;
        padding: 20px;
        border-radius: 20px;
    }
</style>