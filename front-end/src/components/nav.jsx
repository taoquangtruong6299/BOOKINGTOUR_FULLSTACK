import '../css/nav.css'

function Nav(){
    return(
        <>
            <nav id="menu">
                <div class="container nav"> 
                    <div class="col-6 logo row">
                        <a class="navbar-brand page-scroll" href="/#page-top"><i class="fas fa-plane-departure"></i>&nbsp;eBOOKING</a> 
                        <form class="" action="/search">
                            <input name="key" type="search" class="search" />
                            <button type="submit" class="btn-submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                    
                    <div class="col-6" id="bs-example-navbar-collapse-1">
                        <ul class="">
                            <li><a href="#page-top" class="page-scroll">Home</a></li>
                            <li><a href="#about" class="page-scroll">About</a></li>
                            <li><a href="#portfolio" class="page-scroll">Portfolio</a></li>
                            <li><a href="#contact" class="page-scroll">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;