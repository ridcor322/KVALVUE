<!-- шаблон блока создания поста -->
<template>
    <div>
        <form @submit.prevent="submitHandler">
            <my-input type= "text" v-model="comm.comm" placeholder="Оставить комментарий к задаче"></my-input>
            <p><my-button type="submit" @click="createComm" class="btn">Написать комментарий</my-button></p>
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
            pid: '',
            comm: {
                topicId: '',
                comm: '',
            }
        }
    },
    name: 'comm-create',
    methods: {
        async submitHandler() {
            try {
                const comm = await this.$store.dispatch('createComm', {
                id: this.comm.id,
                comm: this.comm.comm,
                topicId: this.pid
            })
            this.comm = {
                topicId: '',
                comm: '',
            }
            } catch (e) {
                throw (e)
            }
        },
        createComm() {
            const url = new URL(window.location.href);
            this.pid = url.searchParams.get("id");
            this.comm.topicId = this.pid,
            this.comm.id = Math.random().toString(16).slice(2)
            // вызывается метод креэйт, в который берутся данные из полей инпута
            this.$emit('create', this.comm)
        },
    }
}
</script>
  
<!-- тут стили. style SCOPED чтобы стили применялись только к элементам блока пост-креэйт,
 а не ко всем на странице -->
<style scoped>


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
</style>