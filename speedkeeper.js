const cluster = require('cluster');
const cpuCores = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < cpuCores; i++) {
        cluster.fork();
    }
} else {
    setInterval(() => {
        4590 * 2191;
    }, 0.001);
}
