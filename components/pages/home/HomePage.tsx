import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Head from 'next/head'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'

import HomePageHead from './HomePageHead'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

export function HomePage({ page, settings, preview }: HomePageProps) {
  const {
    overview,
    showcaseProjects,
    endDescription,
    title = 'Personal website',
  } = page ?? {}

  return (
    <>
      <Head>
        <HomePageHead page={page} settings={settings} />
        <title>Raymond Arevalo - Web Developer</title>
      </Head>

      <Layout settings={settings} preview={preview}>
        <div className="space-y-20 md:space-y-32">
          {/* Header */}
          {overview && <Header description={overview} />}
          {/* Showcase projects */}
          {showcaseProjects && showcaseProjects.length > 0 && (
            <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-5 md:gap-y-16">
              {showcaseProjects.map((project, key) => {
                const href = resolveHref(project._type, project.slug)
                if (!href && !project.site) {
                  return null
                }
                return (
                  <Link key={key} href={project.site} target="_blank">
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </div>
          )}

          {endDescription && <Header description={endDescription} />}

          <p className="border-t  py-6 text-black">
            A statically generated site using Next.js and Sanity.
          </p>

          {/* Workaround: scroll to top on route change */}
          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
