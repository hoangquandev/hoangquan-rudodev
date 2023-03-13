
// import { color } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import bannerImg from '../public/images/birthday/Home.png'
import invitationImg from '../public/images/birthday/thegang.webp'


const Works = () => (
    <Layout title="Birthday">
        <div >
            <Image src={bannerImg} />
        </div>
        <div style={{
            display: "flex",
            height: "500px"
        }} >
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                <Image src={invitationImg} />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <h2 style={{ textTransform: "uppercase", color: "#fe5600", fontSize: "30px", marginBottom: "2rem" }}>Show up!</h2>
                    <p>March 17 | 7.30 PM</p>
                    <br />
                    <p>The Gangs Urban <br />
                        212 Lý Thái Tổ, Phường 1,<br />
                        Quận 3, Thành phố Hồ Chí Minh</p>
                </div>
            </div>
        </div>
    </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
