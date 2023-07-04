<template>
  <!-- Класс навбар -->
    <div class="navbar">
      <!-- заголовок слева навбара -->
        <a>Ticket's</a>
        <!-- кнопки навбара -->
        <div class="navbar_btn">
          <!-- кнопки, при нажатии на которые происходит событие вызывающее роутер и путь -->
          <div v-if="isTargetUser">
              <button @click="$router.push('/')">Главная</button>
            <button style="margin-left: 20px" @click="$router.push('/trash')">Удалённые задачи</button>
            <button style="margin-left: 20px" @click="logout">Выход</button>
            </div>
          <div v-else-if="user">
            <button @click="$router.push('/')">Главная</button>
            <button style="margin-left: 20px" @click="logout">Выход</button>
            </div>
            <div v-else>
              <button @click="$router.push('/')">Главная</button>
              <button style="margin-left: 20px" @click="$router.push('/log')">Вход</button>
            </div>     
        </div>
    </div>
</template>

<script>
  import firebase from "firebase/compat/app"
  import 'firebase/firestore';
export default {
  data() {
      return {
        user: '',
        currentUserEmail: null
    }
  },
methods: {
    async logout() {
      await this.$store.dispatch('logout')
      location.reload();
    },
        async created() {
        this.user = firebase.auth().currentUser
      this.currentUserEmail = this.user.email;
        }
    },
    mounted() {
      this.created();
    },
    computed: {
      isTargetUser() {
      return this.currentUserEmail === 'ukfk2014@mail.ru';
    }
    }
}
  
</script>
<style>
 a {
    margin-left: 5px;
    color: rgb(55, 105, 253);
    font-weight: bold;
    font: 'sans-serif';
  font-size: 25px; 
 }
    .navbar {
        height: 40px;
        background-color: rgb(188, 203, 247);
        box-shadow: 2px 2px 4px rgb(188, 203, 247);
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .navbar_btn {
        margin-left: auto;
    }
    button {
  padding: 9px 10px;
  min-width: 200px;
  align-self: flex-end;
  font-weight: bold;
  font-size: 13px; 
  border: 2px solid rgb(255, 255, 255);
  outline: 2px solid rgb(55, 105, 253);
  background-color: rgb(239, 243, 255);
  color: rgb(111, 147, 255);
}
button:hover {
  cursor: pointer;
  font: 'sans-serif';
  font-size: 13px;  
  color: rgb(188, 203, 247);
  border: 2px solid rgb(188, 203, 247);
}
button:active {
  background-color: rgb(188, 203, 247);
  color: rgb(188, 203, 247);
}
</style>