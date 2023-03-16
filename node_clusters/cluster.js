// Clustering in NodeJs

// It is a concept which divides a single node process into multiple child node processes 
// in order to achieve a concept of multi-threading

// Cores in CPU - allows one process to divide into the number of cores of the system.
// It is done to improve the performance of the server or machine

// For example, Natively NodeJs server uses only one core of the CPU for its processing.
// This may degrade the actual potential of NodeJs server.

// In order to utilize all cores of the CPU, Clusters or the concept of clustering comes into picture.
// It allows us to use the potential of CPU to a larger extent.

// NodeJs provides a module called cluster. It is used to achieve what we have talked about in the above para.

// It provide a facility of fault tolerance which continue its working even if any fault occurs in the server.

const http = require('http')
const os = require('os')
const cluster = require('cluster')


const cpuNum = os.cpus().length


if(cluster.isPrimary){   // Parent Process
    for (let index = 0; index < cpuNum; index++) {
        cluster.fork();                            // fork is used to divide a single into number of process
    }
    cluster.on('exit',()=>{
        cluster.fork();                          // It is used to handle crash of any process it will not crash th server
    })                                           // (Fault tolerance)
}else{                 // Child processes
    const server = http.createServer((req,res)=>{
        if(req.url=='/'){
            res.end('Hello sir')
        }
    });
    server.listen(5000,()=>{
        console.log('Listening to port 5000');
    })
}

// Limitations
// -> Theres is no sharing of resources between the processes.



