<!-- шаблон страница, то где все компоненты собираются в одно и отображаются на localhost:8080 -->
<template>
    <navbar></navbar>
      <my-input
          v-model="searchText"
          placeholder="Поиск по названию"/>
  
      <my-select 
        v-model="searchValue"
        :options="sortOptions"
      />
     <!-- инпут, в который вводится текст для поиска, присваивается переменная searchText -->
    
      <!-- блок вывода постов(тут же поиск и сортировка) -->
      <!-- поиск. вызывает функцию при вводе в инпут каждый пост в массиве posts фильтруется по совпадению с данными из инпута(searchText) -->
      <PostList
        :posts="SearchedPosts"
        /><p></p>
    
        <!-- пагинация. в функциях ниже: 1. вычисляется кол-во страниц
                                         2. по дефолту задается страница 1
                                         3. создается класс в котором при нажатии на номер страницы такой же номер записывается в переменную -->
    </template>
    
    <script>
    // импорт нужных компонентов
    import firebase from "firebase/compat/app"
    import 'firebase/firestore';
    import Navbar from "@/components/UI/Navbar"
    import PostCreate from '@/components/PostCreate.vue';
    import PostList from '@/components/PostList.vue';
    import MySelect from '@/components/UI/MySelect.vue';
    import MyDialog from '@/components/UI/MyDialog.vue';
    import MyInput from '@/components/UI/MyInput.vue';
    export default {
      data() {
        return {
          user: '',
          isModalVisible: false,
          searchValue: '',
          searchText: '',
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
      //методы
      methods: {
        createPost(post) {
          this.posts.push(post)
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal(status) {
          this.isModalVisible = status;
        },
        // запрос для получения поста
        async created() {
      this.$store.dispatch('getTrash');
      this.user = firebase.auth().currentUser
    }
      },
      watch: {
        currentPage(){
          this.created()
        }
      },
      components: {PostCreate, PostList, MySelect, MyDialog, MyInput, Navbar},
      computed: {
        posts() {
        return this.$store.state.posts.posts;
      },
        selectedTypes() {
          return [...this.posts].sort((post1, post2) => post1[this.searchValue]?.localeCompare(post2[this.searchValue]))//знак ? убирает ошибку, что пост1 пустой
        },
        SearchedPosts() { //поиск по названию
          return this.selectedTypes.filter(post => post.title.includes(this.searchText))
        }
      },
      mounted() {
        this.created();
      },
    }
    </script>
  
    <style scoped>
    input {
      padding: 14px;
      margin: 0;
      width: 75%;
      font-size: 14px;
      border: 2px solid rgb(255, 255, 255);
      outline: 2px solid rgb(188, 203, 247);
      background-color: rgb(255, 255, 255);
      color: rgb(111, 147, 255);
    }
    
    .btn {
      padding: 14px 45px;
      float: left;
      margin-right: 25px;
    }

    </style>