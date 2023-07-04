<template>
    <div class="regForm">
          <form @submit.prevent="submitHandler">
          <h3 class="text-center">Регистрация</h3>
          <div>
          <input type="email" id="email" placeholder="Email" v-model="regData.email" required>
        </div>
        <div>
          <input type="password" id="password" placeholder="Пароль" v-model="regData.password" required>
        </div>
        <div>
          <input type="name" id="name" placeholder="Имя" v-model="regData.name" required>
         </div>
        <button style="border-radius: 50px;margin:auto;" type="submit">Регистрация</button>
        <form class="pushLog" @submit.prevent="pushlog">
        <h3 class="text-center">Уже зарегистрированы?</h3>
      <button style="margin-left:10px;" type="submit">Перейти к входу</button>
      </form>
        </form>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "Reg",
    data() {
      return { 
        regData: {
        email: "",
        password: "",
        name: ""
        }
      };
    },
    methods: {
      async submitHandler() {
        const regData = {
          email: this.regData.email,
          password: this.regData.password,
          name: this.regData.name,
        }
  
        try {
          await this.$store.dispatch('register', regData)
          this.$router.push('/')
        } catch (e) {
            throw(e)
        }
      },
      pushlog() {
      this.$router.push('/log')
    }
    }
  };
  </script>
  
  
  <style scoped>
 .regForm {
  background-image: url("/public/11111.jpg");
    background-size: cover;
    margin: auto;
    border: solid 5px;
    border-color: rgb(188, 203, 247);
    margin-top:10%;
    border-radius: 50px;
    background-color: rgb(255, 255, 255);
    width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  flex-direction: column;
}

.pushLog{
  flex-direction: row;
  
}

h3 {
  margin-bottom: 10px;
}

.pushLog button {
  padding: 15px 10px;
  cursor: pointer;
  border-radius: 50px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

label {
  font: 'sans-serif';
  font-size: 14px;
  color:  rgb(188, 203, 247);
  margin-bottom: 5px;
  
}

input {
  background-color: rgb(255, 255, 255);
  max-height: 30px;
  padding: 5px 16px;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
  border: 2px solid rgb(255, 255, 255);
  font: 'sans-serif';
  font-size: 14px;
  color:  rgb(188, 203, 247);
}
input:hover {
  border: 2px solid rgb(188, 203, 247);
  }
input:focus
{
  outline: 2px solid rgb(188, 203, 247);
}
input::placeholder {
  font: 'sans-serif';
  font-size: 14px;
  color:  rgb(188, 203, 247);
}
  </style>