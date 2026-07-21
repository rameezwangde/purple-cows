import Hero from '../components/Hero'
import ServicesOrbitSection from '../components/services/ServicesOrbitSection'
import ImpactWorkspaceSection from '../components/impact/ImpactWorkspaceSection'
import BrandWallSection from '../components/brand-wall/BrandWallSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOrbitSection />
      <ImpactWorkspaceSection />
      <BrandWallSection />
    </main>
  )
}
