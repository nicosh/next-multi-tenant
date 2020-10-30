const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const directoryPath = path.join(__dirname, '../../pages');
const excludes = ["_app.js", "_document.js"]

const DirExists = path => {
    return fs.existsSync(path)
}

const buildPage = (name,templateName) =>{
    const string = name.replace(".js", "");
    const nameCapitalized = string.charAt(0).toUpperCase() + string.slice(1)

    return `
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {BuildCss} from '../../tenant/helpers' 
const ${nameCapitalized} = ({ websiteData,isSsr }) => {
    const styles  = websiteData.css ? BuildCss(websiteData.css) : false // website custom css
    return (
        <div>
            <Head>
                <title>{websiteData.name}</title>
                <meta name="description" content={websiteData.description} />
                {styles}
            </Head>
            <div className='hero'>
                <h1 className='title'>Welcome to {websiteData.name}!</h1>
                <p className={css.dark}>
                    the app is {isSsr ? "" : "not"} server side rendered. <br/>
                    try to run the app on port 3030!
                 </p>
            </div>
        </div>
    )
}

export default ${nameCapitalized}
`
}

inquirer.prompt([
    {
        type: 'input',
        name: 'TemplateName',
        message: 'Template Name'
    }
]).then(answers => {
    if (!DirExists(path.join(__dirname, '../../templates/' + answers.TemplateName))) {
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            if (!fs.existsSync(path.join(__dirname + "../../../templates/" + answers.TemplateName))) {
                fs.mkdirSync(path.join(__dirname + "../../../templates/" + answers.TemplateName));
            }
            fs.writeFile(path.join(__dirname + "../../../templates/" + answers.TemplateName + "/"+`${answers.TemplateName}.module.css`), "", (err) => {
                console.log("done")
            })
            files.forEach(function (file) {
                let isDir = fs.lstatSync(path.join(__dirname + "../../../pages/" + file)).isDirectory()
                if (!isDir && !excludes.includes(file)) {
                    fs.writeFile(path.join(__dirname + "../../../templates/" + answers.TemplateName + "/" + file), buildPage(file, answers.TemplateName), (err) => {
                        console.log("done")
                    })
                }
            });
        });
    }else{
        console.log("Template already exists")
    }
}).catch(error => {
    if (error.isTtyError) {
        console.log(error)
    } else {
        console.log(error)
    }
});

