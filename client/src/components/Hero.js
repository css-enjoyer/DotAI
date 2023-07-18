function Hero({image, name, className}) {
  	return (
    	<div className={`Hero ${className}`}>
            <img src={image} alt={name} id="hero-img"></img>
            <p>{name}</p>
    	</div>
  	);
}
export default Hero;
