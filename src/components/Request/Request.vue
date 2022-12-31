<template>
    <section style=" margin-top: 200px;">
        <h1 class="nice-font" style="font-weight: bold;">Как да бъдем полезни</h1>
        <div class="contact-form">
                <form @submit.prevent="sendEmail($event)" id="contact" action="" method="get">
                  <div class="row">
                    <div class="col-lg-6">
                      <fieldset>
                        <input v-model="name" type="name" name="name" id="name" placeholder="Име" autocomplete="on" required>
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset>
                        <input v-model="surname"  type="surname" name="surname" id="surname" placeholder="Фамилия" autocomplete="on">
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <input v-model="email" type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Имейл" required>
                      </fieldset>
                    </div>
                    <div class="col-lg-12" style="display: flex;flex-direction: column;text-align: left;">
                      <label for="" style="color: #8d99af;">Вид услуга</label>
                      <select v-model="serviceType" style="height: 55px;border-radius: 7px;background: transparent;" required name="" id="">
                        <option value="Общи условия за сайт">Общи условия за сайт</option>
                        <option value="Общи условия за онлайн магазин">Общи условия за онлайн магазин</option>
                        <option value="Политика за защита на личните данни">Политика за защита на личните данни</option>
                      </select>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea v-model="message" name="message" type="text" class="form-control" id="message" placeholder="Съобщение" required=""></textarea>  
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" class="main-button "><i class="fa fa-paper-plane"></i> Изпрати</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
        </div>
    </section>
 
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    name: 'RequestService',
    data(){
        return{
            name: null,
            surname: null,
            email: null,
            message: null,
            serviceType: null,
        }
    },
    created(){
        window.scrollTo(0,0);
    },
    methods:{
        sendEmail(e) {
      try {
        emailjs.sendForm('service_uue3n9e', 'template_597bxhu', e.target,
        'FvTvghX64N2H7swm9', {
          name: this.name,
          email: this.email,
          surname: this.surname,
          message: this.message,
          serviceType: this.serviceType,
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      this.surname = ''
      this.serviceType = ''
    },
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