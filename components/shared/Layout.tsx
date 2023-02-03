import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import IntroTemplate from 'intro-template'
import { SettingsPayload } from 'types'

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
}

export default function Layout({
  children,
  settings = fallbackSettings,
  preview,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {preview && <PreviewBanner />}
      <div className="mt-10 flex-grow px-6 md:px-10 lg:px-16">{children}</div>
      <Footer footer={settings?.footer} />
      <IntroTemplate />
    </div>
  )
}
