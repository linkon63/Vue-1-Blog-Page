
import { ref } from 'vue'
const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const loadData = async () => {
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts')
            // let data = await fetch('http://localhost:3000/posts')
            console.log("✔ post data from server", data)
            if (!data.ok) {
                throw Error('Data is not avilable right now !')
            }
            posts.value = await data.json()
            
            // let tenData = await data.json()
            // tenData.value = tenData.value.slice(0, 10)
            // console.log("✔ post data ", posts.value.slice(0, 10))
            // console.log("✔ post tenData ", tenData)
  
            posts.value.slice(0, 10)
  
        } catch (err) {
            // console.log(error, "error from data loading")
            // error.value = "Data is not avilable right now !"
            console.log(err.message)
            error.value = err.message
        }
    }

    return { loadData, posts, error }
}

export default getPosts

