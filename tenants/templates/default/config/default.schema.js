
// this schema is used to generate website data source
const Schema = ()=>({
    template_variant : {
        type : "template_variant",
        defaultValue : "",
        description : "Theme variant class ex. .dark",
        values : [{ligth : ".light",dark : ".dark"}],
        sync : true,
        mandatory : true,
        page : "*"
    },
    name : {
        type : "text",
        defaultValue : "",
        description : "Title of the website",
        sync : true,
        mandatory : true,
        page : "*"
    },
    description : {
        type : "text",
        defaultValue : "",
        description : "Description of the website",
        sync : true,
        mandatory : true,
        page : "*"
    },
    css : {
        type : "css",
        defaultValue : "",
        description : "Custom website css",
        sync : true,
        mandatory : false,
        page : "*"
    },
    ua : {
        type : "google-ua",
        defaultValue : "",
        description : "Google ua code",
        sync : true,
        mandatory : true,
        page : "*"
    },
    
})
export default Schema