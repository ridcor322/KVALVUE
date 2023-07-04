<template>
  <!-- по клику на кнопку вызывается модальное окно -->
  <div class="modal-shadow" @click="closeModal">
      <div class="modal" @click.stop>
        <slot name="title">
          <!-- кнопка закрытия окна -->
          <p><my-button class="btn" @click="closeModal">X</my-button></p>
        </slot>
        <slot name="content" ></slot>
        <slot name="footer">
          <div class="modal-footer"></div>
        </slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'my-dialog',
    data: function () {
return {
show: false
}
},
    methods: {
      // функция закрытия окна
      closeModal: function () {
        this.show = false
        this.$emit('close', this.show)
      },
    },
  };
</script>

<style scoped>
.modal-shadow {
position: fixed;
top: 0;
left: 0;
min-height: 100%;
width: 100%;
background: rgba(0, 0, 0, 0.39);
}
.modal {
  background-image: url(/public/11111.jpg);
padding: 20px;
min-width: 600px;
max-height: 400px;
height: 300px;
position: absolute;
top: 50%;
left: 50%;
bottom:50%;
transform: translate(-50%, -50%);
}

.btn {
  
  padding: 15px 20px;
  min-width: 200px;
  align-self: flex-end;
  font-weight: bold;
  margin-top: 10px;
  font-size: 13px; 
}
.btn:hover {
  background-image: url(/public/11111.jpg);
  cursor: pointer;
  font: 'sans-serif';
  font-size: 13px;  

}

.input {
    padding: 15px 10px;
    border: 1px solid teal;
    margin-top: 10px;
    }

</style>