<template>
     <div class="comm">
            <div>
             <div>
                 <strong>ID комментария:</strong> {{ comm.id }}
              </div>
              <div>
                  <strong>Текст:</strong> {{ comm.comm }}
              </div>
         </div>
     </div>
 
 </template>
 
 <script>
 export default {
     name: 'comm-item',
     props: {
         comm: {
             type: Object,
             required: true
         }
     }
 }
 
 </script>
 
 <style scoped>
 
 a {
     margin: 0;
     cursor: pointer;
 }
 .comm {
     font: 'sans-serif';
     color:  rgb(111, 147, 255);
     background-color: rgb(255, 255, 255);
     border: 2px solid rgb(255, 255, 255);
     font-size: 14px;
     outline: 2px solid rgb(188, 203, 247);
     padding: 15px;
     margin-top: 10px;
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 .btn {
     min-width: 100px;
     padding: 5px 5px;
 }
 
 /* .conmm {
     font: 'sans-serif';
     color:  rgb(199, 125, 125);
     background-color: rgb(250,218,221);
     border: 2px solid rgb(255, 228, 237);
     font-size: 14px;
     outline: 2px solid rgb(235, 176, 173);
     padding: 15px;
     margin-top: 2px;
     height: 50px;
     max-width: 70%;
     margin-left: 12%;
 } */
 </style>