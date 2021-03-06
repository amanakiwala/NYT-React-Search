var React = require('react');
var Router = require('react-router');

var Main = React.createClass({
	render: function(){
		return(

			<div className ="main-container">		
				<div className="container">	
		          <nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"/>
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							
							<a className="navbar-brand" href="#">NYT-React</a>
						</div>
				
						
						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#Search">Search</a></li>
								<li><a href="#Saved">Saved Articles</a></li>
							</ul>
						</div>
					</div>
				</nav>
		      </div>

		      <div className="container">
		      	{this.props.children}
		      </div>
		   </div>   

			)
	}
});
module.exports = Main

