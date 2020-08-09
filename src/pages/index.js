import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <p>This project provides a growing overview of datasets, maps and visualizations that document facilities with potential for "Fast Disaster" in Southern California.</p>
    
    <p>The website serves as a companion to the course <a href="https://disaster-sts-network.org/content/environmental-injustice-summer-2020/essay">Environmental Injustice</a>, taught by Prof. Kim Fortun at the University of California Irvine.</p>
    
    <p>Get in touch with Tim Sch&uuml;tz (<a href="mailto:tschuetz@uci.edu">tschuetz@uci.edu</a>) if you would like to contribute to any of the mapping projects.</p>
    
    <h2>Ammonium Nitrate (Fertilizer) Storage</h2>
    <p>We are currently working on a map visualizing the storage of ammonium nitrate in California.</p>
                                                                                                                         
    <p><iframe src="https://timschuetz.github.io/ammonium-nitrate-facilities-ca/" width="100%" height="400px"></iframe></p>                                                                                                                    
    <h2>Risk Management Plan (RMP) Facilities</h2>
    <p>Visualized with <a href="https://rtk.rjifuture.org/rmp/">data</a> by the Right-to-Know-Network and Houston Chronicle. Created and maintained by Tim Sch&uuml;tz, Rieko Konishi and Timothy Do.</p>
        
    <p>To contribute to the map comment on the <a href="https://docs.google.com/spreadsheets/d/104wMMATFPWQAmEt6iCvCow0qHG0NiMeZUqC4rBlxrso/edit#gid=0">data table</a> hosted on Google Sheets. You can also make pull requests on <a href="https://github.com/timschuetz/RMP-Facilities-Los-Angeles-County">GitHub</a>.</p>
   
    <p><iframe src="https://timschuetz.github.io/rmp-facilities-los-angeles-county/" width="100%" height="400px"></iframe></p>
        

  </Layout>
)

export default IndexPage
