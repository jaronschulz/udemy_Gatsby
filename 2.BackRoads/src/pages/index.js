import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SimpleHero from '../components/simple-hero'
import Banner from '../components/banner'
import About from '../components/home/about'
import Services from '../components/home/services'

const home = () => {
    return (
        <Layout>
            <SimpleHero>
                <Banner
                    title="continue exploring"
                    info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                recusandae aperiam a"
                >
                    <Link to="/tours/" className="btn-white">
                        explore tours
                    </Link>
                </Banner>
            </SimpleHero>
            <About />
            <Services />
        </Layout>
    )
}

export default home
