import { createServer } from 'http';
import { writeFile } from 'fs';

class Site {
    constructor(options){
        console.log("Generating Components for site: " + options.name);
        this.title = options.name;
        this.components = [];
    }
    build(properties={}){
        console.log('Building Application');
        const document = this.createDocument(this.components);
        if("out" in properties && properties.out){
            var fname;
            if("filename" in properties){
                fname = properties.filename;
            }
            else{
                fname = "index.html";
            }
            writeFile(`out/debug/${fname}.html`, document, function (err) {
                if (err) throw err;
                console.log(`Saved output HTML to out/debug/${fname}.html`);
            });
        }
        const requestListener = function (req, res) {
            res.writeHead(200);
            res.end(document);
        };
        var server = createServer(requestListener);
        server.listen(6422, 'localhost', () => {
            console.log("Running Server at localhost:6422")
        });
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
    createDocument(components){
        var docstr = "<!DOCTYPE HTML><html><head>[]</head><body>{}</body></html>";
        components.forEach((component) => {
            docstr = docstr.replace("{}", component.tag + component.content + component.closetag + "{}");
        });
        docstr = docstr.replace("{}", "");
        docstr = docstr.replace("[]", `<title>${this.title}</title>`);
        return docstr;
    }
}

class Component {
    constructor(type, content=null, attributes={}){
        this.tag = "<" + type + ">";
        this.closetag = "</" + type + ">";
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
}

export function init(options){
    return new Site(options);
}

export function createComponent(type, content=null, attributes={}){
    return new Component(type, content, attributes);
}