<template>
    <form style="max-width:300px;">
        <div class="form-group">
            <label for="login">ლოგინი</label>
            <input v-model="login" type="text" class="form-control" id="login" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">პაროლი</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button @click.prevent="getAdmin" class="btn btn-primary">შესვლა</button>
    </form>
</template>
<script>
import firebase from 'firebase/app'
import router from './../router/index'
export default {
    name: 'AdminApp',
    data(){
        return {
            password:'',
            login: ''
        }
    },
    methods: {
        async getAdmin(){
            // console.log(this.password, this.login);
            return await firebase.firestore()
            .collection('Admin')
            // .where("name", "==", this.login)
            // .where("password", "==", this.password)
            .get()
            .then(data => {
                data.docs.map(doc=> {
                    if(doc.data().name == this.login && doc.data().password == this.password ){
                        alert('success')
                        localStorage.setItem('logged', 'true')
                        router.push({ path: '/logged' })
                    }else {
                        alert("error")
                    }
                })
            })
            .catch(err => {
                alert(err)
            })
        }
    },
    created(){
        if(localStorage.getItem('logged') ===  'true') {
            router.push({ path: '/logged' })
        }else {
            router.push({ path: '/admin' })
        }
    }
}
</script>
<style scoped>
</style>