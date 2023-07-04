<!-- шаблон отображения поста -->
<template>
    
 
   <a @click="bigpost">
    <div class="post">
           <div>
            <div>
                <strong>ID задачи:</strong> {{ post.id }}
             </div>
             <div>
                 <strong>Дата создания:</strong> {{ post.date }}
            </div>
             <div>
                 <strong>Название:</strong> {{ post.title }}
             </div>
             <div>
                 <strong>Содержание:</strong> {{ post.body }}
            </div>
        </div>
        <div v-if="user">
            <input type="checkbox" id="highload1" name="highload1" v-model="isChecked" @change="updateFirebaseField" />
            <label for="highload1" data-onlabel="+" data-offlabel="~" class="lb1"></label>
        </div>
    </div>
</a> 



</template>

<!-- экспорт постов -->
<script>
import firebase from "firebase/compat/app"
import "firebase/compat/database"
export default {
    data() {
        return {
            user: '',
            isChecked: false
        }
    },
    name: 'post-item',
    // свойства, данные
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        async created() {
    this.user = firebase.auth().currentUser
  },
        async bigpost() {
      this.$router.push('/comm/?id=' + this.post.id)
    },
    async updateFirebaseField() {
      this.id = this.post.id;
      const fieldValue = this.isChecked; // Замените 'value1' и 'value2' на ваши значения
      const fieldRef = firebase.database().ref(`/posts/${this.id}/doneornot`);
      try {
        await fieldRef.set(fieldValue);
        console.log('Поле в Firebase обновлено');
      } catch (error) {
        console.error('Ошибка при обновлении поля в Firebase:', error);
      }
    },
    async getFirebaseFieldValue() {
    this.id = this.post.id;
      const commsRef = firebase.database().ref(`/posts/${this.id}/doneornot`);

      try {
        const snapshot = await commsRef.once('value');
        const fieldValue = snapshot.val();
        this.isChecked = fieldValue || false;
        console.log('Значение поля получено из Firebase');
      } catch (error) {
        console.error('Ошибка при получении значения поля из Firebase:', error);
      }
    }
},
mounted() {
    this.getFirebaseFieldValue();
    this.created();
  }
}

</script>

<!-- тут стили. style SCOPED чтобы стили применялись только к элементам блока пост-итем,
 а не ко всем на странице -->
<style scoped>

#highload1 {       
               display: none;
}
#highload1+.lb1, #highload1+.lb1::before, #highload1+.lb1::after {
               transition: all .3s;
}
#highload1+.lb1 {
               display: inline-block;
               position: relative;
               width: 50px;
               height: 29px;
               border-radius: 30px;
               cursor: pointer;
}
#highload1+.lb1::before {
               display: block;
               content: attr(data-offlabel);
               position: absolute;
               top: 5px;
               right: 5px;
               color: black;
               font-family: 'Open Sans', sans-serif;
               font-size: 19px;
}
#highload1+.lb1::after {
     border-radius: 50%;
               content: '';
               position: absolute;
               top: 1.499999px;
               left:  1.5px;
               width: 27px;
               height: 27px;
               background-color: white;          
}
#highload1:checked+.lb1::before {
               content: attr(data-onlabel);
               left: 8px;
               right: auto;
               color: #fff;
}
#highload1:checked+.lb1::after {
               left: 22px;
               background-color: #f7f7f7;
}
 
#highload1+.lb1 {             
               background-color: #ccc;
}
#highload1:checked+.lb1 {
               background-color: rgb(55, 105, 253);
}
#highload1:checked+.lb1::before {
               color: #fff;
}


a {
    margin: 0;
    cursor: pointer;
}
.post {
    font: 'sans-serif';
    color:  rgb(111, 147, 255);
    background-color: rgb(239, 243, 255);
    border: 2px solid rgb(188, 203, 247);
    font-size: 14px;
    outline: 2px solid rgb(55, 105, 253);
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

/* .comm {
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