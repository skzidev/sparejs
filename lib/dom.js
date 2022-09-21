import { createServer } from 'http';
import { writeFile } from 'fs';

class Site {
    constructor(options){
        console.log("Generating Components for site: " + options.name);
        this.title = options.name;
        this.components = [];
        this.icon = "";
    }
    build(properties={}){
        if('port' in options) this.port = options['port']; else this.port = 6422;
        if('test' in options) this.test = options['test']; else this.test = true;
        console.log('Building Application');
        const document = createDocument(this.components, this.icon, this.title);
        if("out" in properties && properties.out){
            var fname;
            if("filename" in properties){
                fname = properties.filename;
            }
            else{
                fname = "index";
            }
            writeFile(`out/debug/${fname}.html`, document, function (err) {
                if (err) throw err;
                console.log(`Saved output HTML to out/debug/${fname}.html`);
            });
        }
        if(this.test){
            const requestListener = function (req, res) {
                res.writeHead(200);
                res.end(document);
            };
            var server = createServer(requestListener);
            server.listen(this.port, 'localhost', () => {
                console.log(`Running Server at localhost:${this.port}`);
            });
        }
    }
    addComponent(component){
        this.components.push(component);
    }
    attachScript(url){
        this.components.push(new Component("script", null, { src: url }));
    }
    attachStringScript(js){
        this.components.push(new Component("script", js));
    }
    attachStylesheet(url){
        this.components.push(new Component("link", null, { rel: "stylesheet", href: url }));
    }
    attachStringStylesheet(css){
        this.components.push(new Component("style", css));
    }
    attachIcon(url){
        this.icon = url;
    }
}

// Thanks to: https://bytenota.com/javascript-replace-last-occurrence-of-a-string/
function replaceLast(find, replace, string) {
    var lastIndex = string.lastIndexOf(find);
    
    if (lastIndex === -1) {
        return string;
    }
    
    var beginString = string.substring(0, lastIndex);
    var endString = string.substring(lastIndex + find.length);
    
    return beginString + replace + endString;
}

function buildComponent(component){
    var out = component.tag + component.content + "()" + component.closetag;
    component.children.forEach((child) => {
        out = replaceLast('()', buildComponent(child) + "()", out);
    });
    out = replaceLast("()", "", out);
    return out;
}

function createDocument(components, icon, title){
    var docstr = "<!DOCTYPE HTML><html><head>[]</head><body>{}</body></html>";
    components.forEach((component) => {
        docstr = replaceLast("{}", buildComponent(component) + "{}", docstr);
        //docstr = docstr.replace("{}", buildComponent(component) + "{}");
    });
    //docstr = docstr.replace("{}", "");
    docstr = replaceLast("{}", "", docstr);
    if(icon != ""){
        docstr = docstr.replace("[]", `<link rel="icon" href="${this.icon}">[]`);
    }
    docstr = docstr.replace("[]", `<title>${title}</title>`);
    return docstr;
}

class Component {
    constructor(type, content=null, attributes={}){
        this.tag = "<" + type + ">";
        this.closetag = "</" + type + ">";
        this.children = [];
        if(content != null){
            this.content = content;
        } else {
            this.content = "";
        }
        if(Object.keys(attributes).length == 0){
            this.attributes = {};
        } else {
            this.attributes = attributes;
            var keyvalueatt = "";
            Object.keys(attributes).forEach((attribute) => {
                keyvalueatt += " " + attribute + "=\"" + attributes[attribute] + "\"";
            });
            this.tag = "<" + type + keyvalueatt + ">";
        }
    }
    addComponent(component){
        this.children.push(component);
    }
}

export function init(options){
    return new Site(options);
}

export function createComponent(type, content=null, attributes={}){
    return new Component(type, content, attributes);
}