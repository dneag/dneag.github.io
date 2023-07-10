
// Since media is stored in different locations depending on whether we are running from home or github,
// detect where we are and set the current path

const localBasePath = "file://wsl%24/Ubuntu-18.04/home/danneag/dneag.github.io/";
const githubMediaBasePath = "https://media.githubusercontent.com/media/dneag/dneag.github.io/main/";

const currentPath = location.href.split('/').includes("danneag") ? localBasePath : githubMediaBasePath;