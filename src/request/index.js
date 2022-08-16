// // 封装的请求函数
// import axios from 'axios'
// export default (url,data={},methods='POST')=>{
//     // console.log('调度')
//     return new Promise((resolve, reject) => {
//         axios({
//             url:"http://127.0.0.1:8888/api/private/v1/"+url,
//             methods:'POST',
//             data:data
//         }).then((res)=>{
//             resolve(res)
//         })
//         .catch(()=>{
//             reject(err)
//         })
        
//     })
// }