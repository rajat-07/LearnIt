import React from 'react';
import Blog1 from '../../images/latest-blog/l-blog-1.jpg';
import Blog2 from '../../images/latest-blog/l-blog-2.jpg';
import Blog3 from '../../images/latest-blog/l-blog-3.jpg';
import Blog4 from '../../images/latest-blog/l-blog-4.jpg';
import './Blog.css';

function Blog(){
    return(
        <section class="latest_blog_area p_120">
        	<div class="container">
        		<div class="main_title">
        			<h2>Latest Posts From Blog</h2>
        			<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
        		</div>
        		<div class="row latest_blog_inner">
        			<div class="col-lg-3 col-md-6">
        				<div class="l_blog_item">
        					<img class="img-fluid" src={Blog1} alt=""/>
        					<a class="date" href="#">25 October, 2018  |  By Mark Wiens</a>
        					<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>
        					<p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery</p>
        				</div>
        			</div>
        			<div class="col-lg-3 col-md-6">
        				<div class="l_blog_item">
        					<img class="img-fluid" src={Blog2} alt=""/>
        					<a class="date" href="#">25 October, 2018  |  By Mark Wiens</a>
        					<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>
        					<p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery</p>
        				</div>
        			</div>
        			<div class="col-lg-3 col-md-6">
        				<div class="l_blog_item">
        					<img class="img-fluid" src={Blog3} alt=""/>
        					<a class="date" href="#">25 October, 2018  |  By Mark Wiens</a>
        					<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>
        					<p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery</p>
        				</div>
        			</div>
        			<div class="col-lg-3 col-md-6">
        				<div class="l_blog_item">
        					<img class="img-fluid" src={Blog4} alt=""/>
        					<a class="date" href="#">25 October, 2018  |  By Mark Wiens</a>
        					<a href="single-blog.html"><h4>Addiction When Gambling Becomes A Problem</h4></a>
        					<p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    )
}

export default Blog;