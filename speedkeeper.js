const cluster = require('cluster');
const cpuCores = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < cpuCores; i++) {
        cluster.fork();
    }
} else {
    setInterval(() => {
        1 + 1;
    }, 0.1);
}