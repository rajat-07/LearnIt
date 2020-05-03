import React from 'react';
import Team1 from '../../images/team/team-1.jpg';
import Team2 from '../../images/team/team-2.jpg';
import Team3 from '../../images/team/team-3.jpg';
import Team4 from '../../images/team/team-4.jpg';
import './Team.css';

function Team(){
    return(
        <section class="team_area p_120">
        	<div class="container">
        		<div class="main_title">
        			<h2>Meet Our Faculty</h2>
        			<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
        		</div>
        		<div class="row team_inner">
        			<div class="col-lg-3 col-sm-6">
        				<div class="team_item">
        					<div class="team_img">
        						<img class="rounded-circle" src={Team1} alt=""/>
        						<div class="hover">
        							<a href="#"><i class="fa fa-facebook"></i></a>
        							<a href="#"><i class="fa fa-twitter"></i></a>
        							<a href="#"><i class="fa fa-linkedin"></i></a>
        						</div>
        					</div>
        					<div class="team_name">
        						<h4>Ethel Davis</h4>
        						<p>Managing Director (Sales)</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-3 col-sm-6">
        				<div class="team_item">
        					<div class="team_img">
        						<img class="rounded-circle" src={Team2} alt=""/>
        						<div class="hover">
        							<a href="#"><i class="fa fa-facebook"></i></a>
        							<a href="#"><i class="fa fa-twitter"></i></a>
        							<a href="#"><i class="fa fa-linkedin"></i></a>
        						</div>
        					</div>
        					<div class="team_name">
        						<h4>Ethel Davis</h4>
        						<p>Managing Director (Sales)</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-3 col-sm-6">
        				<div class="team_item">
        					<div class="team_img">
        						<img class="rounded-circle" src={Team3} alt=""/>
        						<div class="hover">
        							<a href="#"><i class="fa fa-facebook"></i></a>
        							<a href="#"><i class="fa fa-twitter"></i></a>
        							<a href="#"><i class="fa fa-linkedin"></i></a>
        						</div>
        					</div>
        					<div class="team_name">
        						<h4>Ethel Davis</h4>
        						<p>Managing Director (Sales)</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-3 col-sm-6">
        				<div class="team_item">
        					<div class="team_img">
        						<img class="rounded-circle" src={Team4} alt=""/>
        						<div class="hover">
        							<a href="#"><i class="fa fa-facebook"></i></a>
        							<a href="#"><i class="fa fa-twitter"></i></a>
        							<a href="#"><i class="fa fa-linkedin"></i></a>
        						</div>
        					</div>
        					<div class="team_name">
        						<h4>Ethel Davis</h4>
        						<p>Managing Director (Sales)</p>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    )
}

export default Team;