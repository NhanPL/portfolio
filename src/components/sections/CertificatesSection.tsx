import { CertificateCard, Reveal, SectionTitle } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function CertificatesSection() {
  const { t } = useLanguage()

  return (
    <div className="app-container h-full overflow-hidden py-24">
      <Reveal mode="section">
        <SectionTitle
          description={t.certificates.description}
          index={getSectionDisplayIndex('certificates')}
          subtitle={t.certificates.eyebrow}
          title={t.certificates.title}
          titleId="certificates-title"
        />
      </Reveal>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {t.certificates.items.map((certificate, index) => {
          const assets = commonData.certificateAssets[certificate.slug]

          return (
            <Reveal delay={index * 0.05} key={certificate.slug}>
              <CertificateCard
                description={certificate.description}
                image={assets.image}
                imageAlt={certificate.title}
                issuedAt={certificate.issuedAt}
                issuer={certificate.issuer}
                title={certificate.title}
                verifyLabel={t.certificates.verifyLabel}
                verifyUrl={assets.verifyUrl}
              />
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
