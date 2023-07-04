<!-- шаблон блока создания поста -->
<template>
    <div>
        <form @submit.prevent="submitHandler">
            <my-input type="text" v-model="post.title" placeholder="Введите название"></my-input>
            <my-input type ="text" v-model="post.body" placeholder="А тут содержание"></my-input>
            <p><my-button type="submit" @click="createPost" class="btn">Отправить задачу</my-button></p>
        </form>
    </div>
  </template>

  <!-- экспорт пост-креэйта -->
  <!-- объявление массива с постами(с полями title и body) -->
  <!-- метод создания поста -->
  <script>
  export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    name: 'post-create',
    methods: {
        async submitHandler() {
            try {
                const post = await this.$store.dispatch('createPost', {
                id: this.post.id,
                date: this.post.date,
                doneornot: this.post.default,
                title: this.post.title,
                body: this.post.body
            })
            this.post = {
                title: '',
                body: '' 
            }
            } catch (e) {
                throw (e)
            }
        },
        createPost() {
            this.post.default = 'false';
            var date = new Date();
            this.post.date = date.toLocaleString();
            this.post.id = Math.random().toString(16).slice(2)
            // вызывается метод креэйт, в который берутся данные из полей инпута
            this.$emit('create', this.post)
        },
    }
}
</script>
  
<!-- тут стили. style SCOPED чтобы стили применялись только к элементам блока пост-креэйт,
 а не ко всем на странице -->
<style scoped>

/* кнопка */
.btn {
    float: right;
    min-width: 100px;
    padding: 14px 45px;
    font-weight: bold;
    font-size: 14px;
    
}

/* кнопка при наведении */
.btn:hover {
  font: 'sans-serif';
  font-size: 14px;  
}
</style>