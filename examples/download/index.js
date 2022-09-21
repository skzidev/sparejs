import { init, createComponent } from '@animated/sparejs';

const site = init({ name: "Download Application" });

const header = createComponent("h1", "Download", { class: "PageTitle" });
site.addComponent(header);

const progressbar = createComponent("progress", null, { id: "pb", class: "pb", value: "0" });
site.addComponent(progressbar);

const button = createComponent("button", "Start Download", { class: "bton", id: "bton", onclick: "startDownload()" });
site.addComponent(button);

site.attachStringScript(`
const pb = document.getElementById('pb');
const bton = document.getElementById('bton');
var interval;
function startDownload(){
    bton.innerText = "Downloading...";
    interval = window.setInterval(() => { if(!checkComplete()){ pb.value += 0.01; }else{ finishedDownload(); } }, 100);
}
function checkComplete(){
    if(pb.value >= 1){
        return true;
    }
    else{
        return false;
    }
}
function finishedDownload(){
    bton.innerText = "Download Complete";
    bton.disabled = true;
    window.clearInterval(interval);
}
`);

site.attachStringStylesheet(`
.PageTitle {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 600%;
}
.pb {
    accent-color: #4bf542;
    padding: 40px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.bton {
    background: lightgray;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
`);

site.build();