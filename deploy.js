const git = require("simple-git")
const npmRunScript = require('npm-run-script')

const run = () => {

    console.log(__dirname)

    const repo = git(__dirname)

    const gitPull = (thisRepo = repo) => {
        return new Promise((resolve) => {
            thisRepo.pull(function () {
                resolve()
            })
        })
    }

    const runScript = (script, name) => {
        console.log(name + ' - start')
        return new Promise((resolve, reject) => {
            const child = npmRunScript(
                script
                // { stdio: 'ignore' } // quiet...
            );
            child.once('error', (error) => {
                process.exit(1);
                reject(error);
            });
            child.once('exit', (exitCode) => {
                console.log(name + ' - complete')
                // process.exit(exitCode);
                resolve();
            });
        })
    }

    gitPull().then(() => {
        console.log('[GIT] pull - complete')
        return true
    })

        .then(() => runScript('npm install', '[NPM] install'))
        .then(() => runScript('npm run build', '[NPM] build'))
        .then(() => runScript('npm run start:pm2', '[NPM] start PM2'))

        .then(() => {
            console.log('ALL DONE!')
            return true
        })

}

run()