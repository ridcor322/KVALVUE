<template>
    <div>
        <navbar></navbar>
        <Comment />
    </div>
  </template>
  
  <script>
    import Comment  from '@/components/UI/comment.vue';
    import Navbar from "@/components/UI/Navbar";
    import PostCreate from '@/components/PostCreate.vue';
  import PostList from '@/components/PostList.vue';
  import CommList from '@/components/CommList.vue';
  import MySelect from '@/components/UI/MySelect.vue';
  import MyDialog from '@/components/UI/MyDialog.vue';
  import MyInput from '@/components/UI/MyInput.vue';
  
    export default {
    components: {Comment, CommList, PostCreate, PostList, MySelect, MyDialog, MyInput, Navbar}
    }
  </script>
  
  
  