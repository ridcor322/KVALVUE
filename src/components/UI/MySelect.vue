<template>
    <select 
        :value="modelValue"
        @change="changeOptions"
        class="select_op"
    >
        <option disabled value="">Выберите из списка:</option>
        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
        {{ option.name }}
        </option>
    </select>
</template>

<script>
  export default {
    name: 'my-select',
    props: {
      modelValue: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    },
    methods: {
        changeOptions(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
  }
</script>
<style>
    .select_op {
        width: 10%;
        border: 1px solid rgb(255, 255, 255);
        margin: 0;
        padding: 14px 15px;
        margin-top: 7px;
        margin-bottom: 2px;
  border: 2px solid rgb(255, 255, 255);
  outline: 2px solid rgb(188, 203, 247);
  background-color: rgb(255, 255, 255);
  color: rgb(111, 147, 255);
  float: right;
  margin: 0;
    }

    .select_op:focus {
      background-color: rgb(255, 255, 255);
  color: rgb(111, 147, 255);
    }
</style>