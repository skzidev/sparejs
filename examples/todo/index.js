import { init, createComponent } from '@animated/sparejs';

const site = init({ name: "Todo" });

const header = createComponent("h1", "Todo", { class: "header" });
site.addComponent(header);

const textbox = createComponent("input", null, { placeholder: "Enter Todo Item", autocorrect: "off", class: "input", id: "textbox", onkeypress: "keypress(event)" });
site.addComponent(textbox);

site.attachStylesheet("style.css");
site.attachScript("script.js");

site.build();