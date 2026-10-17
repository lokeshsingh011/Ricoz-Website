import HomeSections from "@/components/home/HomeSections"
import { usePageMeta, organizationSchema, webSiteSchema } from "@/lib/seo"

export default function Home() {
  usePageMeta({
    title: "Ricoz — Technology, Services and Capabilities for Enterprise",
    description:
      "Explore Ricoz products, professional services, integrated solutions and practical resources for complex business needs.",
    canonical: "/",
    ogTitle: "Ricoz — Build What Comes Next",
    ogDescription:
      "A connected digital ecosystem of products, services, solutions and knowledge for enterprise organizations.",
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema(), webSiteSchema()]),
        }}
      />
      <HomeSections />
    </>
  )
}
