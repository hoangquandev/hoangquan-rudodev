import { Container, Divider, Heading, SimpleGrid, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbvr from '../public/images/works/vr_preview.png'
import thumbFurnishop from '../public/images/works/furnishop_preview.png'
import thumbHetaChain from '../public/images/works/hetachain-preview.png'
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbKiimy from '../public/images/works/kiimy-preview.png'
import thumbTrucKhanh from '../public/images/works/truckhanh-preview.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web App with React
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="https://hoangquan-vr-landing-page.vercel.app/" title="VR Website" thumbnail={thumbvr}>
            Demo Animated Landing Page using ReactJs and Tailwind CSS.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="https://hoangquan-furni-shop.vercel.app/"
            title="FurniShop"
            thumbnail={thumbFurnishop}
          >
            Demo Furniture website using ReactJs and Tailwind CSS.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="https://heta.vercel.app/"
            title="HetaChain Platform"
            thumbnail={thumbHetaChain}
          >
            Open Blockchain Financial Platform for Fintech and Crypto Business
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Ecommerce Website (php / Wordpress)
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="https://kiimymedical.com/" thumbnail={thumbKiimy} title="Kiimy Medical">
            A Skincare / Cosmetics Ecommerce Website

          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="https://truckhanh.com/"
            thumbnail={thumbTrucKhanh}
            title="Truc Khanh Mini Market"
          >
            Demo minimart website
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section> */}

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
