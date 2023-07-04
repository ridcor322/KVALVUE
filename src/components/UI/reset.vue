<template>
    <div class="res">
    <form @submit.prevent="resetPassword">
    <div>
      <input type="email" v-model="email" placeholder="Email" /><p></p>
      <button style="border-radius: 50px;" @click="resetPassword">Восстановить пароль</button>
    </div>
    </form>
</div>
  </template>
  
  <script>
  import firebase from "firebase/compat/app"
import "firebase/compat/database"
  export default {
    name: "res",
    data() {
      return {
        email: '',
      };
    },
    methods: {
      async resetPassword() {
        const gemail = this.email;
        try {
          await firebase.auth().sendPasswordResetEmail(gemail);
          console.log('Инструкции по восстановлению пароля отправлены на указанный email');
        } catch (error) {
          console.error('Ошибка при отправке инструкций по восстановлению пароля:', error);
        }
      },
    },
  };
  </script>

  <style scoped>
  .res {
  background-image: url("/public/11111.jpg");
    background-size: cover;
  margin: auto;
    border: solid 5px;
    border-color: rgb(188, 203, 247);
    margin-top:10%;
    border-radius: 50px;
    background-color: rgb(255, 255, 255);
    width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  flex-direction: column;
}

input {
  background-color: rgb(255, 255, 255);
  max-height: 30px;
  padding: 5px 16px;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
  border: 2px solid rgb(68, 102, 255);
  font: 'sans-serif';
  font-size: 14px;
  color: rgb(111, 147, 255);
  padding: 15px 10px;
}
input:hover {
  border: 2px solid rgb(68, 102, 255);
  }
input:focus
{
  outline: 2px solid rgb(188, 203, 247);
}
input::placeholder {
  font: 'sans-serif';
  font-size: 14px;
  color:  rgb(68, 102, 255);
}
</style>