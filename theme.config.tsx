import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><strong>Kelas Digital</strong></span>,
  logoLink: "https://kelasdigital.helmyl.com",
  feedback:{
    content:null
  },
  editLink:{
    text:""
  },
  useNextSeoProps(){
    return{
      titleTemplate : 'Google Docs Kelas Digital'
    }
  },
  footer:{
    text:(
        <span>
          © {new Date().getFullYear()}. All rights reserved.
        </span>
    )
  },
  primaryHue:{
    dark: '40',
    light:'0'
  },
  toc:{
    title: 'Table of Contents',
    float : true
  },
  gitTimestamp: false,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 0,
    titleComponent({ title, type }) {
      return(
          <div style={{display: 'flex', alignItems: 'center'}}> {title} </div>
      )
    }
  },
  faviconGlyph: '📚',
  nextThemes:{
    defaultTheme: 'white',
  },
  components: {
    img: ({ src, alt }) => {
        return <img src={src} alt={alt} style={{maxWidth: '100%', height: 'auto'}}/>
        },
  },
  search:{
    placeholder: 'Search',
    emptyResult: 'Tidak ditemukan',
    error: 'Error',
  },
}

export default config
