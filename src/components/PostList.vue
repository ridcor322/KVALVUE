<!-- шаблон вывода и оформления блока с постами -->
<template>
    <!-- если длина постов больше нуля, то работает эта часть кода(ниже) -->
    <div v-if="posts.length > 1">

        </div>
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            />
</template>

<!-- импорт пост-итема -->
<!-- экспорт пост-листа -->
<script>
import PostItem from './PostItem.vue';
export default {
    name: 'post-list',
    components: {
        PostItem
    },
    // свойства массива posts
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
    }
</script>

<!-- стили -->
<style scoped>
.name {
margin: 0;
color:  rgb(111, 147, 255);
background-color: rgb(188, 203, 247);
/* background-size: cover; */
}

hr {
    border-radius: 10px;
    background-color: rgb(188, 203, 247);
   height: 2px;
}

form {
  display: flex;
  flex-direction: column;
}



h3 {
    margin-top: -5px;
    text-align: center;
    font: 'sans-serif';
    color:  rgb(55, 105, 253);
    font-weight: bolder;
    font-size: 30px;
    margin-bottom: -5px;
}

</style>