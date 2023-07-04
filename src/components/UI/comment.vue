<template>
  
        <PostList
      :posts="SearchedPosts"
      /><p></p>

      <div v-if="user">
      <CommCreate @create="createComm"/>
    </div>
    <div v-else>
<button @click="$router.push('/log')">Чтобы оставить комментарий вы должны быть авторизованны. Перейти ко входу.</button>
    </div>
    <div>
        <comm-list
      :comms="SearchedPosts1"
      /><p></p>
      <div v-if="isTargetUser">
      <button class="btn" @click="deletePost">Удалить задачу</button>
      </div>
  </div>
  </template>
  
  <script>
  import firebase from "firebase/compat/app"
  import 'firebase/firestore';
  import CommCreate from '@/components/CommCreate.vue';
  import PostList from '@/components/PostList.vue';
  import CommList from '@/components/CommList.vue';
  import MyInput from '@/components/UI/MyInput.vue';
  
  export default {
    data() {
      return {
        user: '',
        pid: '',
        searchValue: '',
        currentUserEmail: null,
        sortOptions: [
        {
          value: 'title',
          name: 'По названию'
        },
        {
          value: 'body',
          name: 'По содержанию'
        }
      ],
      }
    },
    methods: {
        createComm(comm) {
          this.comms.push(comm)
        },
        async created() {
        const url = new URL(window.location.href);
        this.pid = url.searchParams.get("id");
        this.$store.dispatch('getComms');
        this.$store.dispatch('getPosts');
        this.user = firebase.auth().currentUser,
        this.currentUserEmail = this.user.email;
        },
        async deletePost() {
          const url = new URL(window.location.href);
          this.pid = url.searchParams.get("id");
          const postsRef = firebase.database().ref(`/posts/${this.pid}`);
          const deletedRef = firebase.database().ref(`/deleted/${this.pid}`);
          try {
            const snapshot = await postsRef.once('value');
            const post = snapshot.val();
            await deletedRef.set(post);
            await postsRef.remove();
            console.log('Пост успешно удален и перемещен в таблицу "deleted"');
            this.$router.push('/')
          } catch (error) {
            console.error('Ошибка при удалении и перемещении поста:', error);
          }
        }
    },
    components: {CommList, CommCreate, PostList, MyInput},
    computed: {
      isTargetUser() {
      return this.currentUserEmail === 'ukfk2014@mail.ru';
    },
        posts() {
        return this.$store.state.posts.posts;
      },
      comms() {
          return this.$store.state.comm.comms;
      },
      selectedTypes() {
        return [...this.posts].sort((post1, post2) => post1[this.searchValue]?.localeCompare(post2[this.searchValue]))//знак ? убирает ошибку, что пост1 пустой
      },
      SearchedPosts() { //поиск по названию
        return this.selectedTypes.filter(post => post.id.includes(this.pid))
      },
      SearchedPosts1() { //поиск по названию
        return this.comms.filter(comm => comm.topicId.includes(this.pid))
      }
    },
    mounted() {
      this.created();
    }
  };
  </script>
  
  <style scoped>
 input {
    padding: 14px;
    margin: 0;
    margin-left: 10px;
    width: 85%;
    font-size: 14px;
    /* border: 2px solid rgb(253, 234, 241);
    outline: 2px solid rgb(235, 176, 173);
    background-color: rgb(250,218,221);
    color: rgb(199, 125, 125); */
  }
  
  button {
    padding: 14px 45px;
    margin-left: 33.5%;
  }

  .btn {
    float: right;
    margin-right: 10px;
    min-width: 100px;
    padding: 14px 45px;
    font-weight: bold;
    font-size: 14px;
    color:  rgb(111, 147, 255);
    background-color: rgb(238, 241, 252);
    border: 2px solid rgb(188, 203, 247);
    font-size: 14px;
    outline: 2px solid rgb(55, 105, 253);
    
}

/* кнопка при наведении */
.btn:hover {
  font: 'sans-serif';
  font-size: 14px;  
}

  /* input:hover {
  border: 2px solid rgb(253,189,186);
  }
input:focus
{
  outline: 2px solid rgb(253,189,186);
}
input::placeholder {
  font: 'sans-serif';
  font-size: 14px;
  color:  rgb(199, 125, 125);
} */

  </style>