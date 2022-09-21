import { init, createComponent } from '@animated/sparejs';

const site = init({ name: "MD Parser" });

const textarea = createComponent("textarea", null, { placeholder: "Enter Markdown Here", onkeyup: "runMarkdown(this.value)" });
site.addComponent(textarea);

const div = createComponent('div', null, { id: "output" });
site.addComponent(div);

site.attachScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js');
site.attachStringScript(`
const outdiv = document.getElementById('output');
function runMarkdown(md){
    outdiv.innerHTML = marked.parse(md);
}
`);

site.attachStringStylesheet(`
textarea {
    outline: none;
}
h1, h2, h3, h4, h5, h6, p, em, strong, li {
    font-family: 'Roboto', sans-serif;
}
`);

site.build();