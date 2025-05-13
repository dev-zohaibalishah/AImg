import axios from 'axios';

const Base_URL = "https://techhk.aoscdn.com/api/tasks/visual/scale/"
const API_KEY = "wxh347c9mv3zhyfqh"

export const enhancedImageAPI = async (file) => {
    // API Call
    try {
        // upload image
        const taskId = await uploadImage(file)
        console.log("task id is", taskId)

        // fetch image
        const enhanceImgData = await fetchEnhancedImage(taskId)
        console.log("Enhanced Image Data", enhanceImgData)
        
        console.log(enhanceImgData)
        // return enhanceImgData
    } catch (error) {
        console.log("Error Enhncing Image" , error.message)
    }
}

const uploadImage = async (file) => {
    const formData = new FormData()
    formData.append("image_file", file)

    const {data} = await axios.post(`${Base_URL}`,formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    })

    if (!data?.data?.task_id){
        throw new Error("upload error" , data?.message)
    }
    
    
    return data.data.task_id
}


const fetchEnhancedImage = async (taskId) => { 
    const {data} = await axios.get(`${Base_URL}/${taskId}`, {
        headers: {
            "X-API-KEY": API_KEY,
        },
    })
    console.log(data)
    if (!data?.data?.image){
        throw new Error("fetch error" , data?.message)
    }
    return data.data
}


// {status: 200, message: 'success', data: {…}}
// data
// : 
// task_id
// : 
// "a26205d4-185c-49e9-ad78-7d3a611c439a"
