start cmd /k "cd .\serversiderendering & http-server ."

start cmd /k "cd .\api & node index.js"

start cmd /k "cd .\prerenderer & node cacheserver.js"

