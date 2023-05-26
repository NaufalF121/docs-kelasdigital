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
  primaryHue: 0,
  toc:{
    title: 'Table of Contents',
    float : true
  },
  gitTimestamp: false,
  sidebar: {
    toggleButton: true,
  },
}

export default config
