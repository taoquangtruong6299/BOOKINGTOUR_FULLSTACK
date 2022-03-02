import '../css/about.css'
import batender from '../img/bartender.png'

function About() {
    return(
        <>
            <div id="about">
                <div class="container">
                    <div class="section-title text-center center">
                    <h2>About Me</h2>

                    </div>
                    <div class="row">
                    <div class="col-xs-12 col-md-6"><img src={batender} class="img-responsive" alt={"bartender"} />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="about-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                        <a href="#portfolio" class="btn btn-default btn-lg page-scroll">My Portfolio</a> </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
