
import { ref } from 'vue'
const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    const loadData = async () => {
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            console.log("✔ post data from server", data)
            if (!data.ok) {
                throw Error('Data is not avilable right now !')
            }
            post.value = await data.json()
        } catch (err) {
            console.log(err.message)
            error.value = err.message
        }
    }

    return { loadData, post, error }
}

export default getPost

