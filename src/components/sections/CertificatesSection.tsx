import { CertificateCard, SectionTitle } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'
import { getSectionDisplayIndex } from '@/utils/sectionIndex'

export function CertificatesSection() {
  const { t } = useLanguage()

  return (
    <section
      className="app-container min-h-section scroll-mt-24 py-16"
      id="certificates"
      aria-labelledby="certificates-title"
    >
      <SectionTitle
        description={t.certificates.description}
        index={getSectionDisplayIndex('certificates')}
        subtitle={t.certificates.eyebrow}
        title={t.certificates.title}
        titleId="certificates-title"
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {t.certificates.items.map((certificate) => {
          const assets = commonData.certificateAssets[certificate.slug]

          return (
            <CertificateCard
              description={certificate.description}
              image={assets.image}
              imageAlt={certificate.title}
              issuedAt={certificate.issuedAt}
              issuer={certificate.issuer}
              key={certificate.slug}
              title={certificate.title}
              verifyLabel={t.certificates.verifyLabel}
              verifyUrl={assets.verifyUrl}
            />
          )
        })}
      </div>
    </section>
  )
}
