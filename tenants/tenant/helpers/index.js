import css from 'styled-jsx/css'

export  function BuildCss(obj){
  const styles = Object.keys(obj).map((k,v)=>{
      let style =  Object.keys(obj[k]).map((key)=>{
          return  `${key} : ${obj[k][key]}`
      }).join(';')
      return `${k}{${style}}`

  }).join(" ")
  return <style jsx>{styles}</style>
}

