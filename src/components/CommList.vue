<template>

<div v-if="comms.length > 0">
        <comm-item
            v-for="comm in comms"
            :key="comm.id"
            :comm="comm"
            />
        </div>
</template>


<script>
import CommItem from './CommItem.vue';
export default {
    name: 'comm-list',
    components: {
        CommItem
    },
    props: {
        comms: {
            type: Array,
            required: true
        }
    }
    }
</script>


<style >
.name {
margin: 0;
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

body {
    background-image: url("/public/11111.jpg");
    background-size: cover;

}

/* body {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(236,234,255,1) 26%, rgba(31,0,255,1) 100%);
} */

h3 {
    margin-top: -5px;
    text-align: center;
    font: 'sans-serif';
    color:  rgb(111, 147, 255);
    font-weight: bolder;
    font-size: 30px;
    margin-bottom: -5px;
}

</style>