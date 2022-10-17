import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`News - ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <h1>News</h1>
    </Layout>
  )
}
