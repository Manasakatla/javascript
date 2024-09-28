const http=require('http')
const PORT=6500;
    const myServer=http.createServer((request,response)=>{
        response.write("welcome to http module");
        response.write("nodejs workig fine");
        response.end();
    }) 
    myServer.listen(PORT,()=>{
        console.log('My server is running on  $(PORT) no');
    })
