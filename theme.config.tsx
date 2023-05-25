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
  }
}

export default config
