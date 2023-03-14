
// import { color } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import bannerImg from '../public/images/birthday/Home.png'
import invitationImg from '../public/images/birthday/sinhnhat.jpeg'


const Works = () => (
    <Layout title="Birthday">
        <div >
            <Image src={bannerImg} />
        </div>
        <div style={{
            display: "flex",
            height: "500px",
            gap: "18px"
        }} >
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                <Image src={invitationImg} />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px" }}>
                <div>
                    <h2 style={{ textTransform: "uppercase", color: "#fe5600", fontSize: "30px", marginBottom: "2rem" }}>Show up!</h2>
                    <p>March 17 | 7.30 PM</p>
                    <br />
                    <p><b style={{ fontSize: "18px" }}>Da Lua beer garden</b> <br />
                        131 Hoa Hung, Ward 12,<br />
                        Dist 10, HCMC</p>
                </div>
            </div>
        </div>
        <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "30px", color: "#fe5600", textTransform: "uppercase" }}>Important Details</h2>
            <div>
                Remember to bring your happiness to the party!
            </div>
            <div>
                <p style={{ textAlign: 'left', fontSize: "14px", color: "#fe5000", fontStyle: "italic", marginTop: '2rem' }}>My wish list:</p>
                <ul style={{ textAlign: 'left', padding: "1rem", fontSize: "12px", fontStyle: "italic" }}>
                    <li>
                        Mechanical Keyboard
                    </li>
                    <li>
                        Clothes
                    </li>
                    <li>
                        Monitor
                    </li>
                    <li>
                        perfume
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
