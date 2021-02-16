<template>

    <form v-if="isLogged" style="max-width:300px;">
        <button class="btn btn-danger" @click="logout" >LOGOUT</button><br>
        <select style="padding: 20px;" id="collection" name="collection" v-model='collection'>
            <option value="Hats">Hats</option>
            <option value="Clothes">Clothes</option>
        </select>
        <div class="form-group">
            <label for="name">პროდუქტის სახელი</label>
            <input v-model="name" 
            type="text" class="form-control" 
            id="name" aria-describedby="nameHelp" placeholder="Enter name">
        </div>
        <div class="form-group">
            <label for="price">ფასი</label>
            <input v-model="price" 
            type="number" class="form-control" 
            id="price" aria-describedby="priceHelp" placeholder="Enter price">
        </div>
        <div class="form-group">
            <label for="image">ფოტო (URL)</label>
            <input v-model="image" 
            type="text" class="form-control" 
            id="image" aria-describedby="imageHelp" placeholder="Enter image">
        </div>
        <div class="form-group">
            <label for="size">ზომა</label>
            <input v-model="size" 
            type="text" class="form-control" 
            id="size" aria-describedby="sizeHelp" placeholder="Enter size">
        </div>
        <div class="form-group">
            <label for="description">აღწერა</label>
            <input v-model="description" 
            type="text" class="form-control" 
            id="description" aria-describedby="descriptionHelp" placeholder="Enter description">
        </div>
        <div class="form-group">
            <label for="material">მასალა</label>
            <input v-model="material" 
            type="text" class="form-control" 
            id="material" aria-describedby="materialnHelp" placeholder="Enter material">
        </div>
        <div class="form-group">
            <label for="material">ფერი</label>
            <input v-model="color" 
            type="text" class="form-control" 
            id="material" aria-describedby="materialnHelp" placeholder="Enter material">
        </div>
        <button @click.prevent="addProduct" class="btn btn-primary">დამატება</button>
    </form>
    <div v-else >{{goback()}}</div>
</template>
<script>
import firebase from 'firebase/app'
import router from './../router/index'
export default {
    name: 'AdminApp',
    data(){
        return {
            name: '',
            price: 0,
            size: '',
            image: '',
            description: '',
            material: '',
            isAdd: false,
            quantity: 1,
            color: [],

            collection: '',
            isLogged: false,
        }
    },
    methods: {
        setInputDefault(){
            this.name = '',
            this.price = 0,
            this.size = '',
            this.image = '',
            this.description = '',
            this.material = '',
            this.isAdd = false,
            this.quantity = 1,
            this.color = []
        },
        goback(){
            router.push({path: '/admin'})
        },
        async addProduct(){
            var today = new Date()
              const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              const time = today.getHours() + ":" + today.getMinutes() ;
            return await firebase.firestore()
            .collection(this.collection)
            .doc()
            .set({
                    name: this.name,
                    price: this.price,
                    size: this.size,
                    image: this.image,
                    description: this.description,
                    material: this.material,
                    isAdd: false,
                    quantity: 1,
                    color: this.color,
                    createdTime: time,
                    createdDate: date
            }),
            this.setInputDefault()
        },
        logout(){
            localStorage.removeItem('logged')
            router.push({path: "/admin"})
        }
    },
    created(){
        if(localStorage.getItem('logged') == 'true' ){
            this.isLogged = true
        }else {
            this.isLogged = false
        }
    }
}
</script>
<style scoped>
</style>