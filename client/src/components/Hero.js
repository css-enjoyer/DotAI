function Hero({image, name}) {
  	return (
    	<div className="Hero">
            <img src={image} alt={name} id="hero-img"></img>
            <p>{name}</p>
    	</div>
  	);
}
export default Hero;
