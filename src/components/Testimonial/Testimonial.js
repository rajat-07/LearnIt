import React from 'react';
import Testi3 from '../../images/testimonials/testi-3.png';
import './Testimonial.css';

function Testimonial(){
    return(
        <section class="testimonials_area p_120">
        	<div class="container">
        		<div class="testi_slider owl-carousel">
        			<div class="item">
        				<div class="testi_item">
							<img src={Testi3} alt=""/>
       						<h4>Fannie Rowe</h4>
       						<ul class="list">
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       						</ul>
       						<p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
        				</div>
        			</div>
        			<div class="item">
        				<div class="testi_item">
							<img src={Testi3} alt=""/>
       						<h4>Fannie Rowe</h4>
       						<ul class="list">
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       						</ul>
       						<p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
        				</div>
        			</div>
        			<div class="item">
        				<div class="testi_item">
							<img src={Testi3} alt=""/>
       						<h4>Fannie Rowe</h4>
       						<ul class="list">
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       							<li><a href="#"><i class="fa fa-star"></i></a></li>
       						</ul>
       						<p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    )
}

export default Testimonial;