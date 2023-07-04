<!-- шаблона инпута, чтобы потом вызывать его -->
<template>
<input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<!-- Когда мы взаимодействуем с полем инпут и вводим туда данные, то он записывает их в следующий пост, 
а далее обнуляет. Получается пока опять не произойдет взаимодействие с инпутом, поле будет пустым -->
<!-- также тут идет экспорт инпута в другие части кода -->
<script>
export default {
  // тут мы даем имя инпуту, чтобы потом вызывать тег <my-input /> в html
    name: 'my-input',
    // переменные, свойства
    props: {
      modelValue: [String, Number]
    },
methods: {
  updateInput(event) {
    this.$emit('update:modelValue', event.target.value)
  }
}
}
</script>

<!-- стили -->
<style>
    .input {
  padding: 17px 16px;
  margin-top: 5px;
  margin-left: -2px;
  font: 'sans-serif';
  font-size: 14px;
  color:  rgb(111, 147, 255);
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(188, 203, 247);
  outline: 2px solid rgb(55, 105, 253);
}
.input:hover {
  border: 2px solid rgb(55, 105, 253);
  }
.input:focus
{
  outline: 2px solid rgb(188, 203, 247);
}
.input::placeholder {
  font: 'sans-serif';
  font-size: 14px;
  color:  rgb(111, 147, 255);
}
</style>

