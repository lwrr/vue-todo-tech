module.exports=(isDev)=>{
	return {
		preserveWhitepase:true,
		extractCSS:!isDev,
		cssModules:{}
	}
}