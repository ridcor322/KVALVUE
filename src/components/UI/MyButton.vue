<!-- шаблон кнопки, чтобы потом вызывать ее  -->
<template>
    <button class="btn">
        <slot></slot>
    </button>
  </template>

  <!-- экспорт кнопки в другие части кода -->
  <script>
  export default {
    name: 'my-button'
}
</script>

<!-- стили -->
<style>
.btn {
  padding: 15px 20px;
  min-width: 200px;
  align-self: flex-end;
  font-weight: bold;
  font-size: 13px; 
  border: 2px solid rgb(255, 255, 255);
  outline: 2px solid rgb(188, 203, 247);
  background-color: rgb(255, 255, 255);
  color: rgb(111, 147, 255);
}
.btn:hover {
  background-image: url(/public/11111.jpg);
  cursor: pointer;
  font: 'sans-serif';
  font-size: 13px;  
  color: rgb(188, 203, 247);
  border: 2px solid rgb(188, 203, 247);
}
.btn:active {
  background-color: rgb(188, 203, 247);
  color: rgb(188, 203, 247);
}
</style>
  